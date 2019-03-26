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

class EditProfileSeller extends Component {
    doEditSeller = () =>{
        this.props.postEditSeller().then(
            () => {
                console.log("sip"+this);
                // this.props.history.push("/login/buyer")
            }
        )
    }
    render() {
        if(this.props.is_login){
            return (
                <section id="signup">
                    <hr/>
                    <h3 className="text-body text-center">Edit Profile Seller</h3>
                    <hr/>
                    <div className="row justify-content-center">
                        <form className="form col-lg-3 col-md-4 col-sm-6 col-10 my-4 py-5 px-3 shadow-lg" onSubmit={e => e.preventDefault()} role="form">
                            <div className="form-group">
                                <label className="text-light">Username</label>
                                <input id="usernameInput" placeholder="Username" name="user_name" className="form-control form-control-sm" type="text" required="" onChange={e => this.props.setField(e)} value={this.props.user_name}/>
                            </div>
                            <div className="form-group">
                                <label className="text-light">Password</label>
                                <input id="passwordInput" placeholder="Password" name="password" className="form-control form-control-sm" type="password" required="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="form-group">
                                <label className="text-light">Display Name</label>
                                <input id="displayNameInput" placeholder="Display Name" name="display_name" className="form-control form-control-sm" type="text" required="" onChange={e => this.props.setField(e)} value={this.props.display_name}/>
                            </div>
                            <div className="form-group">
                                <label className="text-light">Email</label>
                                <input id="emailInput" placeholder="Email" name="email" className="form-control form-control-sm" type="text" required="" onChange={e => this.props.setField(e)} value={this.props.email}/>
                            </div>
                            <div className="form-group">
                                <label className="text-light">Image URL</label>
                                <input id="displayPictureInput" placeholder="Image Url" name="display_picture" className="form-control form-control-sm" type="text" required="" onChange={e => this.props.setField(e)} value={this.props.display_picture}/>
                            </div>
                            <div className="form-group">
                                <label className="text-light">Description</label>
                                <textarea id="description" placeholder="Description" name="description" className="form-control form-control-sm" type="text" required="" onChange={e => this.props.setField(e)} value={this.props.description}></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" onClick={() => this.doEditSeller()} className="btn btn-primary btn-block">Update</button>
                            </div>
                        </form>
                    </div>
                </section>
            );
        } 
        else {
            // alert("Anda sudah login")
            return <Redirect to={{pathname: "/"}}/>
        }
    }
}

// export default Detail;
export default connect("is_login,user_id,user_name,password,display_name,email,display_picture,description,created_at,role,token",actions)(withRouter(EditProfileSeller));

{/* <h4>{this.props.user_id}</h4>
<h5>{this.props.user_name}</h5><br/>
<p>{this.props.password}</p>
<p>{this.props.display_name}</p>
<p>{this.props.email}</p>
<p>{this.props.description}</p>
<p>{this.props.created_at}</p>
<p>{this.props.role}</p> */}