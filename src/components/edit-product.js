import React, { Component } from "react";
import axios from "axios";

export default class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    this.onChangeManfCountry = this.onChangeManfCountry.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      product_name: "",
      description: "",
      cost: "",
      manf_country: "",
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/products/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/persons/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            persons: response.data.map((person) => person.username),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
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

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      product_name: this.state.product_name,
      description: this.state.description,
      cost: this.state.cost,
      manf_country: this.state.manf_country,
      date: this.state.date,
    };

    console.log(product);

    axios
      .post(
        "http://localhost:5000/products/update/" + this.props.match.params.id,
        product
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Product Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Product Name: </label>

            <select
              ref="userInput"
              required
              value={this.state.product_name}
              onChange={this.onChangeProductName}
            >
              {this.state.persons.map(function (person) {
                return (
                  <option key={person} value={person}>
                    {person}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label>Product Description: </label>
            <input
              type="text"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label>Cost of product: </label>
            <input
              type="text"
              required
              value={this.state.cost}
              onChange={this.onChangeCost}
            />
          </div>

          <div className="form-group">
            <label>Manufacturing Country: </label>
            <input
              type="text"
              required
              value={this.state.manf_country}
              onChange={this.onChangeManfCountry}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Product Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
