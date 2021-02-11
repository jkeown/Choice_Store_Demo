import React, { useState } from "react"
import Logo from "./Logo"
import cart from "../images/icons/shopping-cart.svg"
import menu from "../images/icons/menu.svg"
import close from "../images/icons/x.svg"
import Nav from "./Nav"


function Header({ categories }) {

  const [isNavOpen, setIsNavOpen] = useState(false
  )
  return (
    <header className="flex flex-col justify-center items-center bg-blue-600 text-white fixed w-full z-10">
      <div className="header-container p-4 flex justify-between items-center w-full md:w-8/12 lg:w-6/12">
        <Logo />
        <div className="flex items-center">
          <img className="cursor-pointer order-1 ml-8 lg:hidden" src={isNavOpen ? close : menu} alt="navigation menu toggle" onClick={() => setIsNavOpen(!isNavOpen)} />
          <ul className="flex items-center">
            <li className="snipcart-items-count text-yellow-500 font-bold mr-1"></li>
            <li className="snipcart-checkout cursor-pointer">
              <img src={cart} alt="shopping cart" />
            </li>
          </ul>
        </div>
      </div>
      <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} categories={categories} />
    </header>
  )
}

export default Header
