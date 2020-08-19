import React, { Component } from "react";
import './style.css';
import Content from './Content';
import Head from './Heard';
import Slider from './Slider';
import Footer from './Footer';
import axios from "axios";

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      product: [],
      user : ""
    }
    this.onloadProduct = this.onloadProduct.bind(this);
    this.parseJwt=this.parseJwt.bind(this);
    this.onAdd=this.onAdd.bind(this);
    this.loginUser=this.loginUser.bind(this);
    
  }
  componentDidMount(){
    this.onloadProduct();
    this.loginUser();
  }
  onloadProduct(){
    axios({
      method : "GET",
      url : `http://127.0.0.1:8000/api/products`,
      data : null
    }).then(res=>{
      this.setState({ product : res.data});
    }).catch(error => console.log(error));
  }
  onDelete(id){
    return(event)=>{
      axios({
        method: 'DELETE',
        url: `http://127.0.0.1:8000/api/products/delete/${id}`,
        data:null
        }).then((resp) => {
          alert("xao san pham thanh cong");
          this.setState({product: resp.data});
        }
      ).catch(error => console.log(error));;
    }
  } 

  loginUser(){
    let id=this.parseJwt(localStorage.getItem('user'));
    axios({
      method: 'GET',
      url: `http://127.0.0.1:8000/api/user/${id}`,
      data:null
      }).then((resp) => {
        console.log(resp.data);
        this.setState({user : resp.data});  
        localStorage.setItem("userName",this.state.user);
      }
    ).catch(error => console.log(error));
  }

  parseJwt(token){
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }
  
  onAdd(pro){
    let id_user=this.parseJwt(localStorage.getItem('user'));
    const idpro={
      id_pro: pro.id,
      id_user:id_user
    };
    axios({
      method: 'POST',
      url: `http://127.0.0.1:8000/api/carts`,
      data: idpro,
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json', 
      }
      }).then((resp) => {
          console.log(resp)
      }
    ).catch(error => console.log(error));   
  }
  loadContent(){
    var product=this.state.product.map((pro,id)=>{
      return <Content
        onDelete={this.onDelete}
        onAdd={this.onAdd}
        product={pro}
      />
    })
    return product;
  }
  render() {
    return (
    <div>
      <Head user={this.state.user}/>
      <Slider />
      <div className="container">
      <div className="contain">
        <div className="contain_text"><h2><a>Sản phẩm mới</a></h2></div>
        <div className="row">
          {this.loadContent()}
        </div>
      </div>

      <div className="contain">
        <div className="contain_text"><h2><a>Sản phẩm bán chạy</a></h2></div>
        <div className="row">
          {this.loadContent()}
        </div>
      </div>
      </div>
      <Footer/>
    </div>
    
    );
  }
}

export default Home;
