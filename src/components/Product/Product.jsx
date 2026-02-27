import { useState } from "react";
import styles from "./Product.module.scss";

function Product({ id, title, image, description, showDetail }) {
  const shortDescription =
    description.length > 70 ? description.slice(0, 70) + "..." : description;

  const [isInBasket] = useState(() => {
    const basket = localStorage.getItem("basket");
    if (!basket) return false;

    const basketItems = JSON.parse(basket);
    return basketItems.some(item => item.id === id);
  });

  return (
    <div className={styles.product_card_container}>
      <div className={styles.product_card}>
        <div className={styles.product_card__image}>
          <img src={image} alt={title} />
        </div>

        <div className={styles.product_card__title}>
          <h3>{title}</h3>
          <p className={styles.product_card__description}>
            {shortDescription}
          </p>
        </div>
      </div>

      <button
        className={styles.product_card_container__btn}
        onClick={() => showDetail(id)}
      >
        {isInBasket ? "ادامه خرید" : "مشاهده"}
      </button>

      <button className={styles.product_card_container__offBtn}>OFF</button>
    </div>
  );
}

export default Product;
