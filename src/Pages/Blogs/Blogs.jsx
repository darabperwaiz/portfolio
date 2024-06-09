import React from "react";
import style from "./blogs.module.css";
import './blogs.css'
const Blogs = () => {
  return (
    <>
    {/* <div className={style.flex_section}></div> */}
    <div className={style.flex_section} id="center-container">
      <div className={`${style.container} ${style.outer_container}`} style={{transform: 'none'}}>
        <main id="feed" style={{position: 'relative', overflow: 'visible', minHeight: '1px'}}>
            <div className={style.sticky_bar} style={{paddingTop: '0px', paddingBottom:'1px', position: 'static', transform: 'none'}}>
                <div className={style.main}>
                  
                </div>
            </div>
        </main>
        <aside id="sidebar-container" style={{position: 'relative', overflow: 'hidden', minHeight: '1px'}}>
        <div className={style.sticky_bar} style={{paddingTop: '0px', paddingBottom:'1px', position: 'static', transform: 'none'}}>
              
              </div>
        </aside>
      </div>
    </div>
    </>
  );
}; 

export default Blogs;
