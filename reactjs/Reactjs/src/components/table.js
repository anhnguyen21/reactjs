import React, { Component } from 'react';

class table extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.table.id}</th>
                <td>{this.props.table.name}</td>
                <td>{this.props.table.quantity}</td>
                <td>{this.props.table.price*this.props.table.quantity}</td>
                <td><img src={this.props.table.img} style={{width: "80px"}} alt=""/></td>
                <td><button className="btn btn-outline-secondary" onClick={() => this.props.onDelete(this.props.table.id)}>Xóa</button></td>
            </tr>
        );
    }
}

export default table;