import React from "react"
import instagram from "../images/icons/instagram.svg"
import facebook from "../images/icons/facebook.svg"
import youtube from "../images/icons/youtube.svg"


function getCurrentYear() {
  let thisYear = new Date().getFullYear()
  if (thisYear !== 2020) {
    return ` - ${thisYear.toString().substring(2)}`
  }
}

function Footer() {
  return (
    <footer id="contact" className="in-view flex flex-col items-center p-8 bg-blue-600 text-white mt-12">
      <div className="icons flex justify-between w-1/2 md:w-1/4 mb-8">
        <a href="https://kindweb.com"><img src={instagram} alt="instagram icon" /></a>
        <a href="https://kindweb.com"><img src={facebook} alt="facebook icon" /></a>
        <a href="https://kindweb.com"><img src={youtube} alt="youtube icon" /></a>
      </div>
      <small className="text-blue-300">&copy; Copyright 2020{getCurrentYear()} KIND Websites</small>
      <div>
        <h6 className="font-bold uppercase tracking-widest mt-4">* This website for demonstration purposes only *</h6>
      </div>
    </footer>
  )
}

export default Footer
