import React, { Component } from 'react';
import axios from "axios";

export default class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
      id : "",
      name :"",
      price: "",
      img:""
    }
   
  }
  componentDidMount(){
      let id = this.props.match.params;
      axios({
        method: 'GET',
        url: `http://localhost:3000/product/${id.id}`,
        data : null,
      }).then((resp) => {
        console.log(resp.data.id);
          this.setState({id : resp.data.id, name :resp.data.name, price: resp.data.price, img:resp.data.img});
        }
      );
      console.log(this.state);
    }
    render() {
      
        return (
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <img src={this.state.img} alt=""/>
                </div> 
                <div className="col-sm-6">
                  <div>{this.state.name}</div>
                  <div>{this.state.price} đ</div>
                </div> 
              </div>
            </div>
        )
    }
}
