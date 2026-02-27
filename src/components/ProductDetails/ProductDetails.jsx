import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "./ProductDetails.module.scss";
import { TbTrashXFilled } from "react-icons/tb";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);


  const [count, setCount] = useState(() => {
    const basket = localStorage.getItem("basket");
    if (!basket) return 0;

    const basketItems = JSON.parse(basket);
    const basketProduct = basketItems.find(
      item => item.id === Number(productId)
    );

    return basketProduct ? basketProduct.count : 0;
  });


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [productId]);


  useEffect(() => {
    if (!product) return;

    const basket = localStorage.getItem("basket");
    let basketItems = basket ? JSON.parse(basket) : [];

    const index = basketItems.findIndex(item => item.id === product.id);

    if (count === 0) {
      if (index !== -1) basketItems.splice(index, 1);
    } else {
      if (index === -1) {
        basketItems.push({ ...product, count });
      } else {
        basketItems[index].count = count;
      }
    }

    localStorage.setItem("basket", JSON.stringify(basketItems));
  }, [count, product]);

  if (!product) return <p>در حال دریافت اطلاعات...</p>;

  return (
    <section className={styles.product_detail}>
      <div className={styles.product_detail__head}>
        <div className={styles.product_detail__image}>
          <img src={product.image} alt={product.title} />
        </div>

        <div className={styles.product_detail__text_content}>
          <h1 className={styles.product_detail__title}>{product.title}</h1>

          <p className={styles.product_detail__description}>
            {product.description}
          </p>

          <div className={styles.product_detail__pay}>
            <div className={styles.product_detail__prices}>
              <p className={styles.product_detail__price}>
                {product.price.toLocaleString("fa-IR")} تومان
              </p>

              {count > 0 && (
                <p className={styles.product_detail__total_price}>
                  {(product.price * count).toLocaleString("fa-IR")} تومان
                </p>
              )}
            </div>

          

            {count > 0 && (
              <button
                title="حذف از سبد"
                className={styles.product_detail__clear_btn}
                onClick={() => setCount(0)}
              >
                <TbTrashXFilled />
              </button>
            )}
              <div className={styles.product_detail__count}>
              <div className={styles.product_detail__btns}>
                <button onClick={() => setCount(prev => prev + 1)}>+</button>
                <button onClick={() => setCount(prev => Math.max(0, prev - 1))}>
                  -
                </button>
              </div>
              <p className={styles.product_detail__count_value}>{count}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
