import React from 'react';
import CountryCard from './CountryCard';
import datasience from '../assets/images/datasience.jpg';
import azuredev from '../assets/images/azuredev.jpg';
import java from '../assets/images/java.jpg';


class MessageCard extends React.Component{
    render(){
        let countries=["Java","Azure dev","Data science"];

        return(
            <React.Fragment>
            <div className='container'>
            <div className='marginAll'>
                <div className='row'>
                    <div className='col-md-4'>
                    <CountryCard cTile={countries[0]} CardImg={java}/>
                    </div>
                    <div className='col-md-4'>
                    <CountryCard cTile={countries[1]} CardImg={azuredev}/>
                    </div>
                    <div className='col-md-4'>
                    <CountryCard cTile={countries[2]} CardImg={datasience}/>
                    </div>
                </div>
                </div>
                </div>
            </React.Fragment>

        );
  }
}
export default MessageCard;