
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
// import MessageCard from './components/MessageCard';
import Navbar from './components/NavBar';

// import Register from './components/Register';
// import Student from './components/Student';
// import Team from './components/Team';
// import Productdetails from './components/Productdetails';
import 'font-awesome/css/font-awesome.min.css';
// import About from './components/About';
// import ThankyouPage from './components/ThankyouPage';
import Productdetails from './components/Productdetails';
import StudentAxios from './components/StudentAxiosparent';
import StudentAxioslist from './components/StudentAxioslist';
import StudentAxiosparent from './components/StudentAxiosparent';
// import Employee from './components/Employee';
// import Hooks from './components/Hooks';
// import Greeting from './components/Greeting';



function App() {
  return (
    <div className="App">
     {/* <StudentAxios/> */}
      <Navbar/>    
      <Banner/> 
     <Productdetails/>
     {/* <StudentAxiosparent/> */}
     <Footer/>  
     {/* <Hooks/>
      {/* <MessageCard /> */}
      {/* <Team name={'ARUN'} age={'26'} des={'REACT js'}/> */}
      {/* <Student/>  */}
      {/* <Productdetails/> */}
      {/* <Register/> */}
   
     {/* <Greeting/>
     <Hooks/> */}

   
    </div>
  );
}

export default App;

