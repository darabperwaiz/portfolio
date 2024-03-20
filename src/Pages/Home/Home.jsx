import React from 'react'
import Hero from "./Hero/Hero"
import Aboutme from "./Aboutme/Aboutme"
import Projects from "./Projects/Projects"
import RecentBlogs from "./RecentBlogs/RecentBlogs"
import Contactme from "./Contactme/Contactme"
import Connectme from "./ConnectMe/Connectme"

const Home = () => {
  return (
    <div>
      <Hero />
      <Aboutme />
      <Projects />
      {/* <RecentBlogs /> */}
      {/* <Contactme /> */}
      <Connectme />
    </div>
  )
}

export default Home
