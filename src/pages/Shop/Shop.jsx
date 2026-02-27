import { useEffect, useState } from "react";
import styles from "./Shop.module.scss";
import Search from "../../components/Search/Search";
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import Products from "../../components/Products/Products";

function Shop() {
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  /* 🔒 بستن خودکار فیلتر هنگام خروج از موبایل */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsFilterOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.shop}>
      {/* 🔘 دکمه فیلتر (فقط موبایل) */}
      <button
        className={styles.shop__filter_btn}
        onClick={() => setIsFilterOpen(true)}
      >
        فیلتر
      </button>

      {/* 📌 سایدبار / Drawer */}
      <aside
        className={`${styles.shop__sidebar} ${
          isFilterOpen ? styles.shop__sidebar_active : ""
        }`}
      >
        <FilterGroup
          categories={categories}
          setCategories={setCategories}
          genders={genders}
          setGenders={setGenders}
        />

        {/* ❌ بستن در موبایل */}
        <button
          className={styles.shop__close}
          onClick={() => setIsFilterOpen(false)}
        >
          ✕
        </button>
      </aside>

      {/* 🌑 بک‌دراپ موبایل */}
      {isFilterOpen && (
        <div
          className={styles.shop__backdrop}
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      {/* 🛍 محصولات */}
      <main className={styles.shop__content}>
        <Search
          value={searchValue}
          onChangeValue={(e) => setSearchValue(e.target.value)}
          onClear={() => setSearchValue("")}
        />

        <Products
          searchValue={searchValue}
          categories={categories}
          genders={genders}
        />
      </main>
    </section>
  );
}

export default Shop;
