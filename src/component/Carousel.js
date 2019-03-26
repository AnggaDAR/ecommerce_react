import React, { Component } from 'react';
// import '../styles/header.css';
import { Link } from "react-router-dom";
import carousel_1 from '../images/carousel-1.jpg';
import carousel_2 from '../images/carousel-2.jpg';
import carousel_3 from '../images/carousel-3.jpg';
// import LogButton from "./LogButton"
// import { connect } from "unistore/react"
// import { actions } from "../store"

class Carousel extends Component {
  render() {
    return (
    <section id="carousel">
        <div className="row mx-0">
            <div className="col-12 main px-0">
                <div id="home-carousel" className="carousel slide carousel-fade mx-0" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="1200">
                            <img src={carousel_1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-interval="1200">
                            <img src={carousel_2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-interval="1200">
                            <img src={carousel_3} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#home-carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#home-carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Carousel;
// export default connect("is_login", actions)(Header)
