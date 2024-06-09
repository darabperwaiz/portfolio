import React from 'react'
import style from './navbar.module.css'
import { navData } from "../headerData"
import NavItem from "../NavItem/NavItem"

const Navbar = () => {
  return (
    <div className={style.navbar} data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
        {navData.map((navItem, index)=> (
            <NavItem navItem={navItem} key={index}/>
        ))}
    </div>
  )
}

export default Navbar
