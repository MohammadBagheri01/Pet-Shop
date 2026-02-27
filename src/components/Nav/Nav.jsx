import React from "react";
import { Link } from "react-router";
import styles from './Nav.module.scss'
function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link to="/">خانه</Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/about">درباره‌ ما</Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/shop">فروشگاه</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
