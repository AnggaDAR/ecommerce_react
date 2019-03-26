import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

import { connect } from "unistore/react"
import { actions } from "../store"

const localProxy = "http://localhost:8010/proxy"
const baseUrl = "http://localhost:5000"

class Detail extends Component {
    doAddCart = (e) =>{
        this.props.postAddCart(e).then(
            () => {
                console.log("sip"+this);
                console.log("aaa",e)
                // this.props.history.push("/login/seller")
            }
        )
    }

    componentDidMount(){
        console.log("uhu",this.props.match.params)
        this.props.getProductById(this.props.match.params.id)
    }
    
    render() {
        let cartForm
        let Price
        let DiscountHead
        if (this.props.is_login && this.props.role === "buyer"){
            cartForm = 
            <form  onSubmit={e => e.preventDefault()} className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" name="quantity" type="number" min="1" max={this.props.stock} step="1" onChange={e => this.props.setField(e)} />
                <button onClick={(e) => this.doAddCart(e)} className="btn btn-outline-dark my-2 my-sm-0" value={this.props.match.params.id} type="submit">Add to Cart</button>
            </form>
        } else {
            cartForm = null
        }
        
        if (this.props.discount > 0){
            Price = <s className="card-title mx-0 text-muted"><h5 >Rp {this.props.price}</h5></s>
            DiscountHead = <h3 className="card-title text-center mx-0 bg-success shadow rounded">Discount {this.props.discount} %</h3>
        } else {
            Price = <s className="card-title mx-0 text-white"><h5>Rp</h5></s>
            DiscountHead = <h3 className="card-title text-center mx-0 text-white">Discount</h3>
        }
        return (
            <section id="detail">
                <hr/>
                <h3 className="text-secondary text-center">Product Detail</h3>
                <hr/>
                <div className="row mx-1 justify-content-center my-3">
                    <div className="col-lg-4 col-md-5 col-12 p-5 shadow-lg">
                        <img src={this.props.picture} className="card-img" alt="Backpack"/>
                    </div>
                    <div className="col-lg-4 col-md-5 col-12 p-5 shadow-lg">
                        {DiscountHead}
                        <h4>{this.props.name}</h4>
                        {Price}
                        <h5>Rp {this.props.price * (100 - this.props.discount) / 100}</h5><br/>
                        <p>Stock : {this.props.stock}</p>
                        <p>{this.props.prod_description}</p>
                        {cartForm}
                    </div>
                </div>
            </section>
        );
    }
}

// export default Detail;
export default connect("is_login,role,  name,brand,category,prod_description,stock,price,discount,picture",actions)(Detail);
