import React, { Component } from 'react';
// import '../styles/header.css';
import { Link } from "react-router-dom";
import eiger from '../images/eiger-logo.jpg';
import consina from '../images/consina-logo.png';
import arei from '../images/arei-logo.png';
// import LogButton from "./LogButton"
// import { connect } from "unistore/react"
// import { actions } from "../store"

class Category extends Component {
  render() {
    return (
    <section id="brand" className="my-4">
        <hr/>
        <h3 className="text-secondary text-center">Available Brands</h3>
        <hr/>
        <div className="row mx-1 d-flex flex-wrap align-items-center">
          <div className="col-md-3 col-12">
            <div className="card brand">
              <Link to="/brand/eiger" ><img src={eiger} className="card-img" alt="eiger"/></Link>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="card brand">
              <Link to="/brand/consina" ><img src={consina} className="card-img" alt="consina"/></Link>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="card brand">
              <Link to="/brand/arei" ><img src={arei} className="card-img" alt="arei"/></Link>
            </div>
          </div>
        </div>
    </section>
    );
  }
}

export default Category;
// export default connect("is_login", actions)(Header)
