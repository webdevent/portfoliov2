import React from 'react'
import { NavLink } from 'react-router-dom'
import mainImg from "../pictures/home-img.png"
import "./home.css"

const HomePage = () => {
  return (
    <div className='home'>
      <div className='info'>
        <h2 className='intro'>Hello there! I'M <strong className="expand">Daniel Ennis</strong> Junior Software Developer and Junior Web Developer</h2>
        <button className='home-btn'><NavLink className='home-link' to={"/about"}>About me</NavLink></button>
        <button className='home-btn'><NavLink className='home-link' to={"/contact"}>Contact me</NavLink></button>
      </div>
      <div className="img-cover">
        <img src={mainImg} className='main-img'/>
      </div>
    </div>
  )
}

export default HomePage
