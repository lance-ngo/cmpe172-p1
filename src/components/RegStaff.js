import React, { Component } from "react";

class RegStaff extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      privilege: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(e) {
    e.preventDefault();
    this.props.subStaff(
      this.state.username,
      this.state.password,
      this.state.privilege
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate>
              <h1 className="h3 mb-3 font-weight-normal">Register Staff</h1>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Position</label>
                <input
                  type="name"
                  className="form-control"
                  name="privilege"
                  placeholder="Enter position"
                  value={this.state.privilege}
                  onChange={this.onChange}
                />
              </div>
              <button
                onClick={this.onClick}
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegStaff;
