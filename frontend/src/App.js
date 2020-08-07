import React,{Component} from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ListProduct from "./components/list-product";
import CreatePerson from "./components/create-person";
import CreateProduct from "./components/create-product";
import EditProduct from "./components/edit-product";
import axios from "axios";

class App extends Component {
  state  = {
    products : [],
  }

  addToProductsHandler = (prod) => {
    const tempProds = [...this.state.products];
    tempProds.push(prod);
    this.setState({products : tempProds});
  }

  deleteProductHandler = (prodId) => {
    const tempProds = this.state.products.filter(p => p._id !== prodId);
    this.setState({products : tempProds});
  }
  updateProductHandler = (prod) => {
  
    const index = this.state.products.findIndex(p => p._id === prod._id);
    const tempProds = [...this.state.products];
    tempProds[index] = prod;
    this.setState({products : tempProds});

  }

  componentDidMount(){
     axios
      .get("http://localhost:5000/products/")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }



  render(){
    return (
    <Router>
      <div className="container">
        <Navbar createShow={this.createHandlerShow}/>
        <Route path="/" products={this.state.products} render ={() => <ListProduct deleteProductHandler={this.deleteProductHandler}   products={this.state.products} />}  />
        <Route path="/person/create" exact component={CreatePerson}/>
        <Route path="/product/create" render ={(props) => <CreateProduct {...props} addToProductsHandler = {this.addToProductsHandler} />} />
        <Route path="/product/update/:id" render ={(props) => <EditProduct updateProductHandler = {this.updateProductHandler} {...props} />} />
      </div>
    </Router>
  );  
  }
  
}

export default App;
