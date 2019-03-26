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

const baseUrl = "http://localhost:5000"
const apiKey = "1656f1c901ff4247b4beb9bee62e70db"
const headlinesUrl = baseUrl + "top-headlines"
const allArticleUrl = baseUrl + "everything"

class Apparel extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            list_product: []
        }
    }

    componentDidMount(){
        this.getProductByCategory("Apparel")
    }
    async getProductByCategory(category) {
        const self = this
        await axios
        .get(baseUrl+"/product", 
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
        return (
            <section id="product">
                {/* <Category/> */}
                <hr/>
                <h3 className="text-secondary text-center">Products in Apparel's Category</h3>
                <hr/>
                <ProductList list_product={this.state.list_product} />
            </section>
           
        );
    }
}

export default Apparel;
// export default connect("isLogin,listTopStory,listStory",actions)(Home);
