
import React from 'react';
import './App.css';
import Slider from './Header/Slider'
import Nav from './Navbar/Nav';
import Services from './Component/Services';
import {BrowserRouter, Router, Route} from 'react-router-dom'
import Licence from './pages/Licence';
// import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import { Switch } from '@mui/material';










function App() {


  return (
    <div className='header'>
      
    <div className='container mt-5'>
      <div><Licence /></div>
      {/* <Slider /> 
     <Nav />
    <Services /> */}
  
      
    </div>
    {/* <BrowserRouter>
    
      <Router>
     
          <Route path='/Slider' element={Slider} />
        <Route path='/Licence' element={Licence} />
        
      </Router>
      
    </BrowserRouter> */}
    </div>


  );
}

export default App;
