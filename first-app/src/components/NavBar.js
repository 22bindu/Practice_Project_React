import React from 'react';
import { Link } from 'react-router-dom';
// import Team from './Team';
import Student from './Student';


function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed">
       <div className='container'>
        <div className="navbar-brand">
          
          <a href="http://www.careerit.co.in/wp-content/uploads/2023/05/logo-careerit.png">
            <img src='http://www.careerit.co.in/wp-content/uploads/2023/05/logo-careerit.png' alt='Banner' className="logo"></img></a>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" > <Link className="nav-link" to={'/'}>Home</Link></li>
         
          <li className='nav-item'> <Link className="nav-link" to={'/About'}>About</Link></li>   
          <li className='nav-item'> <Link className="nav-link" to={'/Product'}>Product</Link></li> 
          <li className='nav-item'> <Link className="nav-link" to={'/Team'}>Team</Link></li> 
           <li  className="nav-item"><a className="nav-link" href="/Student">Student</a></li>
          <li className='nav-item'> <Link className="nav-link" to={'/Hooks'}>Hooks</Link></li>           
          <li  className="nav-item"> <Link className="nav-link" to={'/Contact'}>Contact</Link></li>
          <li  className="nav-item"> <Link className=" btn btn-warning btn-sm" to={'/Register'}>Register</Link></li>
          <li  className="nav-item"> <Link className=" btn btn-warning btn-sm" to={'/Login'}>Login</Link></li>
        </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  
  
  
  