import React, { Component } from "react";
import axios from "axios";

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
    });
  }

  render() {
    return (
      <div>
        <center>
          <h3>Create New User</h3>
          <br />
          <br />
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>First Name: </label>
              <input
                type="text"
                required
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
              />
              <br />
              <br />
              <label>Last Name: </label>
              <input
                type="text"
                required
                value={this.state.last_name}
                onChange={this.onChangeLastName}
              />
              <br />
              <br />
              <label>Username: </label>
              <input
                type="text"
                required
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Create User"
                className="btn btn-primary"
              />
            </div>
          </form>
        </center>
      </div>
    );
  }
}
