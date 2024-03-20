import React, { useState, useEffect } from "react";
import style from "./header.module.css";
import Navbar from "./Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Header = () => {
  const [active, setIsActive] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const toggle = () => {
    setIsActive(!active);
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
    <div className={style.headerWrapper}>
      <div className={style.header}>
        <div className={style.right}>
          <Link to='/'><h2>sibghatullah.</h2></Link>
          <div className={style.switch}>
            <i class="fa-solid fa-moon"></i>
            <i class="fa-solid fa-sun"></i>
            <div
              className={active ? style.circleActive : style.circle}
              onClick={toggle}
            ></div>
          </div>
        </div>
        <Navbar />
        <Link to='login' className={style.logBtn}>Login</Link>
        <div className={style.hamburger}><i class="fa-solid fa-bars"></i></div>
      </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
