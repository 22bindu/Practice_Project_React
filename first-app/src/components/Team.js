import React, { Component } from 'react';
import team1 from '../assets/images/team1.avif';
import Team2 from '../assets/images/Team2.jpg';
import team3 from '../assets/images/team3.webp';
import Mainlayout from '../layout/Mainlayout';
import Employee from './Employee';



class Team extends Component {
    render() {
     
        return (
            <Mainlayout>
            
            <div className='container'>
            <Employee/>
                 <h1 className='display-4 team'>CareerIT Management Team</h1>
                <div className='row mg-5 mb-5'>
                    <div className='col-md-4'>
                       
                    <div className='card '>
                        <img src={team1} alt=''/>
                        <div className='card-body'>
                            <ul className={'list-group'}>
                                <li className={'list-group-item'}>
                                    <span className={'font-weight-bold'}>Name:{this.props.name}</span>
                                </li>
                                <li className={'list-group-item'}>
                                <span className={'font-weight-bold'}>Age:{this.props.age}</span></li>
                                
                                <li className={'list-group-item'}>
                                <span className={'font-weight-bold'}>Desigination:{this.props.des}</span></li>
                                
                            </ul>

                        </div>
                    </div>
                    </div>
                    <div className='col-md-4'>
                       
                    <div className='card '>
                        <img src={team3} alt=''/>
                        <div className='card-body'>
                            <ul className={'list-group'}>
                                <li className={'list-group-item'}>
                                    <span className={'font-weight-bold'}>Name:{this.props.name}</span>
                                </li>
                                <li className={'list-group-item'}>
                                <span className={'font-weight-bold'}>Age:{this.props.age}</span></li>
                                
                                <li className={'list-group-item'}>
                                <span className={'font-weight-bold'}>Desigination:{this.props.des}</span></li>
                                
                            </ul>

                        </div>
                    </div>
                    </div>
                    <div className='col-md-4'>
                       
                    <div className='card '>
                        <img src={Team2} alt=''/>
                        <div className='card-body'>
                            <ul className={'list-group'}>
                                <li className={'list-group-item'}>
                                    <span className={'font-weight-bold'}>Name:{this.props.name}</span>
                                </li>
                                <li className={'list-group-item'}>
                                <span className={'font-weight-bold'}>Age:{this.props.age}</span></li>
                                
                                <li className={'list-group-item'}>
                                <span className={'font-weight-bold'}>Desigination:{this.props.des}</span></li>
                                
                            </ul>

                        </div>
                    </div>
                    </div>

                </div>
            </div>
            
            </Mainlayout>
        );
    }
}

export default Team;