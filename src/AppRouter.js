import React, { Component } from 'react';
import MainRoute from './routes/MainRoute';
import { withRouter } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import { connect } from "unistore/react"
// import { actions } from './store';

class App extends Component {
  doLogout = () => {
    this.props.postLogout()
    .then(
      () => {
          console.log(this.props);
          alert("Logout berhasil!")
          console.log("alert")
          this.props.history.push("/")
      }
    ) 
  }
  render() {
    return (
      <div className="App">
        <Header doLogout={this.doLogout}/>
        <MainRoute/>
        <Footer/>
      </div>
    );
  }
}

export default App;
// export default connect("is_login",actions)(withRouter(App));
