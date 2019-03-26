import React, { Component } from 'react';
// import '../styles/header.css';
import { Link } from "react-router-dom";
// import LogButton from "./LogButton"
import { connect } from "unistore/react"
import { actions } from "../store"

class Account extends Component {
  doLogout = () => {
    this.props.postLogout().then(
        () => {
            console.log("sip"+this);
            alert("Logout Berhasil")
            this.props.history.push("/")
        }
    )
  }

  render() {
    if (this.props.is_login) {
      if (this.props.role === "buyer"){
        return (
          <ul className="navbar-nav mr-0 col-lg-3">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAccount" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                {/* Account */}
                {"Hi, "+this.props.display_name.slice(0,10)}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownAccount">
                    <Link className="dropdown-item" to="/profile/buyer">Profile</Link>
                    <Link className="dropdown-item" to="/cart">Cart</Link>
                    <Link className="dropdown-item" to="/transaction">Transaction</Link>
                </div>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="#" onClick={() => this.doLogout()}>Logout</Link>
            </li>
          </ul>
        );
      }
      else {
        return (
          <ul className="navbar-nav mr-0 col-lg-3">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAccount" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                {/* Account */}
                {"Hi, "+this.props.display_name.slice(0,10)}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownAccount">
                    <Link className="dropdown-item" to="/profile/seller">Profile</Link>
                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                    {/* <Link className="dropdown-item" to="/transaction">Transaction</Link> */}
                </div>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="#" onClick={() => this.doLogout()}>Logout</Link>
            </li>
          </ul>
        );
      }
      
    } else {
      return (
        <ul className="navbar-nav mr-0 col-lg-3">
          {/* <li className="nav-item active px-2">
              <Link className="nav-link" to="/login">Login</Link>
          </li> */}
          <li className="nav-item dropdown px-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBrand" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Login
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownBrand">
                  <Link className="dropdown-item" to="/login/seller">Seller</Link>
                  <Link className="dropdown-item" to="/login/buyer">Buyer</Link>
              </div>
          </li>
          <li className="nav-item dropdown px-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBrand" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Signup
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownBrand">
                  <Link className="dropdown-item" to="/signup/seller">Seller</Link>
                  <Link className="dropdown-item" to="/signup/buyer">Buyer</Link>
              </div>
          </li>
          {/* <li className="nav-item active px-2">
              <Link className="nav-link" to="/signup">Signup</Link>
          </li> */}
        </ul>
      );
    }
  }
}

// export default Account;
export default connect("is_login, display_name, role", actions)(Account)
