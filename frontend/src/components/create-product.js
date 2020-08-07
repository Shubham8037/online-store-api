import React, { Component } from "react";
import axios from "axios";

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    this.onChangeManfCountry = this.onChangeManfCountry.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      product_name: "",
      description: "",
      cost: "",
      manf_country: "",
    };
  }

  onChangeProductName(e) {
    this.setState({
      product_name: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeCost(e) {
    this.setState({
      cost: e.target.value,
    });
  }
  onChangeManfCountry(e) {
    this.setState({
      manf_country: e.target.value,
    });
  }

  closeFormHandler = () => {
   this.props.history.push("/")
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      product_name: this.state.product_name,
      description: this.state.description,
      cost: this.state.cost,
      manf_country: this.state.manf_country,
    };

    console.log(product);

    axios.post("http://localhost:5000/products/", product).then((res) => {
      console.log(res.data);
      this.props.addToProductsHandler(res.data);
      this.setState({
        product_name: "",
        description: "",
        cost: "",
        manf_country: "",
      });
    });
  }

  render() {
    return (
      <div class="formContainer">
         <p className="cancel" onClick={this.closeFormHandler}>X </p>
          <h3 class="form-heading">Create New Product</h3>
          <form onSubmit={this.onSubmit}>
                
              <label>Product Name: </label>
              <input
                type="text"
                required
                value={this.state.product_name}
                onChange={this.onChangeProductName}
              />
          
              <label>Product Description: </label>
              <input
                type="text"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
          
              <label>Cost of product: </label>
              <input
                type="text"
                required
                value={this.state.cost}
                onChange={this.onChangeCost}
              />
          
              <label>Manufacturing Country: </label>
              <input
                type="text"
                required
                value={this.state.manf_country}
                onChange={this.onChangeManfCountry}
              />
          
              <input
                type="submit"
                value="Create Product"
                className="btn btn-primary"
              />
          
          </form>
        
      </div>
    );
  }
}
