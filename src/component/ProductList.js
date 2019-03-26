import React, { Component } from 'react';
import MoviesItem from './ProductItem';
import ProductItem from './ProductItem';

class ProductList extends Component {

    render() {
        const list_product = this.props.list_product;
        console.log("iki",list_product);
        return (
        <div className="row mx-1">
            {list_product.map((item, key) => {
                const id = item.id;
                const img = item.url_picture;
                const name = item.name;
                const price = item.price;
                const discount = item.discount;
                return <ProductItem key={key} id={id} img={img} name={name} price={price} discount={discount}/>
            })}
        </div>
        );
    }
}

export default ProductList;