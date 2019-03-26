import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import {withRouter} from "react-router-dom";
import { Link } from "react-router-dom";

import ProductSellerList from "../component/ProductSellerList"
import { connect } from "unistore/react"
import { actions } from "../store"


const localProxy = "http://localhost:8010/proxy"
// const baseUrl = "http://localhost:5000"

class Dashboard extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            list_product: []
        }
    }

    componentDidMount(){
        this.getProductBySeller()
    }
    
    async getProductBySeller() {
        const self = this
        await axios
        .get(localProxy+"/product/seller", {
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
        self.setState({list_product: data})
        })
    };
    render() {
        if(this.props.is_login){
            return (
                <section id="product">
                    {/* <Category/> */}
                    <hr/>
                    <h3 className="text-secondary text-center">Your Products</h3>
                    <hr/>
                    <div className="row mx-1 justify-content-center">
                    <div className="col-md-10 col-12">
                        <Link to="/addproduct" className="btn btn-outline-success">Add New Product</Link>
                        <ProductSellerList getProductBySeller = {this.getProductBySelleri} list_product={this.state.list_product} />
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

// export default Dashboard;
export default connect("is_login, token",actions)(withRouter(Dashboard));
