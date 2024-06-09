import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import style from "./navitem.module.css";
import { NavHashLink } from "react-router-hash-link";

const NavItem = ({ navItem }) => {
const location = useLocation();
const {pathname} = location;

  const [isBtn, setIsBtn] = useState(false)
  const { title, link } = navItem; 
  
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  // useEffect(() => {
  //   if(pathname==='/blogs') {
  //     setIsBtn(true);
  //     return;
  //   }else {
  //     setIsBtn(false);
  //     return;
  //   }
  // }, [pathname])
  return (
    <>
      {/* {link.startsWith("#") ? ( */}
        <NavHashLink
          smooth
          to={link}
          scroll={el => scrollWidthOffset(el)}
        >
          {title}
        </NavHashLink>
      {/* ) : ( */}
        {/* <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#6941c6" } : null
          }
          to={link}
        >
          {title}
        </NavLink>
      )} */}
    </>
  );
};

export default NavItem;
