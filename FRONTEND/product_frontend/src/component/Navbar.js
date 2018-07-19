import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-3">List Product</h1>
                <p className="lead">With the combination: Notejs and Reactjs</p>
                <hr className="my-2 bg-primary" />   
            </div>
        );
    }
}

export default Navbar;