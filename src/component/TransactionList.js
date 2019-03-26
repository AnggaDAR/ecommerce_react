import React, { Component } from 'react';
import TransactionItem from './TransactionItem';

class CartBuyerList extends Component {

    render() {
        const list_transaction = this.props.list_transaction;
        console.log(list_transaction);
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Total Payment</th>
                    <th scope="col">Shipping Address</th>
                    </tr>
                </thead>
                <tbody>
                    {list_transaction.map((item, key) => {
                        // console.log("ittemm", item)
                        const transaction_id = item.transaction_id;
                        const total_payment = item.total_payment;
                        const shipping_address = item.shipping_address;
                    return <TransactionItem key={key} transaction_id={transaction_id} total_payment={total_payment} shipping_address={shipping_address}/>
                    })}
                </tbody>
            </table>
        );
    }
}

export default CartBuyerList;
// export default connect("is_login,role,  name,brand,category,prod_description,stock,price,discount,picture",actions)(CartBuyerList);
