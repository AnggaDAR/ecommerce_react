import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import {withRouter} from "react-router-dom";
import { Link } from "react-router-dom";

// import Header from "../components/Header"
// import Footer from "../components/Footer"
// import TopStory from "../components/TopStory"
// import StoryList from "../components/StoryList"
// import Search from "../components/Search"
import Carousel from "../component/Carousel"
import Category from "../component/Category"
import Brand from "../component/Brand"
import Latest from "../component/Latest"
import ProductList from "../component/ProductList"
import { connect } from "unistore/react"
import { actions } from "../store"

// import '../styles/gallery.css'

const localProxy = "http://localhost:8010/proxy"
const baseUrl = "http://localhost:5000"
const apiKey = "1656f1c901ff4247b4beb9bee62e70db"
const headlinesUrl = baseUrl + "top-headlines"
const allArticleUrl = baseUrl + "everything"

class Profile extends Component {
    render() {
        if (this.props.is_login){
            return (
                <section id="profile">
                    <hr/>
                    <h3 className="text-secondary text-center">Profile Detail</h3>
                    <hr/>
                    <div className="row mx-1 my-5 justify-content-center">
                    <div className="col-lg-4 col-md-5 col-12 py-3 shadow-lg">
                        <img src={this.props.display_picture} className="card-img rounded m-2" alt="Backpack"/>
                    </div>
                    <div className="col-lg-4 col-md-5 col-12 py-3 shadow-lg">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope="row">User ID</th>
                                    <td>{this.props.user_id}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Username</th>
                                    <td>{this.props.user_name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Display Name</th>
                                    <td>{this.props.display_name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>{this.props.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Status</th>
                                    <td>{this.props.role}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Description</th>
                                    <td>{this.props.description}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Joined At</th>
                                    <td>{this.props.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to="/editprofile/buyer" className="btn btn-primary btn-lg">Edit Profile</Link>
                    </div>
                    </div>
                </section>
            );
        }
        else {
            alert("Untuk melihat profile, silakan login dulu")
            return <Redirect to={{pathname: "/"}}/>
        }
    }
}

// export default Detail;
export default connect("is_login,user_id,user_name,password,display_name,email,display_picture,description,created_at,role,token",actions)(withRouter(Profile));

{/* <h4>{this.props.user_id}</h4>
<h5>{this.props.user_name}</h5><br/>
<p>{this.props.password}</p>
<p>{this.props.display_name}</p>
<p>{this.props.email}</p>
<p>{this.props.description}</p>
<p>{this.props.created_at}</p>
<p>{this.props.role}</p> */}