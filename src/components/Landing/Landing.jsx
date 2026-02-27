import styles from "./Landing.module.scss";
import { Link } from "react-router";
import Services from "../Services/Services";
import Features from "../Features/Features";
function Landing() {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.intro__text_content}>
          <h1 className={styles.intro__title}>
            پت شاپ <span>میولند</span>
          </h1>
          <p className={styles.intro__description}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و زیادی در شصت و سه درصد گذشته حال و آینده
          </p>
          <div className={styles.intro__go_shop}>
            <Link to="/shop">فروشگاه</Link>
          </div>
        </div>
        <div className={styles.intro__image}>
          <img src="/images/intro.png" alt="introImage" />
        </div>
        <div className={styles.services}>
          <Services />
        </div>
      </div>
      <Features />
    </>
  );
}

export default Landing;
