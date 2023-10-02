import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Rating extends Component {
    constructor(props) {
        super(props);
            this.state={
                    counter:1

            }
    }
    incrsCount=(event)=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    dcrsCount=(event)=>{
        this.setState({
            counter:this.state.counter-1>0?this.state.counter-1:0
        })
    }
    
    render() {
        return (
            
           <React.Fragment>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header bg-primary'>
                                <h4>Rating</h4>
                            </div>
                            <div className='card-body'>
                                <h3>{this.state.counter}</h3>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-warning' onClick={this.incrsCount}>increase</button>
                                <input className='btn btn-warning' onClick={this.dcrsCount} type='submit' value='Decrease' />
                                <Link to={"/Thankyou"} className="btn btn-primary mx-3">Submit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </React.Fragment>
        );
    }
}

export default Rating;