import React, { Component } from 'react';
// import '../styles/header.css';
// import LogButton from "./LogButton"
import { connect } from "unistore/react"
import { actions } from "../store"

class Search extends Component {
  render() {
      return (
        <form className="form-inline my-2 my-lg-0 float-right">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" width="20%"/>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
      );
  }
}

// export default Search;
export default connect("is_login", actions)(Search)
