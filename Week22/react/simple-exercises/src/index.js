import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import FoamRoller from './components/foam-roller';
import Abs from './components/Abs'
import KneeStrengthening from './components/KneeStrengthening';
import Stretches from './components/Stretches';
import CreateWorkout from './components/CreateWorkout';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/foam-roll' element={<FoamRoller />}/>
      <Route path='/abs' element={<Abs />}/>
      <Route path='/knee-strengthening' element={<KneeStrengthening />}/>
      <Route path='/stretches' element={<Stretches />}/>
      <Route path='/create-workout' element={<CreateWorkout />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
