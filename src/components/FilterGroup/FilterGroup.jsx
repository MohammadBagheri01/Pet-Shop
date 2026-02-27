import styles from "./FilterGroup.module.scss";
import FilterItem from "../FilterItem/FilterItem.jsx";

const CATEGORY_ITEMS = [
  { label: "مردانه", value: "men's clothing" },
  { label: "زنانه", value: "women's clothing" },
  { label: "الکترونیک", value: "electronics" },
  { label: "جواهرات", value: "jewelery" },
];

const GENDER_ITEMS = [
  { label: "مردانه", value: "men" },
  { label: "زنانه", value: "women" },
];

function FilterGroup({
  categories,
  setCategories,
  genders,
  setGenders,
}) {
  const toggleItem = (value, setter) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className={styles.filter}>

      <div className={styles.filter__box}>
        <h3 className={styles.filter__title}>دسته‌بندی</h3>

        {CATEGORY_ITEMS.map((item) => (
          <FilterItem
            key={item.value}
            label={item.label}
            checked={categories.includes(item.value)}
            onChange={() => toggleItem(item.value, setCategories)}
          />
        ))}
      </div>

      <div className={styles.filter__box}>
        <h3 className={styles.filter__title}>جنسیت</h3>

        {GENDER_ITEMS.map((item) => (
          <FilterItem
            key={item.value}
            label={item.label}
            checked={genders.includes(item.value)}
            onChange={() => toggleItem(item.value, setGenders)}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterGroup;
