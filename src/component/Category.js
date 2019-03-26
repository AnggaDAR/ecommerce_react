import React, { Component } from 'react';
// import '../styles/header.css';
import { Link } from "react-router-dom";
import backpack from '../images/backpack.jpg';
import apparel from '../images/apparel.jpg';
import footwear from '../images/footwear.jpg';
import accesories from '../images/accesories.jpg';
// import LogButton from "./LogButton"
// import { connect } from "unistore/react"
// import { actions } from "../store"

class Category extends Component {
  render() {
    return (
    <section id="category" className="my-4">
        <hr/>
            <h3 className="text-secondary text-center">Browse Our categories</h3>
        <hr/>
        <div className="row mx-1">
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card category bg-dark shadow-lg rounded">
                    <img src={backpack} className="card-img" alt="Backpack" />
                    <div className="card-img-overlay">
                        <h5 className="card-title text-center mx-0"><Link to="/category/backpack">Backpack</Link></h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card category bg-dark shadow-lg rounded">
                    <img src={apparel} className="card-img" alt="Apparel"/>
                    <div className="card-img-overlay">
                        <h5 className="card-title text-center mx-0"><Link to="/category/apparel">Apparel</Link></h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card category bg-dark shadow-lg rounded">
                    <img src={footwear} className="card-img" alt="Footwear"/>
                    <div className="card-img-overlay">
                        <h5 className="card-title text-center mx-0"><Link to="/category/footwear">Footwear</Link></h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card category bg-dark shadow-lg rounded">
                    <img src={accesories} className="card-img" alt="Accesories"/>
                    <div className="card-img-overlay">
                        <h5 className="card-title text-center mx-0"><Link to="/category/accessories">Accesories</Link></h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Category;
// export default connect("is_login", actions)(Header)
