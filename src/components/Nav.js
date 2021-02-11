import React from "react"
import { Link } from "gatsby"



function Nav({ isNavOpen, categories, setIsNavOpen }) {
  const navLi = []

  categories.forEach((category) => {
    category = !isNaN(category.charAt(0)) ? category.substr(1) : category

    navLi.push(

      <li key={category} className="p-2 capitalize" onClick={() => setIsNavOpen(!isNavOpen)}>
        <Link to={`#${category}`} >
          {category}s
      </Link>
      </li >

    )
  })

  return (
    // up to 10 categories plus contact -- NEED TO IMPLEMENT
    <nav className={`h-0 w-full ${isNavOpen ? 'nav-open' : ''} lg:h-auto lg:nav-open lg:flex lg:justify-center`}>
      <ul className="bg-blue-600 bg-opacity-95 border-t border-white text-center lg:w-6/12 lg:border-none lg:flex lg:justify-center flex-wrap">
        <li className="p-2 capitalize" onClick={() => setIsNavOpen(!isNavOpen)}>
          <Link to='#' >
            Home
      </Link>
        </li >

        {navLi}

        <li className="p-2 capitalize" onClick={() => setIsNavOpen(!isNavOpen)}>
          <Link to='#contact' >
            contact
      </Link>
        </li >
      </ul>
    </nav>
  )
}

export default Nav
