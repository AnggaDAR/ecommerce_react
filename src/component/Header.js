import React, { Component } from 'react';
import logo from '../logo.svg';
// import '../styles/header.css';
import { Link } from "react-router-dom";
// import Login from "../pages/Login"
import Account from "./Account"
import Search from "./Search"
import MainMenu from "./MainMenu"
// import { connect } from "unistore/react"
// import { actions } from "../store"

class Header extends Component {
  render() {
    return (
    <header className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark row mx-0 justify-content-between">
            <div>
                <Link className="navbar-brand logo text-center" to="/">WG</Link>
                <Link className="navbar-brand" to="/">Warunggunung</Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-center col-lg-4 mr-0" id="navbarSupportedContent">
                {/* <Search/> */}
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg row mx-0">
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse float-center" id="navbarSupportedContent">
                <MainMenu className="col-lg-4"/>
                <Account/>
                    {/* <Login/> */}
            </div>
        </nav>
    </header>
    );
  }
}

export default Header;
// export default connect("is_login", actions)(Header)
