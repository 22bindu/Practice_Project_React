
import product from'../assets/images/product.png';
import { Link } from 'react-router-dom'

import React from 'react'

function Productdetails() {
  return (
    <React.Fragment>
       < div className='container pro'>
                <div className='row mt-5 '>
                <div className='col-md-6 '>
                    <h5 className='text-danger mx-5 '>HOW WE GIVE ONLINE TRAINING?</h5>
                    <p>Our training is completely practical oriented enabling student-trainer interaction.
                         Our online training is given by real time professionals who have 10+ years of professional experience.</p>
                         <h5 className='text-danger mx-5'>HOW WE GIVE ONLINE TRAINING?</h5>
                    <p>Our training is completely practical oriented enabling student-trainer interaction.
                         Our online training is given by real time professionals who have 10+ years of professional experience.</p>
                         <h5 className='text-danger mx-5'>HOW WE GIVE ONLINE TRAINING?</h5>
                    <p>Our training is completely practical oriented enabling student-trainer interaction.
                         Our online training is given by real time professionals who have 10+ years of professional experience.</p>
                        
                           <Link className='btn btn-danger btn-md' to={"/Product"}>Place order </Link>
                         
    
                        
                         
                        </div>
                        <div className='col-md-4'>
                            <img className="pro-img" src={product} alt='' />
                        </div>

                </div>
                
            </div>
    </React.Fragment>
  );
}

export default Productdetails