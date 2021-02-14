import React from "react"
import instagram from "../images/icons/instagram.svg"
import facebook from "../images/icons/facebook.svg"
import youtube from "../images/icons/youtube.svg"
import email from "../images/icons/mail.svg"


function getCurrentYear() {
  let thisYear = new Date().getFullYear()
  if (thisYear !== 2020) {
    return ` - ${thisYear.toString().substring(2)}`
  }
}

function Footer() {
  return (
    <footer id="contact" className="in-view flex flex-col items-center p-8 bg-blue-700 text-white mt-12">
      <h4 className="font-bold text-lg tracking-wider mb-8">Follow us on social media.</h4>
      <div className="icons flex justify-between w-1/2 md:w-1/4 mb-8">
        <a href="https://placeholderdemolink1.com"><img src={instagram} alt="instagram icon" /></a>
        <a href="https://placeholderdemolink2.com"><img src={facebook} alt="facebook icon" /></a>
        <a href="https://placeholderdemolink3.com"><img src={youtube} alt="youtube icon" /></a>
      </div>
      <div className="flex flex-col items-center font-bold text-lg tracking-wider px-4 my-8">
        <p className="text-center">
          Please use the email below directly to contact us
        </p>
        <a className="flex justify-center items-center text-white text-lg font-bold py-2 my-4 md:text-xl" href="mailto: placeholderdemoemail@gmail.com"><img className="mr-2" src={email} alt="email icon" />CONTACT US</a>
      </div>
      <small className="text-blue-300">&copy; Copyright 2020{getCurrentYear()} YOUR STORE</small>
      <div>
        <h5 className="font-bold uppercase tracking-widest mt-4">* This website for demonstration purposes only *</h5>
      </div>
    </footer>
  )
}

export default Footer
