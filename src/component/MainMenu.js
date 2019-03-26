import React, { Component } from 'react';
// import '../styles/header.css';
import { Link } from "react-router-dom";
import Search from "./Search"
import { connect } from "unistore/react"
import { actions } from "../store"

class MainMenu extends Component {
  render() {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active px-2">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item dropdown px-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCategory" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownCategory">
                  <Link className="dropdown-item" to="/category/backpack">Backpack</Link>
                  <Link className="dropdown-item" to="/category/apparel">Apparel</Link>
                  <Link className="dropdown-item" to="/category/footwear">Footwear</Link>
                  <Link className="dropdown-item" to="/category/accessories">Accesories</Link>
              </div>
          </li>
          <li className="nav-item dropdown px-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBrand" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Brands
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownBrand">
                  <Link className="dropdown-item" to="/brand/eiger">Eiger</Link>
                  <Link className="dropdown-item" to="/brand/consina">Consina</Link>
                  <Link className="dropdown-item" to="/brand/arei">Arei</Link>
              </div>
          </li>
      </ul>
      );
    
  }
}

// export default MainMenu;
export default connect("is_login", actions)(MainMenu)
