import React, { Component } from "react";
import './Add.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class componentName extends Component {
    constructor(props){
        super(props);
        this.state={      
            email: "",
            password: ""
        }
    }
    onChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      if (nam == "img") {
        val = "image/" + event.target.files[0].name;
      }
      this.setState({ [nam]: val });
      console.log(this.state);
    }
    
    submit = (event) => {
        event.preventDefault();
        event.target.reset();
        let user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user);
        let userLogin = JSON.stringify(user);
        console.log(userLogin);
        fetch("http://127.0.0.1:8000/api/login/", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: userLogin
        })
        .then(response => {
            response.json().then((data) => {
                console.log(data);
                if(response.status==200){
                    alert("Login sucessfully.");
                    console.log("login sucessfully");
                    localStorage.setItem("user",data.idToken);
                    this.props.history.push('/'); // quay lại đường dẫn cũ.
                }
                else{
                    alert("Login failed.");
                }
            });
        });
         
    }
   
  render() {
    return (
      <div className="bg_login">
         <div class="container content_login">
          <h3 className="text_login">Đăng nhập</h3>
          <form onSubmit={(e)=>this.submit(e)}>

            <p className="text_email">Nhâp tên email:</p>
            <input
              className="input"
              type="text"
              name="email"
              value={this.props.name}
              placeholder={this.state.value}
              onChange={(e)=>this.onChangeHandler(e)}
            />

            <p className="text_password">Nhâp mật khẩu:</p>
            <input
            className="input"
              type="text"
              name="password"
              value={this.props.price}
              placeholder={this.props.value}
              onChange={(e)=>this.onChangeHandler(e)}
            />
            <br />
            <br />

            <button
              type="submit"
              id="add"
              class="btn-dark"
            >
              Đăng nhập   
            </button>
          </form>
          </div>
      </div>
    );
  }
}
