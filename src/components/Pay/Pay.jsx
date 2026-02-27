import { useState } from 'react'
import { useLocation, Navigate, useNavigate } from 'react-router'
import styles from './Pay.module.scss'
import swal from 'sweetalert'
import banks from './data' 

function Pay() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [bankName, setBankName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv2, setCvv2] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [errors, setErrors] = useState({})

  if (!state) {
    return <Navigate to="/shop" replace />
  }

  const { totalPrice, allProductCount } = state

  const validate = () => {
    const newErrors = {}

    if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = 'شماره کارت باید 16 رقم باشد'
    }

    if (!/^\d{3,4}$/.test(cvv2)) {
      newErrors.cvv2 = 'کد CVV2 باید 3 یا 4 رقم باشد'
    }

    const monthNum = Number(expMonth)
    if (!(monthNum >= 1 && monthNum <= 12)) {
      newErrors.expMonth = 'ماه انقضا باید عددی بین 1 تا 12 باشد'
    }
    const yearNum = Number(expYear)
    if (!(yearNum >= 1 && yearNum <= 10)) {
      newErrors.expYear = 'سال انقضا باید عددی بین 1 تا 10 باشد'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      swal("پرداخت شد", "خرید شما با موفقیت انجام شد", "success").then(() => {
        navigate('/')
      })
    }
  }

  return (
    <section className={styles.pay}>
      <div className={styles.pay__box}>
        <header className={styles.pay__header}>
          <h2 className={styles.pay__title}>درگاه پرداخت</h2>
          <p className={styles.pay__summary}>
            {allProductCount} کالا | {totalPrice.toLocaleString('fa-IR')} تومان
          </p>
        </header>

        <div className={styles.pay__card}>
          <h3>{bankName}</h3>
          <p className={styles.pay__card_number}>
            {cardNumber.length > 0 ? cardNumber : 'XXXX XXXX XXXX XXXX'}
          </p>
          <div className={styles.pay__card_info}>
            <span>{expMonth || 'MM'} / {expYear || 'YY'}</span>
            <span>{cvv2.length > 0 ? cvv2 : 'CVV2'}</span>
          </div>
        </div>

        <form className={styles.pay__form} onSubmit={handleSubmit} noValidate>
          <div className={styles.pay__field}>
            <label className={styles.pay__label}>شماره کارت</label>
            <input
              className={styles.pay__input}
              type="text"
              placeholder="****************"
              maxLength={16}
              value={cardNumber}
              onChange={(e) => {
                const input = e.target.value.replace(/\D/g, '')
                setCardNumber(input)

                if (input.length >= 6) {
                  const bin = input.substring(0, 6)
                  if (banks[bin]) {
                    setBankName(banks[bin])
                  } else {
                    setBankName('بانک نامشخص')
                  }
                } else {
                  setBankName('')
                }
              }}
            />
            {errors.cardNumber && <small style={{ color: 'red' }}>{errors.cardNumber}</small>}
          </div>

          <div className={styles.pay__field}>
            <label className={styles.pay__label}>CVV2</label>
            <input
              className={styles.pay__input}
              type="password"
              placeholder="***"
              maxLength={4}
              value={cvv2}
              onChange={(e) => setCvv2(e.target.value.replace(/\D/g, ''))}
            />
            {errors.cvv2 && <small style={{ color: 'red' }}>{errors.cvv2}</small>}
          </div>

          <div className={styles.pay__row}>
            <div className={styles.pay__field}>
              <label className={styles.pay__label}>ماه انقضا</label>
              <input
                className={styles.pay__input}
                type="text"
                placeholder="**"
                maxLength={2}
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value.replace(/\D/g, ''))}
              />
              {errors.expMonth && <small style={{ color: 'red' }}>{errors.expMonth}</small>}
            </div>

            <div className={styles.pay__field}>
              <label className={styles.pay__label}>سال انقضا</label>
              <input
                className={styles.pay__input}
                type="text"
                placeholder="**"
                maxLength={2}
                value={expYear}
                onChange={(e) => setExpYear(e.target.value.replace(/\D/g, ''))}
              />
              {errors.expYear && <small style={{ color: 'red' }}>{errors.expYear}</small>}
            </div>
          </div>

          <div className={styles.pay__actions}>
            <button
              type="submit"
              className={`${styles.pay__btn} ${styles['pay__btn--primary']}`}
            >
              تأیید و پرداخت
            </button>

            <button
              type="button"
              className={`${styles.pay__btn} ${styles['pay__btn--danger']}`}
              onClick={() => {
                setCardNumber('')
                setCvv2('')
                setExpMonth('')
                setExpYear('')
                setErrors({})
                setBankName('')
                 navigate('/')
              }}
            >
              انصراف
            </button>
          </div>
        </form>

        {/* Notice */}
        <div className={styles.pay__notice}>
          <p>* تمامی فیلدها اجباری هستند</p>
          <p>* اطلاعات شما به‌صورت امن پردازش می‌شود</p>
        </div>
      </div>
    </section>
  )
}

export default Pay
