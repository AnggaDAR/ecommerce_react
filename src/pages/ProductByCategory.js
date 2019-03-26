import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

// import Header from "../components/Header"
// import Footer from "../components/Footer"
// import TopStory from "../components/TopStory"
// import StoryList from "../components/StoryList"
// import Search from "../components/Search"
import Carousel from "../component/Carousel"
import Category from "../component/Category"
import Brand from "../component/Brand"
import Latest from "../component/Latest"
import ProductList from "../component/ProductList"
import { connect } from "unistore/react"
// import { actions } from "../store"

// import '../styles/gallery.css'

const localProxy = "http://localhost:8010/proxy"
const baseUrl = "http://localhost:5000"
const apiKey = "1656f1c901ff4247b4beb9bee62e70db"
const headlinesUrl = baseUrl + "top-headlines"
const allArticleUrl = baseUrl + "everything"

class ProductByCategory extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            list_product: []
        }
    }

    componentDidMount(){
        this.getProductByCategory(this.props.match.params.category)
    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.category !== prevProps.match.params.category){
            this.getProductByCategory(this.props.match.params.category)
        }
    }
    async getProductByCategory(category) {
        const self = this
        await axios
        .get(localProxy+"/product", 
        {
            params : {
                p:1, rp:128, category: category
            }
        }
        )
        .then(function(response){
        console.log("data :", response.data)
        const data = response.data.data
        console.log("daata :",data)
        self.setState({list_product: data})
        console.log("staat:", self.state.list_product)
        })
    };
    render() {
        const category = this.props.match.params.category
        return (
            <section id="product my-5">
                {/* <Category/> */}
                <hr/>
                <h3 className="text-secondary text-center">Products in {category.charAt(0).toUpperCase() + category.slice(1)}'s Category</h3>
                <hr/>
                <ProductList list_product={this.state.list_product} />
            </section>
        );
    }
}

export default ProductByCategory;
// export default connect("isLogin,listTopStory,listStory",actions)(Home);
