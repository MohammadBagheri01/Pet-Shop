import { Link, useLocation } from "react-router";
import styles from "./Breadcrumb.module.scss";
const pathNameMap = {
  shop: "فروشگاه",
  about: "درباره ما",
  contact: "تماس با ما",
  cart:'سبد خرید'
};
function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  return (
    <nav className={styles.breadcrumb}>
      <span  className={styles.item}>
      <Link to="/" className={styles.link}>خانه</Link>
      </span>

      {paths.map((path, index) => {
        const route = "" + paths.slice(0, index + 1).join("/");
        
        const isLast = index === paths.length - 1;
        const displayName = pathNameMap[path] || decodeURIComponent(path);

        return (
          <span key={route} className={styles.item}>
            <span className={styles.separator} ></span>
            {isLast ? (
              <span className={styles.current}>{displayName}</span>
            ) : (
              <Link to={route} className={styles.link}>
                {displayName}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
