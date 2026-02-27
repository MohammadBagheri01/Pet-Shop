import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./header.module.scss";
import Nav from "../../../components/Nav/Nav.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb.jsx";
import { IoMdSunny } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const themeChangeHandler = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__nav}>
          <Nav />
        </div>
        <div className={styles.header__themeBtn}>
          <Link to="shop/cart">
            <button className={styles.cart_btn}><FaOpencart /></button>
          </Link>
          <button onClick={themeChangeHandler} className={styles.toggleBtn}>
            {theme === "dark" ? <IoMdSunny /> : <MdOutlineWbSunny />}
          </button>
        </div>
        <div className={styles.header__brand}>
          <h2 className={styles.brand__title}>میــو‌لند</h2>
        </div>
      </div>
      <div className={styles.header__breadcrumb}>
        <Breadcrumb />
      </div>
    </header>
  );
}

export default Header;
