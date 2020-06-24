import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = (props) => (
  <tr>
    <td>{props.product.product_name}</td>
    <td>{props.product.description}</td>
    <td>{props.product.cost}</td>
    <td>{props.product.manf_country}</td>
    <td>{props.product.date.substring(0, 10)}</td>
    <td>
      <Link
        to={{
          pathname: "/product/update/" + props.product._id,
          productProp: props,
        }}
      >
        Edit
      </Link>{" "}
      |
      <a
        href="/"
        onClick={() => {
          props.deleteProduct(props.product._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class ListProduct extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this);

    this.state = { products: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/products/")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteProduct(id) {
    axios.delete("http://localhost:5000/products/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      products: this.state.products.filter((el) => el._id !== id),
    });
  }

  productList() {
    return this.state.products.map((currentproduct) => {
      return (
        <Product
          product={currentproduct}
          deleteProduct={this.deleteProduct}
          key={currentproduct._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Products</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Manufacturing Country</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.productList()}</tbody>
        </table>
      </div>
    );
  }
}
