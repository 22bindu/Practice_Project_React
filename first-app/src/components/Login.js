import React, { Component } from "react";
import Mainlayout from "../layout/Mainlayout";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        username: "",
        password: "",
        email: "",
      },
      errors: {
        username: "",
        password: "",
        email: "",
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      details: {
        ...this.state.details,
        [name]: value,
      },
    });
  };

  validateForm = () => {
    const { username, email, password } = this.state.details;
    const errors = {};

    if (!username.trim()) {
      errors.username = "Username is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      // Form is valid, you can proceed with further actions (e.g., API call)
      console.log("Form submitted:", this.state.details);
      // Redirect to the Thankyou page or perform other actions
      // Example: this.props.history.push("/Thankyou");
    } else {
      // Form is not valid; do nothing or display an error message
      console.log("Form contains errors");
    }
  };

  render() {
    const { details, errors } = this.state;

    return (
      <Mainlayout>
        <div className="mt-5 mx-auto col-4">
          <pre>{JSON.stringify(details)}</pre>
          <div className="card">
            <div className="card-header bg-primary">Login</div>
            <div className="card-body">
              <form className="needs-validation" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-sm-12">
                    <label htmlFor="username" className="form-label">
                      User ID *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      name="username"
                      value={details.username}
                      onChange={this.handleInputChange}
                    />
                    {errors.username && (
                      <div className="error">{errors.username}</div>
                    )}
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      name="email"
                      value={details.email}
                      onChange={this.handleInputChange}
                    />
                    {errors.email && (
                      <div className="error">{errors.email}</div>
                    )}
                  </div>

                  <div className="col-sm-12">
                    <label htmlFor="password" className="form-label">
                      Password *
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      name="password"
                      value={details.password}
                      onChange={this.handleInputChange}
                    />
                    {errors.password && (
                      <div className="error">{errors.password}</div>
                    )}
                  </div>
                  <div className="col-sm-12 text-center mt-3">
                    Don't have an account?
                    <Link className="nav-link" to="/Register">
                      Register Now
                    </Link>
                  </div>
                </div>
                <hr className="my-4" />
                <button className="btn btn-primary w-100" type="submit" >
                  Login Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </Mainlayout>
    );
  }
}

export default Login;
