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
      <th scope="row">{this.props.transaction_id}</th>
      <td>Rp{this.props.total_payment}</td>
      <td>{this.props.shipping_address}</td>
      {/* <td><Link to={"/editcart/"+this.props.id} className="btn btn-outline-info">Edit Cart</Link><button type="submit" onClick={(e) => this.doDeleteCart(e)} value={this.props.id} className="btn btn-outline-danger">Delete Cart</button></td> */}
    </tr>
    );
  }
}

// export default CartBuyerItem;
export default connect("is_login, token, quantity,status",actions)(withRouter(CartBuyerItem));
