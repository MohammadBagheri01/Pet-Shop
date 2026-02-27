import { useState } from 'react'
import { Link } from 'react-router'
import SideBar from '../SideBar/SideBar'
import BasketItem from '../BasketItem/BasketItem'
import styles from './Cart.module.scss'

function Cart() {
  const [basketShow, setBasketShow] = useState(() => {
    const basket = localStorage.getItem('basket')
    return basket ? JSON.parse(basket) : []
  })

  const totalPrice = basketShow.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  )

  const allProductCount = basketShow.reduce(
    (sum, item) => sum + item.count,
    0
  )

  const OnDeleteHandler = id => {
    const updatedBasket = basketShow.filter(item => item.id !== id)
    setBasketShow(updatedBasket)
    localStorage.setItem('basket', JSON.stringify(updatedBasket))
  }

  const OnCountChangeHandler = (id, newCount) => {
    const updatedBasket =
      newCount <= 0
        ? basketShow.filter(item => item.id !== id)
        : basketShow.map(item =>
            item.id === id ? { ...item, count: newCount } : item
          )

    setBasketShow(updatedBasket)
    localStorage.setItem('basket', JSON.stringify(updatedBasket))
  }

  return (
    <section className={styles.cart}>
      <div className={styles.cart__side}>
        <SideBar
          totalPrice={totalPrice}
          allProductCount={allProductCount}
        />
      </div>

      <div className={styles.cart__products_list}>
        {basketShow.length > 0 ? (
          basketShow.map(item => (
            <BasketItem
              key={item.id}
              {...item}
              OnDelete={OnDeleteHandler}
              OnCountChange={OnCountChangeHandler}
            />
          ))
        ) : (
          <div className={styles.cart__empty}>
            <p>چیزی برای نمایش وجود ندارد</p>
            <Link to="/shop">فروشگاه</Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart
