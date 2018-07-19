import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Products from './Products';
import axios from 'axios';

const getProductData =()  =>  axios.get('/getdata').then((res) => res.data)
const addProductAction = (product_name, product_price, image) => 
                  (axios.post('/add',{product_name, product_price, image})
                      .then((response)=>response.data))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null,
      product_name:'',
      product_price:'',
      image:''
    }
  }
  
  componentWillMount() {
    if(this.state.data === null){
      getProductData().then((res)=>{
        this.setState({
          data:res
        });
      })    
    }
  }
  printData = ()=>{
    if(this.state.data !== null){
      return this.state.data.map((value,key)=>(<Products
            key={key}
            product_name={value.product_name}
            product_price={value.product_price}
            image={value.image}/>)
      )
  }
}
isChange =(event) =>{
  var name = event.target.name;
  var value = event.target.value;
  this.setState({
      [name]:value
  });
}
handleClick = () => {
  var {product_name, product_price, image} = this.state;
  var dataTemp =[];
  var item = {};
  item.product_name = product_name;
  item.product_price = product_price;
  item.image = image;
  dataTemp = this.state.data;
  if(item.product_name !==''){
    dataTemp.push(item);
    this.setState({
      data:dataTemp
    });
  } 
  addProductAction(product_name, product_price,image).then((response)=>{console.log(response);})
}
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="row">
                {this.printData()}
              </div>
            </div>
            <div className="col-3">
              <div className="mx-auto">
                  <form>
                    <div className="form-group">
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" name="product_name"  placeholder="Product Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" name="product_price"  placeholder="Product Price" />
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" name="image"  placeholder="Product Image" />
                    </div>
                    <button type="reset" onClick={()=>this.handleClick()} className="btn btn-primary btn-block">Save</button>
                  </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
