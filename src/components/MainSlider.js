import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slide from './Slide'

const MainSlider = () => {

  const [slides, setSlides] = useState([])
  const [load, setLoad] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const response = await axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/sliders'
    })
    setSlides(response.data)
    setLoad(true)
  }

  

  return (

    <section className="intro_section page_mainslider ds all-scr-cover bottom-overlap-teasers">
      <div className="flexslider" data-dots="true" data-nav="true">
        <ul className="slides">
        <Slide primero="primero" />
        <Slide primero="segundo" />
        <Slide primero="tercero" />
        </ul>
      </div>
    </section>
  )


}


export default MainSlider



  // < li >
  // <div className="slide-image-wrap"> <img src="images/slide03.jpg" alt="" /> </div>
  // <div className="container">
  // <div className="row">
  // <div className="col-sm-12 text-center">
  // <div className="slide_description_wrapper">
  // <div className="slide_description">
  // <div className="intro-layer" data-animation="fadeInRight"> asd </div>
  // <div className="intro-layer" data-animation="fadeInLeft">
  // <h2> <span className="highlight3">Become The Change</span><br /> You Want To See </h2>
  // </div>
  // <div className="intro-layer" data-animation="fadeInRight">
  // <p className="thin"><em>Details on the huge Calvin Sandoval celebration coming to Hillcrest on February 27, 2018</em></p>
  // </div>
  // <div className="intro-layer" data-animation="fadeInUp">
  // <div className="slide_buttons"> <a href="contact.html" className="theme_button color1 min_width_button">Be Proud!</a> </div>
  // </div>
  // </div>
  // </div>
  // </div>
  // </div>
  // </div>
  // </li >