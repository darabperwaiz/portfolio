import React from 'react'
import style from './project.module.css'
import { Link } from "react-router-dom"

const Project = ({item}) => {
  return (
    <div className={style.project}>
      <div className={style.top}>
        <img src={require(`../../../../assets/images/${item.image}`)} alt="" />
      </div>
      <div className={style.bottom}>
        <h2>{item.title.length >= 30? item.title.slice(0, 30).concat('...') : item.title}</h2>
        <div className={style.links}>
            <Link to={item.github} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Github</Link>
            <Link to={item.live} target="_blank" rel="noopener noreferrer">Live</Link>
        </div>
      </div>

    </div>
  )
}

export default Project
