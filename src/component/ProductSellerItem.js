import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "unistore/react"
import { actions } from "../store"
import {withRouter} from "react-router-dom";

class ProductItem extends Component {
  doDeleteProduct = (e) =>{
      this.props.postDeleteProduct(e)
  }
  render() {
    console.log(this.props)
    return (
    <tr>
      <th scope="row">{this.props.id}</th>
      <td><img src={this.props.img} className="card-img" alt="Backpack"/> </td>
      <td>{this.props.name}</td>
      <td>{this.props.category}</td>
      <td>{this.props.stock}</td>
      <td>Rp{this.props.price}</td>
      <td><Link to={"/editproduct/"+this.props.id} className="btn btn-outline-info">Edit Product</Link><button type="submit" onClick={(e) => this.doDeleteProduct(e)} value={this.props.id} className="btn btn-outline-danger">Delete Product</button></td>
    </tr>
    );
  }
}

// export default ProductItem;
export default connect("is_login, token, quantity,status",actions)(withRouter(ProductItem));

