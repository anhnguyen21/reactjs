import React, { Component } from 'react';
import {  Link } from "react-router-dom";

export default class componentName extends Component {
    render() {
      //so sanh san pham theo loai tra ve giá trị của sản phẩm
        return (
          <div className="col-md-3">
            <div className="product-top">
              <img src={this.props.product.img} alt="" />
              <span>50%</span>
              <div className="overlay">
                <button type="button" className="btn btn-secondary">
                  <Link to={`/detail/${ this.props.product.id }`} params={this.props.product.id}><i className="fas fa-eye" /></Link>
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => this.props.onDelete(this.props.product.id)}>
                  <Link params={this.props.product.id}><i className="fas fa-remove"></i></Link>
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => this.props.onAdd(this.props.product)}>
                <Link><i className="fas fa-shopping-cart" /></Link>
                </button>
              </div>
            </div>
            <div className="product-bottom text-center">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half" />
              <i className="far fa-star" />
              <h3>{this.props.product.name}</h3>
              <h5>{this.props.product.price}$</h5>
            </div>
          </div>
        )
    }
}
