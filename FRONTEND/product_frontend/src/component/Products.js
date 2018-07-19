import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div className="col-4 mb-4">
                <div className="card border-primary">
                <img className="card-img-top" src={this.props.image} alt="" />
                    <div className="card-body">
                        <h5 className="card-title float-left">{this.props.product_name}</h5>
                        <i className=" float-right">{this.props.product_price}</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;