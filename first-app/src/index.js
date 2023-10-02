import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './components/Product';
import Productdetails from './components/Productdetails';
import About from './components/About';
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';
import ThankyouPage from './components/ThankyouPage';
import Team from './components/Team';
// import Hooks from './components/Hooks';
import Reactwithstate from './components/Reactwithstate';
// import Student from './components/Student';
import StudentAxiosparent from './components/StudentAxiosparent';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/About",
    element: <About/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  },
  {
    path: "/Register",
    element: <Register/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Hooks",
    element: <Reactwithstate/>
  },
  {
    path: "/Product",
    element: <Product/>,
  },
  {
    path: "/Student",
    element: <StudentAxiosparent/>,
  },
  {
    path: "/Productdetail",
    element: <Productdetails/>,
  },
  {
    path: "/Thankyou",
    element: <ThankyouPage/>,
  },
  {
    path: "/Team",
    element: <Team/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
