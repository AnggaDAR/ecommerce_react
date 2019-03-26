import React, { Component } from 'react';
// import '../styles/header.css';
import { Link } from "react-router-dom";
import ProductList from "./ProductList"
// import { connect } from "unistore/react"
// import { actions } from "../store"
import axios from "axios";

const localProxy = "http://localhost:8010/proxy"
// const localProxy = "http://warunggunung.web.id"
// const baseUrl = "http://localhost:5000"
// const baseUrl = "http://0.0.0.0:5000"
// const baseUrl = "http://warunggunung.web.id"
const corsAnywhere = "https://cors-anywhere.herokuapp.com/"

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      latest_product: []
    }
  }
  componentDidMount(){
    this.getLatestProduct()
  }
  async getLatestProduct() {
    const self = this
    await axios
    .get(localProxy+"/product", 
      {
        params : {
          p:1, rp:8
        }
      }
    )
    .then(function(response){
      console.log("data :", response.data)
      const data = response.data.data
      console.log("daata :",data)
      self.setState({latest_product: data})
      console.log("staat:", self.state.latest_product)
    })
  };
  render() {
    return (
      <section id="latest-product" className="my-4">
        <hr/>
        <h3 className="text-secondary text-center">Latest Products</h3>
        <hr/>
        <ProductList list_product={this.state.latest_product} />
      </section>
    );
  }
}

export default Category;
// export default connect("is_login", actions)(Header)
