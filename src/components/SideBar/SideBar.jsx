import { Link } from 'react-router'
import styles from './SideBar.module.scss'

function SideBar({ totalPrice, allProductCount }) {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.sidebar__title}>
        {allProductCount > 0
          ? `تعداد محصولات: ${allProductCount}`
          : 'کالایی وجود ندارد'}
      </h3>

      {allProductCount > 0 && (
        <div className={styles.sidebar__pay}>
          <h2 className={styles.sidebar__total_price}>مبلغ کل</h2>
          <h2 className={styles.sidebar__total_price}>{` ${totalPrice.toLocaleString('fa-ir')}  تومان`}
          </h2>
          <Link className={styles.sidebar__link}
            to="/shop/pay"
            state={{
              totalPrice,
              allProductCount,
            }}
          >
            پرداخت
          </Link>
        </div>
      )}
    </div>
  )
}

export default SideBar
