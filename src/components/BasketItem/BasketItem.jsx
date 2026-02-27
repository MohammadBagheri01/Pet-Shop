import { TbTrashXFilled } from 'react-icons/tb'
import styles from './BasketItem.module.scss'

function BasketItem({ id, image, title, price, count, OnDelete, OnCountChange }) {
  const truncate = (text, max = 20) =>
    text.length > max ? text.slice(0, max) + '…' : text

  const increment = () => OnCountChange(id, count + 1)
  const decrement = () => OnCountChange(id, Math.max(0, count - 1))

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={image} alt="product image" />
      </div>
      <h3 className={styles.item__title}>{truncate(title)}</h3>
      <p className={styles.price}>{(price * count).toLocaleString('fa-ir')} تومان</p>
      <div className={styles.item__count}>
        <div className={styles.item__count_btn}>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
        <p>{count}</p>
      </div>
      <button className={styles.item__del_btn} onClick={() => OnDelete(id)}>
        <TbTrashXFilled />
      </button>
    </div>
  )
}

export default BasketItem
