import React from 'react';
//import { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Log from './components/Login/Log';
import YesorNO from './components/YesorNo/YesorNO'; 
import Home from './components/Home/Home.js';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Leader from './components/Home/Leader.js';
import Learning from './components/learning/Learning.js';
import Profile from './components/Home/Profile.js';
import Service from './components/Home/Service.js';
import Product from './components/Home/Product.js';
import Chart from './components/Home/Chart.js';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Log/>}/>

      <Route path='/Input' element={<YesorNO/>}/>
      <Route path='/Input/Home' element={<Home/>}/>
      <Route path='/Input/Home/leaderboard' element={<Leader/>}/>
      <Route path='/Input/Home/learning' element={<Learning/>}/>
      <Route path='/Input/Home/profile' element={<Profile/>}/>
      <Route path='/Input/Home/Service' element={<Service/>}/>
      <Route path='/Input/Home/Chart' element={<Chart/>}/>
      <Route path='/Input/Home/product' element={<Product/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
