import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import {withRouter} from "react-router-dom";

// import Search from "../components/Search"
import Carousel from "../component/Carousel"
import Category from "../component/Category"
import Brand from "../component/Brand"
// import LoginForm from "../component/LoginBuyer"
import ProductList from "../component/ProductList"
import { connect } from "unistore/react"
import { actions } from "../store"

// import '../styles/gallery.css'
const localProxy = "http://localhost:8010/proxy"
const baseUrl = "http://localhost:5000"
const apiKey = "1656f1c901ff4247b4beb9bee62e70db"
const headlinesUrl = baseUrl + "top-headlines"
const allArticleUrl = baseUrl + "everything"

class SignupBuyer extends Component {
    doSignup = () =>{
        this.props.postSignupBuyer().then(
            () => {
                console.log("sip"+this);
                this.props.history.push("/login/buyer")
            }
        )
    }
    render() {
        if(!this.props.is_login){
            return (
                <section id="signup">
                    <hr/>
                    <h3 className="text-body text-center">Buyer's Signup Form</h3>
                    <hr/>
                    <div className="row justify-content-center">
                        <form className="form col-lg-3 col-md-4 col-sm-6 col-10 my-4 py-5 px-3 shadow-lg" onSubmit={e => e.preventDefault()} role="form">
                            <div className="form-group">
                                <input id="usernameInput" placeholder="Username" name="user_name" className="form-control form-control-sm" type="text" required="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="form-group">
                                <input id="passwordInput" placeholder="Password" name="password" className="form-control form-control-sm" type="password" required="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="form-group">
                                <input id="displayNameInput" placeholder="Display Name" name="display_name" className="form-control form-control-sm" type="text" required="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="form-group">
                                <input id="emailInput" placeholder="Email" name="email" className="form-control form-control-sm" type="text" required="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="form-group">
                                <input id="displayPictureInput" placeholder="Image Url" name="display_picture" className="form-control form-control-sm" type="text" required="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" onClick={() => this.doSignup()} className="btn btn-primary btn-block">Signup</button>
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

// export default Login;
export default connect("is_login",actions)(withRouter(SignupBuyer));
