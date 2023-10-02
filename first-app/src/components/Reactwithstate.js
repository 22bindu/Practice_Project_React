import React, { useState }  from "react";
import Mainlayout from "../layout/Mainlayout";

let Reactwithstate =()=>{
    let [count, setCount] = useState(0);
//     let increaseCount = () => {
//     setCount(count + 1);
//   };
let [message , setmessage]=useState('Click on any button')

        return(

            <React.Fragment>
                <Mainlayout>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <div  className="card">
                                    <div className="card-header bg-warning">
                                        <p><h3>useState  & setstate example</h3></p>
                                    </div>
                                    <div className="card-image">
                                        <img src="" alt=""/>
                                        </div> 
                                        
                                        <div className="card-body">
                                           <h4>{count}</h4>
                                         </div>  
                                         <div className="card-body">
                                            <button className="btn btn-primary" onClick={()=>{setCount(count+1)}} >
                                                increase
                                            </button>
                                            <button className="btn btn-primary" onClick={()=>{setCount(count-1>0?count-1:0);setmessage(!message)}} >
                                                Decrease
                                            </button>
                                            </div>                            
                                         </div>
                            </div>
                   
                   
                            <div className="col-md-6">
                                <div  className="card">
                                    <div className="card-header bg-warning">
                                        <h3>(useState  & setstate )Greeting message</h3>
                                        </div> 

                                        <div className="card-body">
                                           <h4>{message}</h4>
                                         </div>  
                                         <div className="card-body">
                                            <button className="btn btn-primary " onClick={()=>{setmessage('Goodmorning')}} >
                                              say !  Goodmorning
                                            </button>
                                            <button className="btn btn-primary" onClick={()=>{setmessage(' Good afternoon')}} >
                                              say ! Good afternoon
                                            </button>
                                            <button className="btn btn-primary" onClick={()=>{setmessage('Good evening')}} >
                                               say ! Good evening
                                            </button>
                                            </div>                            
                                         </div>
                            </div>
                            </div>
                    </div>


                    </Mainlayout>
            </React.Fragment>


        );
}
export default Reactwithstate;