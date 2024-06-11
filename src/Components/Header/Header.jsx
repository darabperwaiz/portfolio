import React, { useState, useEffect } from "react";
import style from "./header.module.css";
import Navbar from "./Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
  const [loading, setLoading] = useState(true);
  const [active, setIsActive] = useState(null);
  const [theme, setTheme] = useState(null);

  // Toggle Theme
  const toggle = () => {
    const newTheme = localStorage.getItem('theme')
    {newTheme == "dark-theme" ? localStorage.setItem('theme', 'light-theme') : localStorage.setItem('theme', 'dark-theme')}
    const getTheme = localStorage.getItem('theme')
    {getTheme == "dark-theme" ? setIsActive(true) : setIsActive(false)}
    setTheme(getTheme)
  };

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -200; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  useEffect(()=> {
    AOS.init({
      disable: "mobile",
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: true,
      mirror: true
    })
  })

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Initialize theme on load
  useEffect(()=> {
    const newTheme = localStorage.getItem('theme') || null
    if(newTheme == null) {
      localStorage.setItem("theme", "dark-theme")
      setIsActive(true)
    }
    if(newTheme=="dark-theme") {
      setIsActive(true)
      setTheme(newTheme)
    }else if(newTheme=="light-theme") {
      setIsActive(false)
      setTheme(newTheme)
    }
    
  }, [])
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
 

  if (loading) {
    return (
      <div className={style.loaderContainer}>
        <div className={style.loaderWrapper}>
          <h1>Sibghatullah</h1>
          <div className={style.loader}>
            <div className={style.progressLoader}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={style.headerWrapper}>
        <div className={style.header}>
          <div className={style.right}>
            <Link to="/" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
              <h2>sibghatullah.</h2>
            </Link>
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
          <NavHashLink to="#contact" scroll={el => scrollWidthOffset(el)} className={style.logBtn} data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
            Connect <i class="fa-solid fa-arrow-right-long"></i>
          </NavHashLink>
          <div className={style.hamburger}>
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
