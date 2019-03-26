import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import {withRouter} from "react-router-dom";

import { connect } from "unistore/react"
import { actions } from "../store"

const localProxy = "http://localhost:8010/proxy"
const baseUrl = "http://localhost:5000"

class EditCart extends Component {
    
    componentDidMount(){
        this.props.getCartById(this.props.match.params.id)
    }
   
    doEditCart = (e) =>{
        this.props.postEditCart(e)
    }
    render() {
        if(this.props.is_login){
            return (
            <section id="detail">
                <hr/>
                <h3 className="text-secondary text-center">Edit Cart</h3>
                <hr/>
                <div className="row mx-1 justify-content-center">
                <div className="col-md-6 col-12 my-5 shadow-lg">
                    <form className="p-2" onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" className="form-control" id="quantity" name="quantity" placeholder="Enter product quantity" onChange={e => this.props.setField(e)}  value={this.props.quantity}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select className="form-control" id="status" name="status" onChange={e => this.props.setField(e)}>
                            <option disabled selected>Select status</option>
                            <option value="ready">ready</option>
                            <option value="pending">pending</option>
                        </select>
                        {/* <input type="text" className="form-control" id="brand" name="brand" placeholder="Enter product brand" onChange={e => this.props.setField(e)} /> */}
                    </div>
                    <button className="btn btn-primary" onClick={(e) => this.doEditCart(e)} value={this.props.match.params.id}>Submit</button>
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
export default connect("is_login, token, quantity,status",actions)(withRouter(EditCart));
    