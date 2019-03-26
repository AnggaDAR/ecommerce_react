import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProductItem extends Component {
  render() {
    console.log(this.props)
    let Price
    let DiscountHead
    if (this.props.discount > 0){
      Price = <s className="card-title text-center mx-0 text-muted"><h5 >Rp {this.props.price}</h5></s>
      DiscountHead = <h3 className="card-title text-center mx-0 bg-success shadow rounded">Discount {this.props.discount} %</h3>
    } else {
      Price = <s className="card-title text-center mx-0 text-white"><h5>Rp</h5></s>
      DiscountHead = <h3 className="card-title text-center mx-0 text-white">Discount</h3>
    }
    return (
    <div className="col-lg-3 col-md-6 col-12 my-3">
        <div className="card category shadow-lg rounded">
        {DiscountHead}
        <img src={this.props.img} className="card-img" alt="Backpack"/>
        <div className="card-img-top">
            <h3 className="card-title text-center mx-0"><Link to={"/detail/"+this.props.id}>{this.props.name}</Link></h3>
            {Price}
            <h5 className="card-title text-center mx-0">Rp {this.props.price * (100 - this.props.discount) / 100}</h5>
        </div>
        </div>
    </div>
    );
  }
}

export default ProductItem;
