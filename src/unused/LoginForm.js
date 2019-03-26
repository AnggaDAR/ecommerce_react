import React, { Component } from 'react';
// import '../styles/header.css';
import { Link, withRouter} from "react-router-dom";
// import LogButton from "./LogButton"
import { connect } from "unistore/react"
import { actions } from "../store"

class LoginForm extends Component {
    doLogin = () =>{
        this.props.postLogin()
        // .then(
        //     () => {
        //         this.props.history.push("/")
        //     }
        // )
    }
    doLogout = () => {
        this.props.postLogout().then(
            () => {
                console.log("sip"+this);
                this.props.history.push("/")
            }
        )
    }
    render() {
        if (!this.props.is_login) {
            return (
                // <li className="nav-item dropdown order-1">
                //     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownLogin" role="button" data-toggle="dropdown"
                //     aria-haspopup="true" aria-expanded="false">Login</a>
                //     <ul className="dropdown-menu dropdown-menu-left">
                //         <li className="px-3 py-2">
                <div className="row justify-content-center">
                    <form className="form col-lg-3 col-md-4 col-sm-6 col-10 my-4 py-5 px-3 shadow-lg" onSubmit={e => e.preventDefault()} role="form">
                        <div className="form-group">
                            <input id="usernameInput" placeholder="Username" name="user_name" className="form-control form-control-sm" type="text" required="" onChange={e => this.props.setField(e)}/>
                        </div>
                        <div className="form-group">
                            <input id="passwordInput" placeholder="Password" name="password" className="form-control form-control-sm" type="password" required="" onChange={e => this.props.setField(e)}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" onClick={() => this.doLogin()} className="btn btn-primary btn-block">Login</button>
                        </div>
                    </form>
                </div>
                            
                //         </li>
                //     </ul>
                // </li>
            );
        } 
        else {
            return null
            // this.props.history.push("/")
        }
    }
}

// export default Login;
export default connect("is_login", actions)(withRouter(LoginForm))
