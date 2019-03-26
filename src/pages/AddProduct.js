import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import {withRouter} from "react-router-dom";

import { connect } from "unistore/react"
import { actions } from "../store"

const localProxy = "http://localhost:8010/proxy"
const baseUrl = "http://localhost:5000"

class AddProduct extends Component {
   
    doAddProduct = () =>{
        this.props.postAddProduct()
    }
    
    render() {
        if(this.props.is_login){
            return (
            <section id="detail">
                <hr/>
                <h3 className="text-secondary text-center">Add New Product</h3>
                <hr/>
                <div className="row mx-1 justify-content-center">
                <div className="col-md-6 col-12 my-5 shadow-lg">
                    <form className="p-2" onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Product Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter product name" onChange={e => this.props.setField(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand">Product Brand</label>
                        <select className="form-control" id="brand" name="brand" onChange={e => this.props.setField(e)}>
                            <option disabled selected>Select Brand</option>
                            <option value="Eiger">Eiger</option>
                            <option value="Consina">Consina</option>
                            <option value="Arei">Arei</option>
                        </select>
                        {/* <input type="text" className="form-control" id="brand" name="brand" placeholder="Enter product brand" onChange={e => this.props.setField(e)} /> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Product Category</label>
                        <select className="form-control" id="category" name="category" placeholder="Enter product category" onChange={e => this.props.setField(e)}>
                            <option disabled selected>Select Category</option>
                            <option value="Backpack">Backpack</option>
                            <option value="Apparel">Apparel</option>
                            <option value="Footwear">Footwear</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                        {/* <input type="text" className="form-control" id="category" name="category" placeholder="Enter product category" onChange={e => this.props.setField(e)} /> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="prod_description">Product Description</label>
                        <textarea className="form-control" id="prod_description" name="prod_description" rows="3" placeholder="Enter product description" onChange={e => this.props.setField(e)} ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Product Stock</label>
                        <input type="number" className="form-control" id="stock" name="stock" placeholder="Enter product stock" onChange={e => this.props.setField(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Product Price</label>
                        <input type="number" className="form-control" id="price" name="price" placeholder="Enter product price" onChange={e => this.props.setField(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="discount">Product Discount (%)</label>
                        <input type="number" className="form-control" id="discount" name="discount" min="0" max="100" placeholder="Enter product discount" onChange={e => this.props.setField(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Product Picture</label>
                        <textarea className="form-control" id="picture" name="picture" rows="3" placeholder="Enter product image url" onChange={e => this.props.setField(e)} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => this.doAddProduct()} >Submit</button>
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
export default connect("is_login, token",actions)(withRouter(AddProduct));
