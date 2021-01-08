import React from "react"
import { Link } from "gatsby"
import { window } from "browser-monads"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AiOutlineGithub } from "react-icons/ai"
// import { FaFacebook } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io"

import { FaLinkedin, FaFacebook } from "react-icons/fa"
import "./Utils"
import "./nav.css"

export default function Nav() {
  return (
    <nav className="headr-cnter">
      <div className="nav_items">
        <a className="nav_item--left" href="/">
          <h2>
            Ali Raza <b style={{ margin: "25px" }}>|</b>
            <span>Articles</span>
          </h2>
        </a>
        <div className="link-gap">
          <Link
            className={
              window.location.href.indexOf("contact") > 0
                ? "nav_item-link active"
                : "nav_item-link"
            }
            to="/contact"
          >
            <AiOutlineGithub />
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
            <FaFacebook />
          </Link>
          <Link to="https://www.youtube.com" className="nav_item-link active">
            <IoLogoYoutube />
          </Link>
          <Link to="/blog" className="nav_item-link active">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </nav>
  )
}
