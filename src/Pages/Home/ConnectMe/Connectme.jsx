import React from 'react'
import style from './connectme.module.css'

const Connectme = () => {
  return (
    <div className={style.container}>
        <div className={style.wrapper}>
            <h3>Start a project</h3>
            <p>Interested in working together? We should queue up a time to chat</p>
            <button>Let's do this</button>
        </div>
    </div>
  )
}

export default Connectme
