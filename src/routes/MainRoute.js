import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import BuyerProfile from "../pages/BuyerProfile";
import SellerProfile from "../pages/SellerProfile";
import EditProfileBuyer from "../pages/EditProfileBuyer";
import EditProfileSeller from "../pages/EditProfileSeller";
import NotFound from "../pages/NotFound";
import Detail from "../pages/Detail";
import Dashboard from "../pages/Dashboard";
import ProductByBrand from "../pages/ProductByBrand";
import ProductByCategory from "../pages/ProductByCategory";
import LoginBuyer from "../pages/LoginBuyer";
import LoginSeller from "../pages/LoginSeller";
import SignupBuyer from "../pages/SignupBuyer";
import SignupSeller from "../pages/SignupSeller";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import Cart from "../pages/Cart";
import EditCart from "../pages/EditCart";
import Transaction from "../pages/Transaction";
import Checkout from "../pages/Checkout";

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component = {Home}/>
            {/* <Route path="/category/backpack" component = {Backpack}/>
            <Route path="/category/apparel" component = {Apparel}/>
            <Route path="/category/footwear" component = {Footwear}/>
            <Route path="/category/accessories" component = {Accessories}/>
            <Route path="/brand/eiger" component = {Eiger}/>
            <Route path="/brand/consina" component = {Consina}/>
            <Route path="/brand/arei" component = {Arei}/> */}
            <Route path="/detail/:id" component = {Detail}/>
            <Route path="/brand/:brand" component = {ProductByBrand}/>
            <Route path="/category/:category" component = {ProductByCategory}/>
            <Route path="/profile/seller" component = {SellerProfile}/>
            <Route path="/profile/buyer" component = {BuyerProfile}/>
            <Route path="/editprofile/buyer" component = {EditProfileBuyer}/>
            <Route path="/editprofile/seller" component = {EditProfileSeller}/>
            <Route path="/login/seller" component = {LoginSeller}/>
            <Route path="/login/buyer" component = {LoginBuyer}/>
            <Route path="/signup/seller" component = {SignupSeller}/>
            <Route path="/signup/buyer" component = {SignupBuyer}/>
            <Route path="/dashboard" component = {Dashboard}/>
            <Route path="/addproduct" component = {AddProduct}/>
            <Route path="/editproduct/:id" component = {EditProduct}/>
            <Route path="/cart" component = {Cart}/>
            <Route path="/editcart/:id" component = {EditCart}/>
            <Route path="/transaction" component = {Transaction}/>
            <Route path="/checkout" component = {Checkout}/>

            <Route component = {NotFound}/>
        </Switch>
    )
}

export default MainRoute;