import React from "react"
import { Link } from "gatsby"
// import { window } from "browser-monads"
// import logo from "../../images/logo.png"
const logo = require("../../images/logo.png")
import "./nav.css"

export default function Nav() {
  return (
    <nav>
      <div className="nav_items">
        <a className="nav_item--left" href="/">
          <h2>
            Ali Raza <b>|</b>
            <span>Articles</span>
          </h2>
          {/* <img src={logo} alt="logo" className="nav_item-logo" /> */}
        </a>
        <Link
          className={
            window.location.href.indexOf("contact") > 0
              ? "nav_item-link active"
              : "nav_item-link"
          }
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className={
            window.location.href.indexOf("blog") > 0 ||
            window.location.href.indexOf("category") > 0
              ? "nav_item-link active"
              : "nav_item-link"
          }
          to="/blog"
        >
          Blog
        </Link>
      </div>
    </nav>
  )
}
