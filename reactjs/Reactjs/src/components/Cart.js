import React, { Component } from "react";
import Axios from "axios";
import Table from './table';
import axios from 'axios';
import Head from './Heard';
import Edit from './editProduct';

class Cart extends Component {
  constructor(props){
    super(props);
    this.state={
      product : []
    }
    this.onDelete=this.onDelete.bind(this);
    //ẩn giá trị trong reactjs để có thể gọi lại hàm load trong hàm delete.
    this.onloadProduct=this.onloadProduct.bind(this);
  }
  componentDidMount(){
    // const interval =setInterval(()=>{
      this.onloadProduct()
    // },1000);
    // return clearInterval(interval);
  }
  // componentWillUnmount() {
  //   clearInterval(this.onloadProduct());
  // }

  parseJwt(token){
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

  onloadProduct(){
    let id=this.parseJwt(localStorage.getItem('user'));
    Axios({
      method : "GET",
      url : `http://127.0.0.1:8000/api/carts/${id}`,
      data : null 
    }).then(res=>{
      this.setState({product : res.data});
    })
  }
  onDelete(id){
    axios({
      method: 'DELETE',
      url: `http://127.0.0.1:8000/api/carts/delete/${id}`,
      data:null
      }).then((resp) => {
        alert("xao san pham thanh cong");
        this.onloadProduct();
        //gọi trong resp để trả về giá trị trong điều kiên
      }
    ).catch(error => console.log(error));
  }
  updateProduct(pro){
    axios({
      method: 'PATCH',
      url: `http://127.0.0.1:8000/api/carts/`,
      data:null
      }).then((resp) => {
        alert("xao san pham thanh cong");
      }
    ).catch(error => console.log(error));;
  }
  loadTable(){
    var table=this.state.product.map((pro,id)=>{
      return <Table
        onDelete={this.onDelete}
        table={pro}
      />    
    })
    return table;
  }
 
  render() {
    return (
      <div>
        <Head />
        <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.loadTable()}
           
          </tbody>
        </table>
        <Edit></Edit>
      </div>
    
      </div>

    );
  }
}

export default Cart;
