import React, { Component } from "react";
import Mainlayout from "../layout/Mainlayout";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        username: "",
        email: "",
        password: "",
        repassword: "",
        mobile: "",
        designation: false,
        Terms: false,
        gender: "",
      },
    };
  }
  UpdateInput = (event) => {
    event.preventDefault();
    if (event.target.type === "checkbox") {
      this.setState({
        username: {
          ...this.state.username,
          [event.target.name]: event.target.checked,
        },
      });
    } else {
      this.setState({
        username: {
          ...this.state.username,
          [event.target.name]: event.target.value,
        },
      });
    }
  };
  
  Genderupdate = (event) => {
    this.setState({
      username: {
        ...this.state.username,
        gender: event.target.value,
      },
    });
  };
  

  render() {
    return (
      <Mainlayout>
        <React.Fragment>
          <pre>{JSON.stringify(this.state.username)}</pre>
          <section className="testimonial py-5" id="testimonial">
            <div className="container">
              <div className="row ">
                <div className="col-md-4 py-5 bg-primary text-white text-center ">
                  <div className=" ">
                    <div className="card-body">
                      <img
                        src="http://www.careerit.co.in/wp-content/uploads/2023/05/logo-careerit.png"
                        alt="ff"
                        style={{ width: "30%" }}
                      />
                      <h2 className="py-3">Registration</h2>
                      <p>
                        If you would to take part in our event,Please fill in
                        your details in Registration Form below and you will be
                        automatically Registered.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 py-5 border">
                  <h4 className="pb-4">Please fill with your details</h4>

                  <form onSubmit={this.updateInput}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                         id="Full Name"
                         name={"username"}
                         placeholder={"Full Name"}
                         className={"form-control"}
                         type={"text"}
                         onChange={this.UpdateInput}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type={"email"}
                        name={"email"}
                        className={"form-control"}
                        placeholder={"Email"}
                        onChange={this.UpdateInput}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type={"password"}
                        name={"password"}
                        placeholder="password"
                        className={"form-control"}
                        onChange={this.UpdateInput}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type={"password"}
                        className={"form-control"}
                        id={"inputEmail4"}
                        name={"repassword"}
                        placeholder={"re-entry password"}
                        onChange={this.UpdateInput}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        id="Mobile No."
                        name={"mobile"}
                        placeholder="Mobile No."
                        className={"form-control"}
                      
                        type={"tel"}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <select 
                       id="inputState"
                       name="designation" // Make sure this matches the state property name
                       onChange={this.UpdateInput}
                        className={"form-control"}>
                                                <option value="" selected>
                              Select your designation
                            </option>
                            <option value="Manager">Manager</option>
                            <option value="Snr.Software Engineer">Snr.Software Engineer</option>
                            <option value="Hr">Hr</option>
                            <option value="Team Lead">Team Lead</option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="form-group col-md-12">
                                  <textarea id="comment" name="comment" cols="40" rows="5" className={'form-control'}></textarea>
                        </div> */}
                  <div className="form-row">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name={'gender'}
                    value="male"
                    onChange={this.Genderupdate}
                      />
                      <label class="form-check-label">Male</label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name={'gender'}
                    value="female"
                    onChange={this.Genderupdate}
                      />
                      <label class="form-check-label">Female</label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name={'gender'}
                    value="others"
                    onChange={this.Genderupdate}
                      />
                      <label class="form-check-label">Others</label>
                    </div>
                  </div>

                  <div className="form-row mt-3">
                    <div class="form-group">
                      <div class="form-check">
                        <input
                           class="form-check-input"
                           type="checkbox"
                           name={'Terms'}
                           onChange={this.UpdateInput}
                           required
                        />
                        <label class="form-check-label">
                          <h6>
                            By clicking Submit, you agree to our Terms &
                            Conditions, Visitor Agreement and Privacy Policy.
                          </h6>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <Link className="nav-link btn btn-danger" to={""}>
                      Submit
                    </Link>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      </Mainlayout>
    );
  }
}

export default Register;
