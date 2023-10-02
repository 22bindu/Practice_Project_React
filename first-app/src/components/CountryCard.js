import React,{Component}from 'react';


class CountryCard extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="card">
                        <img src={this.props.CardImg} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h5 >{this.props.cTile}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content .</p>
                        <a href="/#" className="btn btn-primary">Read more</a>
                        </div> 
                </div>
                        
            </React.Fragment>

        );
    }
}
export default CountryCard;