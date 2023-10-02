import React, { Component } from 'react';
// import StudentAxios from './StudentAxios';
import Mainlayout from '../layout/Mainlayout';


class Student extends Component {
        constructor(props){
            super(props);
            this.state ={
                bindu:
                    {
                id:"K123456",
                name:"BINDU KOMALI ",
                age:"26",
                education:"Master in Computer Application",
                address:"Hyderbad",
                pic:"https://i.pinimg.com/736x/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
                    },
                sindu:
                    {
                id:"K123456",
                name:"SINDU PRASANNA ",
                age:"24",
                education:"Master in Bio-tech",
                address:"Hyderbad",
                pic:"https://media.istockphoto.com/id/465479132/photo/business-woman-headshot-portrait.jpg?s=612x612&w=0&k=20&c=Otk0arj3yP8SWds4I_zgSxMdqyTZkuJjl6XCU0jNVtI=",
             },
             teja:
                {
                    id:"S123456",
                    name:" SURYA TEJA",
                    age:"26",
                    education:"Master in FINE-ARTS",
                    address:"Hyderbad",
                    pic:"https://t3.ftcdn.net/jpg/02/95/21/58/360_F_295215888_nNSFXTYYPi1UNvKALPD90T5oDS631ife.jpg",
             },
         
        }
        }
    render() {
        const { id, name, age, education, address, pic } = this.state.bindu;
        const { id: idSindu, name: nameSindu, age: ageSindu, education: educationSindu, address: addressSindu, pic: picSindu } = this.state.sindu;
        const { id: idteja, name: nameteja, age: ageteja, education: educationteja, address: addressteja, pic: picteja } = this.state.teja;

        return (
            
            <React.Fragment>
                
              
                <div className='container'>
                 <h1 className='display-4 team'>CareerIT Student info</h1>
                <div className='row mg-5 mb-5'>
                <div className='col-md-4'>
                       
                    <div className='card '>
                        <img className='student-img' src={pic}  alt=''/>
                        <div className='card-body'>
                            <ul className={'list-group'}>
                            <li className={'list-group-item'}>
                                    <span className={'font-weight-bold'}>Id:{id}</span>
                                </li>
                                <li className={'list-group-item'}>
                                    <span className={'font-weight-bold'}>Name:{name}</span>
                                </li>
                                <li className={'list-group-item'}>
                                <span className={'font-weight-bold'}>Age:{age}</span></li>
                                
                                <li className={'list-group-item'}>
                                <span className={'font-weight-bold'}>Desigination:{education}</span></li>
                                <li className={'list-group-item'}>
                                <span className={'font-weight-bold'}>address:{address}</span></li>
                                
                            </ul>

                        </div>

                        
                    </div>
                    </div>
                    <div className='col-md-4'>
                       
                       <div className='card '>
                           <img className='student-img' src={picSindu}  alt=''/>
                           <div className='card-body'>
                               <ul className={'list-group'}>
                               <li className={'list-group-item'}>
                                       <span className={'font-weight-bold'}>Id:{idSindu}</span>
                                   </li>
                                   <li className={'list-group-item'}>
                                       <span className={'font-weight-bold'}>Name:{nameSindu}</span>
                                   </li>
                                   <li className={'list-group-item'}>
                                   <span className={'font-weight-bold'}>Age:{ageSindu}</span></li>
                                   
                                   <li className={'list-group-item'}>
                                   <span className={'font-weight-bold'}>Desigination:{educationSindu}</span></li>
                                   <li className={'list-group-item'}>
                                   <span className={'font-weight-bold'}>address:{addressSindu}</span></li>
                                   
                               </ul>
   
                           </div>
   
                           
                       </div>
                       </div>

                       <div className='col-md-4'>
                       
                       <div className='card '>
                           <img className='student-img' src={picteja}  alt=''/>
                           <div className='card-body'>
                               <ul className={'list-group'}>
                               <li className={'list-group-item'}>
                                       <span className={'font-weight-bold'}>Id:{idteja}</span>
                                   </li>
                                   <li className={'list-group-item'}>
                                       <span className={'font-weight-bold'}>Name:{nameteja}</span>
                                   </li>
                                   <li className={'list-group-item'}>
                                   <span className={'font-weight-bold'}>Age:{ageteja}</span></li>
                                   
                                   <li className={'list-group-item'}>
                                   <span className={'font-weight-bold'}>Desigination:{educationteja}</span></li>
                                   <li className={'list-group-item'}>
                                   <span className={'font-weight-bold'}>address:{addressteja}</span></li>
                                   
                               </ul>
   
                           </div>
   
                           
                       </div>
                       </div>

                </div>
            </div>
            </React.Fragment>
           
        );
    }
}


export default Student;