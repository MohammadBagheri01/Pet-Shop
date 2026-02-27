import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Products.module.scss";
import Product from "../Product/Product";

function Products({ searchValue, categories, genders }) {
  const [allProducts, setAllProducts] = useState([]);
  const [debouncedValue, setDebouncedValue] = useState("");
  const navigate = useNavigate();

  /* fetch */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const normalized = data.map((item) => ({
          ...item,
          gender: item.category.includes("women") ? "women" : "men",
        }));

        setAllProducts(normalized);
      });
  }, []);

  /* debounce */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  /* filter chain */
  const filteredProducts = allProducts
    .filter(
      (item) =>
        categories.length === 0 || categories.includes(item.category)
    )
    .filter(
      (item) => genders.length === 0 || genders.includes(item.gender)
    )
    .filter((item) =>
      debouncedValue
        ? item.title.toLowerCase().includes(debouncedValue.toLowerCase())
        : true
    );

  return (
    <section className={styles.products}>
      {filteredProducts.length ? (
        filteredProducts.map((item) => (
          <Product
            key={item.id}
            {...item}
            showDetail={() => navigate(`/shop/${item.id}`)}
          />
        ))
      ) : (
        <p>محصولی یافت نشد</p>
      )}
    </section>
  );
}

export default Products;
