import { useId } from "react";
import styles from "./FilterItem.module.scss";

function FilterItem({ label, checked, onChange }) {
  const id = useId();

  return (
    <div className={styles.filter__item}>
        <label className={styles.filter__label} htmlFor={id+label}>{label}</label>
      <input
        id={id+label}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default FilterItem;
