import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import {withRouter} from "react-router-dom";
import { Link } from "react-router-dom";

import TransactionList from "../component/TransactionList"
import { connect } from "unistore/react"
import { actions } from "../store"


const localProxy = "http://localhost:8010/proxy"
// const baseUrl = "http://localhost:5000"

class Transaction extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            list_transaction: []
        }
    }

    componentDidMount(){
        this.getTransactionByBuyer()
    }
    async getTransactionByBuyer() {
        const self = this
        await axios
        .get(localProxy+"/transaction", {
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
        self.setState({list_transaction: data})
        })
        console.log("wooi",self.state)
    };
    render() {
        if(this.props.is_login){
            return (
                <section id="product">
                    {/* <Category/> */}
                    <hr/>
                    <h3 className="text-secondary text-center">Your Transaction History</h3>
                    <hr/>
                    <div className="row mx-1 justify-content-center">
                    <div className="col-md-10 col-12">
                        <Link to="/checkout" className="btn btn-outline-success">Checkout Transaction</Link>
                        <TransactionList list_transaction={this.state.list_transaction} />
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

// export default Transaction;
export default connect("is_login, token",actions)(withRouter(Transaction));
