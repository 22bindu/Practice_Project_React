
import { Link } from "react-router-dom";
import product from "../assets/images/product.png";
import Mainlayout from "../layout/Mainlayout";


import React, { Component } from 'react';
import Rating from "./Rating";

class About extends Component {
  constructor(props) {
    super(props);
    this.state={
      username:"Bindu komali",
     maxcount:100,
     count:100,

    }
  }
  
  
  updateInput=(event)=>{
    this.setState({
        username:event.target.value
        
    })
}
updatelimit=(event)=>{
  this.setState({
      count:this.state.maxcount-event.target.value.length
  })
}

  
  render() {
    return (
      <Mainlayout>
      <div className="container pro">
        <div className="row mt-5 ">
          <div className="col-md-6 ">
            <h5 className="text-primary ">Who We are?</h5>
            <p>
              Our training is completely practical oriented enabling
              student-trainer interaction. Our online training is given by real
              time professionals who have 10+ years of professional experience.
            </p>
            <h5 className="text-primary">Our Strengths</h5>
            <p>
              Our training is completely practical oriented enabling
              student-trainer interaction. Our online training is given by real
              time professionals who have 10+ years of professional experience.
            </p>
            <h5 className="text-primary">Our Strategy</h5>
            <p>
              Our training is completely practical oriented enabling
              student-trainer interaction. Our online training is given by real
              time professionals who have 10+ years of professional experience.
            </p>

            {/* <Link className='btn btn-danger btn-md' to={"/Product"}>Place order </Link> */}
          </div>
          <div className="col-md-4">
            <img className="pro-img" src={product} alt="" />
          </div>
        </div>

        <div className="my-3">
        <div className='row'>
            <div className="col-md-6">
                <div className='card'>
                    <h5 className='card-header bg-primary'>Leave your comment</h5>
                    <div className='card-body'>
                    <div class="form-floating">
                        <textarea class="form-control" rows={'5'}
                        placeholder="Leave a comment here" maxLength={this.state.maxcount} 
                        onChange={this.updatelimit} style={{height: 100}}></textarea>
                        <label for="floatingTextarea2"></label>
                        </div>
                        <span className='form-text'>Total Number of Characters: {this.state.count}</span>
                        
                    </div>
                    <Link to={"/Thankyou"} className="btn btn-primary">Submit</Link>
                </div>
            </div>

            <div className="col-md-6  " >
                <div className='card ' style={{height:300}}>
                    <h5 className='card-header bg-primary'>Leave your suggestion</h5>
                    <div className='card-body'>                   
                    <div class="">
                    <input class="form-control my-2" type="text" value={this.state.username} onChange={this.updateInput} placeholder="Default input" />
                    {/* <input type="text" value={this.state.username} onChange={this.updateInput}  className="form-control" placeholder="UserName"/> */}
                    </div>                       
                    </div>
                    <div className='card-footer'>
                       <h3>{this.state.username}</h3>
                       
                    </div>
                    <Link to={"/Thankyou"} className="btn btn-primary">Submit</Link>
                </div>
            </div>
            <Rating/>
        </div>
        </div>

      </div>
    </Mainlayout>
    );
  }
}

export default About;
