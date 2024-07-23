import React from 'react';
import './App.css';
import Display from './Display';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <div className='container'>
    <div className='row'>
    <div className='col-2'>
    <Sidebar />
    </div>
    <div className='col-10'>
    <Display />
    </div>
    </div>
   
    </div>
    
     
    </div>
  );
}

export default App;