import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Heard extends Component {

  userLogin(){
    let user=localStorage.getItem('userName');
    if(user!=null){
      return user;
    }else{
      return "login";
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div>
            <a className="navbar-brand" href="#">
              SHOP WATCH
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        
          <ul className="navbar-nav">
            <li className="nav-item active">
             <Link className="nav-link" to="/">
              Home
             </Link>
                
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/add">
                Add
             </Link>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link" to="/cart">
                    Cart
               </Link>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link" to="/about">
                    About
               </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/login">
                {this.userLogin()}
             </Link>
            </li>
          </ul>
         
        </div>
      </nav>
    );
  }
}

export default Heard;
