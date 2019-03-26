import React, { Component } from 'react';
import CartBuyerItem from './CartBuyerItem';

class CartBuyerList extends Component {

    render() {
        const list_cart = this.props.list_cart;
        console.log(list_cart);
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Cart Id</th>
                    <th scope="col"></th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list_cart.map((item, key) => {
                        // console.log("ittemm", item)
                        const id = item.cart_id;
                        const img = item.image;
                        const name = item.name;
                        const quantity = item.quantity;
                        const unit_price = item.unit_price;
                        const price = item.price;
                        const status = item.status;
                    return <CartBuyerItem key={key} id={id} img={img} name={name} qty={quantity} unit_price={unit_price} price={price} stat={status}/>
                    })}
                </tbody>
            </table>
        );
    }
}

export default CartBuyerList;
// export default connect("is_login,role,  name,brand,category,prod_description,stock,price,discount,picture",actions)(CartBuyerList);
