import React from 'react'
import {motion} from 'framer-motion'
export default function LandingSection() {
    
  return (  <motion.header id="header" className='header-top' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
  <div className="container">

    <h1><a href="index.html">Shaikh Sufiyan</a></h1>
  
   {/* <a href="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
    <h2> There no place like <span>127.0.0.1</span>. home </h2>

    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link active" href="#header">Home</a></li>
        <li><a className="nav-link" href="#about">About</a></li>
        <li><a className="nav-link" href="#resume">Resume</a></li>
        <li><a className="nav-link" href="#services">Services</a></li>
        <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
        <li><a className="nav-link" href="#contact">Contact</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>

    <div className="social-links">
      <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
      <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
      <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
    </div>

  </div>
</motion.header>)
}
