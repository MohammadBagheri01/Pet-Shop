import { useRef } from "react";
import styles from "./FeaturesContent.module.scss";

function FeaturesContent() {
  const imageRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const targetX = -((x - width / 2) / 20);
    const targetY = -((y - height / 2) / 20);

    position.current.x += (targetX - position.current.x) * 0.1;
    position.current.y += (targetY - position.current.y) * 0.1;

    imageRef.current.style.transform = `
      translate(${position.current.x}px, ${position.current.y}px)
     
    `;
  };

  const handleMouseLeave = () => {
    position.current = { x: 0, y: 0 };
    imageRef.current.style.transform =
      "translate(0px, 0px)";
  };

  return (
    <div
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.container__content}>
        <h2 className={styles.first_title}>محصولات تخصصی</h2>
        <h2 className={styles.secend_title}>Miuo Land</h2>
        <p className={styles.description}>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
        </p>
        <button className={styles.btn}>ارتباط با کارشناسان</button>
      </div>

      <div className={styles.container__image}>
        <img
          ref={imageRef}
          src="/images/features.png"
          alt="features image"
        />
      </div>
    </div>
  );
}

export default FeaturesContent;
