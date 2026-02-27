import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <section className={styles.notfound}>
      <div className={styles.notfound__content}>
        <span className={styles.notfound__code}>404</span>
        <h1 className={styles.notfound__title}>صفحه‌ای که دنبالش بودی پیدا نشد</h1>
        <p className={styles.notfound__text}>
          انگار آدرس رو اشتباه زدی یا این صفحه دیگه وجود نداره.
        </p>

        <button onClick={goHome} className={styles.notfound__btn}>
          بازگشت به میولند
        </button>
      </div>
    </section>
  );
}


export default NotFound;
