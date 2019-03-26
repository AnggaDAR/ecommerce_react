import React, { Component } from 'react';
import logo from '../logo.svg';
// import '../styles/header.css';
import { Link } from "react-router-dom";
// import LogButton from "./LogButton"
// import { connect } from "unistore/react"
// import { actions } from "../store"

class Footer extends Component {
  render() {
    return (
    <footer className="bg-dark text-light">
        <div className="row mx-2 p-3">
            <marquee>Dapatkan Promo di hari-hari tertentu. Jam kerja calling center: 08.00-24.00 WIB</marquee>
        </div>
        <div className="row mx-2 p-3 justify-content-between">
            <div className="col-3">
                <h4 className="text-center">About Us</h4>
                <p className="about-us text-justify">Warunggunung merupakan sebuah platform jual-beli perlengkapan gunung. Anda
                dapat menjual ataupun membeli perlengkapan gunung yang anda mau.</p>
            </div>
            <div className="col-3">
                <h4 className="text-center">Contact Us</h4>
                <p className="about-us text-justify">Warunggunung merupakan sebuah platform jual-beli perlengkapan gunung. Anda
                dapat menjual ataupun membeli perlengkapan gunung yang anda mau.</p>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;
// export default connect("is_login", actions)(Header)
