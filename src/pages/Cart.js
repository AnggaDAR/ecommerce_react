import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import {withRouter} from "react-router-dom";
import { Link } from "react-router-dom";

import CartBuyerList from "../component/CartBuyerList"
import { connect } from "unistore/react"
import { actions } from "../store"


const localProxy = "http://localhost:8010/proxy"
// const baseUrl = "http://localhost:5000"

class Cart extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            list_cart: []
        }
    }

    componentDidMount(){
        this.getCartByBuyer()
    }
    async getCartByBuyer() {
        const self = this
        await axios
        .get(localProxy+"/cart", {
            params : {
                p:1, rp:128
            },
            headers: {
                Authorization: 'Bearer ' + this.props.token,
                'Content-Type': 'application/json'
            }
        },
        
        
        )
        .then(function(response){
        const data = response.data.data
        self.setState({list_cart: data})
        })
        console.log("wooi",self.state)
    };
    render() {
        if(this.props.is_login){
            return (
                <section id="product">
                    {/* <Category/> */}
                    <hr/>
                    <h3 className="text-secondary text-center">Your Carts</h3>
                    <hr/>
                    <div className="row mx-1 justify-content-center">
                    <div className="col-md-10 col-12">
                        <Link to="/transaction" className="btn btn-outline-success">Checkout Transaction</Link>
                        <CartBuyerList list_cart={this.state.list_cart} />
                    </div>
                    </div>
                </section>
            );
        }
        else {
            return <Redirect to={{pathname: "/"}}/>
        }
    }
}

// export default Cart;
export default connect("is_login, token",actions)(withRouter(Cart));
