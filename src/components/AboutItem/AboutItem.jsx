import styles from './AboutItem.module.scss'

function AboutItem({ children, title, description }) {
  return (
    <div className={styles.about_item}>
      <div className={styles.about_item__icon}>
        {children}
      </div>

      <div className={styles.about_item__text}>
        <h3 className={styles.about_item__title}>{title}</h3>
        <p className={styles.about_item__description}>{description}</p>
      </div>
    </div>
  )
}

export default AboutItem
