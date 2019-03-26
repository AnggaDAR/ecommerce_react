import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import {withRouter} from "react-router-dom";

import { connect } from "unistore/react"
import { actions } from "../store"

const localProxy = "http://localhost:8010/proxy"
const baseUrl = "http://localhost:5000"

class Transaction extends Component {
    
    doPostTransaction = (e) =>{
        this.props.postAddTransaction(e)
    }
    render() {
        if(this.props.is_login){
            return (
            <section id="detail">
                <hr/>
                <h3 className="text-secondary text-center">Checkout Transaction</h3>
                <hr/>
                <div className="row mx-1 justify-content-center">
                <div className="col-md-6 col-12 my-5 shadow-lg">
                    <form className="p-2" onSubmit={e => e.preventDefault()}>
                    
                    <div className="form-group">
                        <label htmlFor="shipping_address">Shipping Address</label>
                        <textarea className="form-control" id="shipping_address" name="shipping_address" rows="5" placeholder="Enter Shipping Address" onChange={e => this.props.setField(e)}></textarea>
                    </div>
                    
                    <button className="btn btn-primary" onClick={(e) => this.doPostTransaction(e)} value={this.props.match.params.id}>Submit</button>
                    </form>
                </div>
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
export default connect("is_login, token, name,brand,category,prod_description,stock,price,discount,picture",actions)(withRouter(Transaction));
    