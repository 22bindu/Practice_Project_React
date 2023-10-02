import React, { Component } from 'react';

class Hooks extends Component {
  constructor(props) {
    super(props);
    this.state={
        counter:100
    }
}
increaseCount=()=>{
    this.setState({
          counter:this.state.counter+1

    })
}

  render() {
    return (
      <React.Fragment>
        <div className="card text-center">
          <div className="card-header">ReactwithHooks</div>
          <div className="card-body">
            <h5 className="card-title">state , useState</h5>
            <p className="card-text">
              {this.state.counter}
            </p>
            <button className="btn btn-primary" onClick={this.increaseCount}>increse</button>
            
           
          </div>
          
        </div>
      </React.Fragment>
    );
  }
}

export default Hooks;
