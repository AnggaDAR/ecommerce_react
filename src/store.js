import createStore from "unistore";
import axios from "axios";
import { get } from "https";
import {Redirect} from 'react-router-dom'
// import { connect } from "tls";
const localProxy = "http://localhost:8010/proxy"
const baseUrl = "http://localhost:5000"
// const baseUrl = "http://0.0.0.0:5000"
// const baseUrl = "http://warunggunung.web.id"
const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
const initialState = {
    user_id: "",
    user_name: "",
    password: "",
    display_name: "",
    email: "",
    display_picture: "",
    description: "",
    created_at: "",
    role: "",
    token: "",
    is_login: false,

    // latest_product: [],
    // product_by_category: [],
    // product_by_brand: [],
    // all_product: [],
    id: "",
    name: "",
    brand: "",
    category: "",
    prod_description: "",
    stock: "",
    price: "",
    discount: "",
    picture: "",
    seller_id: "",

    quantity: "",
    status: "",

    shipping_address: "",
    // cart: [],

    // transaction: [],

    // product_by_seller: [],
}

export const store = createStore(initialState);

export const actions = store => ({
    setField: (state, event) => {
        console.log("wei",[event.target.name], event.target.value)
        return {[event.target.name]: event.target.value};
    },
    postLogout: state => {
        return {isLogin: false};
    },
    postSignupSeller: async state => {
        const signup_data = {
            user_name: state.user_name,
            password: state.password,
            display_name: state.display_name,
            email: state.email,
            display_picture: state.display_picture,
            description: state.description,
        };
        await axios
        .post(localProxy+"/seller", signup_data)
        .then(async response => {
            alert("Signup Berhasil !")
        })
        .catch(function(error){
            console.log(error)
            if (error.toString().includes("403")){
                alert("Username sudah ada ! Pilih username lain")
            }
        });
    },
    postSignupBuyer: async state => {
        const signup_data = {
            user_name: state.user_name,
            password: state.password,
            display_name: state.display_name,
            email: state.email,
            display_picture: state.display_picture,
        };
        await axios
        .post(localProxy+"/buyer", signup_data)
        .then(async response => {
            alert("Signup Berhasil !")
        })
        .catch(function(error){
            console.log(error)
            if (error.toString().includes("403")){
                alert("Username sudah ada ! Pilih username lain")
            }
        });
    },
    postEditBuyer: async state => {
        const edit_data = {
            user_name: state.user_name,
            password: state.password,
            display_name: state.display_name,
            email: state.email,
            display_picture: state.display_picture,
        };
        await axios
        .put(localProxy+"/buyer", edit_data, {
            headers: {
                Authorization: 'Bearer ' + store.getState().token,
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            alert("Edit Berhasil !")
        })
        .catch(function(error){
            console.log(error)
            if (error.toString().includes("403")){
                alert("Username sudah ada ! Pilih username lain")
            }
        });
    },
    postEditSeller: async state => {
        const edit_data = {
            user_name: state.user_name,
            password: state.password,
            display_name: state.display_name,
            email: state.email,
            display_picture: state.display_picture,
            description: state.description,
        };
        await axios
        .put(localProxy+"/seller", edit_data, {
            headers: {
                Authorization: 'Bearer ' + store.getState().token,
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            alert("Edit Berhasil !")
        })
        .catch(function(error){
            console.log(error)
            if (error.toString().includes("403")){
                alert("Username sudah ada ! Pilih username lain")
            }
        });
    },
    postLoginSeller: async state => {
        const user_data = {user_name: state.user_name, password: state.password};
        
        console.log("hehe",user_data)
        await axios
        .post(localProxy+"/seller/login",  user_data)
        .then(async response => {
            console.log("postLogin res: ", response.data);
            if (response.data.hasOwnProperty("token")){
                store.setState({
                    is_login: true,
                    token: response.data.token,
                })
                alert("Login Berhasil !")
                console.log("aaaa",store.getState().token)
                await axios
                .get(localProxy+"/seller", {
                    headers: {
                        Authorization: 'Bearer ' + store.getState().token,
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    console.log("account:", response.data);
                    if (response.data.hasOwnProperty("data")){
                        store.setState({
                            user_id: response.data.data.user_id,
                            user_name: response.data.data.user_name,
                            password: response.data.data.password,
                            display_name: response.data.data.display_name,
                            email: response.data.data.email,
                            display_picture: response.data.data.display_picture,
                            description: response.data.data.description,
                            created_at: response.data.data.created_at,
                            role: response.data.data.role,
                        })
                    }
                })
                .catch(function(error){
                    console.log(error)
                });
            }
            console.log("postLog res: ", store.getState());
        })
        .catch(function(error){
            console.log(error)
            if (error.toString().includes("401")){
                alert("Username / Password salah !")
            }
            if (error.toString().includes("403")){
                alert("User bukan seller !")
            }
        });
    },
    postLoginBuyer: async state => {
        const user_data = {user_name: state.user_name, password: state.password};
        
        console.log("hehe",user_data)
        await axios
        .post(localProxy+"/buyer/login",  user_data)
        .then(async response => {
            console.log("postLogin res: ", response.data);
            if (response.data.hasOwnProperty("token")){
                store.setState({
                    is_login: true,
                    token: response.data.token,
                })
                alert("Login Berhasil !")
                console.log("aaaa",store.getState().token)
                await axios
                .get(localProxy+"/buyer",{
                    headers: {
                        Authorization: 'Bearer ' + store.getState().token,
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    console.log("account:", response.data);
                    if (response.data.hasOwnProperty("data")){
                        store.setState({
                            user_id: response.data.data.user_id,
                            user_name: response.data.data.user_name,
                            password: response.data.data.password,
                            display_name: response.data.data.display_name,
                            email: response.data.data.email,
                            display_picture: response.data.data.display_picture,
                            description: response.data.data.description,
                            created_at: response.data.data.created_at,
                            role: response.data.data.role,
                        })
                    }
                })
                .catch(function(error){
                    console.log(error)
                });
            }
            console.log("postLog res: ", store.getState());
            this.props.history.push("/profile")
        })
        .catch(function(error){
            console.log(error)
            if (error.toString().includes("401")){
                alert("Username / Password salah !")
            }
            if (error.toString().includes("403")){
                alert("User bukan buyer !")
            }
        });
    },
    postAddProduct: async state => {
        const product_data = {
            name: state.name,
            brand: state.brand,
            category: state.category,
            description: state.prod_description,
            stock: state.stock,
            price: state.price,
            discount: state.discount,
            url_picture: state.picture
        };
        await axios
        .post(localProxy+"/product", product_data, {
            headers: {
                Authorization: 'Bearer ' + store.getState().token,
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            alert("Tambah Product Berhasil !")
        })
        .catch(function(error){
            console.log(error)
        });
    },
    postEditProduct: async (state,e) => {
        const id = state.id
        const product_data = {
            name: state.name,
            brand: state.brand,
            category: state.category,
            description: state.prod_description,
            stock: state.stock,
            price: state.price,
            discount: state.discount,
            url_picture: state.picture
        };
        await axios
        .put(localProxy+"/product/"+e.target.value, product_data, {
            headers: {
                Authorization: 'Bearer ' + store.getState().token,
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            alert("Tambah Product Berhasil !")
        })
        .catch(function(error){
            console.log(error)
        });
    },
    getProductById: async (state, id) => {
        await axios
        .get(localProxy+"/product/"+id)
        .then(function(response){
            const data = response.data.data
            store.setState({
                id: data.id,
                name: data.name,
                brand: data.brand,
                category: data.category,
                prod_description: data.description,
                stock: data.stock,
                price: data.price,
                discount: data.discount,
                picture: data.url_picture,
                seller_id: data.seller_id
            })
        })
        .catch(function(error){
            console.log(error)
        });
    },
    getCartById: async (state, id) => {
        await axios
        .get(localProxy+"/cart/"+id, {
            headers: {
                Authorization: 'Bearer ' + store.getState().token,
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            const data = response.data.data
            store.setState({
                quantity: data.quantity,
                status: data.status,
            })
        })
        .catch(function(error){
            console.log(error)
        });
    },
    postEditProduct: async (state,e) => {
        const id = state.id
        const product_data = {
            name: state.name,
            brand: state.brand,
            category: state.category,
            description: state.prod_description,
            stock: state.stock,
            price: state.price,
            discount: state.discount,
            url_picture: state.picture1
        };
        await axios
        .put(localProxy+"/product/"+e.target.value, product_data, {
            headers: {
                Authorization: 'Bearer ' + store.getState().token,
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            alert("Tambah Product Berhasil !")
        })
        .catch(function(error){
            console.log(error)
        });
    },
    postDeleteProduct: async (state, e) => {
        await axios
        .delete(localProxy+"/product/"+e.target.value, {
            headers: {
                Authorization: 'Bearer ' + store.getState().token,
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            alert("Hapus Product Berhasil !")
        })
        .catch(function(error){
            console.log(error)
        });
    },
    postAddCart: async (state, e) => {
        const cart_data = {
            product_id: e.target.value,
            quantity: state.quantity
        }
        await axios
        .post(localProxy+"/cart", cart_data, {
            headers: {
                Authorization: 'Bearer ' + store.getState().token,
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            alert("Tambah Cart Berhasil")
        })
        .catch(function(error){
            console.log(error)
        });
    },
    postEditCart: async (state, e) => {
        const cart_data = {
            quantity: state.quantity,
            status: state.status
        }
        await axios
        .put(localProxy+"/cart/"+e.target.value, cart_data, {
            headers: {
                Authorization: 'Bearer ' + store.getState().token,
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            alert("Edit Cart Berhasil")
        })
        .catch(function(error){
            console.log(error)
        });
    },
    postDeleteCart: async (state, e) => {
        await axios
        .delete(localProxy+"/cart/"+e.target.value, {
            headers: {
                Authorization: 'Bearer ' + store.getState().token,
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            alert("Hapus Cart Berhasil !")
        })
        .catch(function(error){
            console.log(error)
            if (error.toString().includes("403")){
                alert("Cannot delete cart that already paid !")
            }
        });
    },
    postAddTransaction: async (state, e) => {
        const transaction_data = {
            shipping_address: state.shipping_address
        }
        await axios
        .post(localProxy+"/transaction", transaction_data, {
            headers: {
                Authorization: 'Bearer ' + store.getState().token,
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            alert("Tambah Transaksi Berhasil")
        })
        .catch(function(error){
            console.log(error)
        });
    },
})
