import React, { Component } from "react";
import axios from "axios";
import "./css/form.css"
export default class CreatePerson extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      username: "",
    };
  }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value,
    });
  }
  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value,
    });
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const person = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
    };

    console.log(person);

    axios.post("http://localhost:5000/persons/", person).then((res) => {
      console.log(res.data);
      this.setState({
        first_name: "",
        last_name: "",
        username: "",
      });
      this.props.history.replace("/");
    });
  }

  render() {
    const result =<div className="formContainer">
          <h3 className="form-heading">Create New User</h3>
          <form onSubmit={this.onSubmit}>
        
              <label>First Name: </label>
              <input
                type="text"
                required
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
              />
        
        
              <label>Last Name: </label>
              <input
                type="text"
                required
                value={this.state.last_name}
                onChange={this.onChangeLastName}
              />
        
              <label>Username: </label>
              <input
                type="text"
                required
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
        
              <input
                type="submit"
                value="Create User"
                className="btn btn-primary"
              />
        
          </form>
      </div> 
    return result
  }
}
