import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "unistore/react"
import { actions } from "../store"
import {withRouter} from "react-router-dom";

class CartBuyerItem extends Component {
  doDeleteCart = (e) =>{
      this.props.postDeleteCart(e)
  }
  render() {
    console.log("wah",this.props)
    console.log("wah",this.props.quantity)
    console.log("wah",this.props.status)
    return (
    <tr>
      <th scope="row">{this.props.id}</th>
      <td><img src={this.props.img} className="card-img" alt="Backpack"/> </td>
      <td>{this.props.name}</td>
      <td>{this.props.quantities}</td>
      <td>Rp{this.props.unit_price}</td>
      <td>Rp{this.props.price}</td>
      <td>{this.props.statuses}</td>
      <td><Link to={"/editcart/"+this.props.id} className="btn btn-outline-info">Edit Cart</Link><button type="submit" onClick={(e) => this.doDeleteCart(e)} value={this.props.id} className="btn btn-outline-danger">Delete Cart</button></td>
    </tr>
    );
  }
}

// export default CartBuyerItem;
export default connect("is_login, token, quantity,status",actions)(withRouter(CartBuyerItem));
