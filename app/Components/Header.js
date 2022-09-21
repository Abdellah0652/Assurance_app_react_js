import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                <i className="fa fa-bars"></i>
              </button>
              <Link className="navbar-brand" to="/HomeSlider">
                Insurance<span>Press</span>
              </Link>
            </div>
            <div className="collapse navbar-collapse navbar-main-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/HomeSlider">
                    Assurance <br />
                    Moto
                  </Link>
                </li>
                <li>
                  <Link to="blog.html">
                    Assurance
                    <br /> sante
                  </Link>
                </li>
                <li>
                  <Link to="blog-details.html">
                    Assurance
                    <br /> habitations{" "}
                  </Link>
                </li>
                <li>
                  <Link to="contact-us.html">
                    Assurance <br />
                    Emprunteur
                  </Link>
                </li>
                <li>
                  <Link to="contact-us.html">
                    Assurance <br />
                    Animaux
                  </Link>
                </li>
                <li>
                  <Link to="contact-us.html">
                    Assurance
                    <br /> decis
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn-default">
                    Autre Assurances
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
