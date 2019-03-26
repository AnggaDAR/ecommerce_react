import React, { Component }  from 'react';
import { Redirect } from "react-router-dom"
// import {withRouter} from "react-router-dom";

const NotFound = () => {
    // const is_login = JSON.parse(localStorage.getItem("is_login"));
    // console.log("is_login", is_login);

    return (
    <section className="row mx-0 justify-content-center d-flex flex-wrap align-items-center">
        <div className="col-12 my-5" style={{height:"41vh"}}>
            <h1 className="text-center">Oops, Page Not Found</h1>
        </div>
    </section>
    );
}

export default NotFound