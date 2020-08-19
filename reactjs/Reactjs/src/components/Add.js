import React, { Component } from "react";
import Head from './Heard';
import Slider from './Slider';
import './Add.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class componentName extends Component {
    constructor(props){
        super(props);
        this.state={
            id: "",
            name: "",
            price: "",
            img: ""
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
    };
    submit = (event) => {
      event.preventDefault();
      event.target.reset();
      const { name, price, img,id } = this.state;
      const item = {};
      item.id=id;
      item.name = name;
      item.price = price;
      item.img = img;

      const products = {
        id: this.state.id,
        name: this.state.name,
        price: this.state.price,
        img: this.state.img
      }
      
      axios({
        method: 'POST',
        url: `http://127.0.0.1:8000/api/products`,
        data: products,
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json', 
        }
        }).then((resp) => {
            console.log(resp)
        }
      ).catch(error => console.log(error));

     
      // let uri = 'http://127.0.0.1:8000/api/products';
      // axios.post(uri, products).then((response) => {
      //   // browserHistory.push('/display-item');
      // });
    }
   
  render() {
    return (
      <div>
         <Head />
        <Slider />
        <div className="container content_add">
        <h3>Thêm sản phẩm</h3>
        <form onSubmit={(e)=>this.submit(e)}>
        <p>Nhâp id sản phẩm:</p>
        <input
          type="text"
          name="id"
          value={this.props.name}
          placeholder={this.state.value}
          onChange={(e)=>this.onChangeHandler(e)}
        />

          <p>Nhâp tên sản phẩm:</p>
          <input
            type="text"
            name="name"
            value={this.props.name}
            placeholder={this.state.value}
            onChange={(e)=>this.onChangeHandler(e)}
          />

          <p>Nhâp giá sản phẩm:</p>
          <input
            type="text"
            name="price"
            value={this.props.price}
            placeholder={this.props.value}
            onChange={(e)=>this.onChangeHandler(e)}
          />

          <br />
          <br />
          <input
            type="file"
            name="img"
            id="image"
            onChange={(e)=>this.onChangeHandler(e)}
          />
          <br />
          <br />

          <button
            type="submit"
            id="add"
            className="btn-dark"
          >
            {/* <Link className="nav-link" to="/"> */}
            Đăng kí
            {/* </Link> */}
          
          </button>
        </form>
        </div>
    
      </div>

    );
  }
}
