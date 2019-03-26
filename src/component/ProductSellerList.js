import React, { Component } from 'react';
import ProductSellerItem from './ProductSellerItem';

class ProductList extends Component {
    
    render() {
        const list_product = this.props.list_product;
        console.log(list_product);
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Product Id</th>
                    <th scope="col"></th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list_product.map((item, key) => {
                    const id = item.id;
                    const img = item.url_picture;
                    const name = item.name;
                    const price = item.price;
                    const stock = item.stock;
                    const category = item.category;
                    return <ProductSellerItem key={key} id={id} img={img} name={name} price={price} stock={stock} category={category}/>
                })}
                </tbody>
            </table>
        );
    }
}

export default ProductList;