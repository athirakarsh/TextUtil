
import { useActionState, useState, useSyncExternalStore } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const[mode, setMode] =  useState('light')
  const[alert,setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
    
  }
  const toggleMode = ()=>{
   if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#3f688c'
    showAlert("Dark Mode is enabled",'success')
   }else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light Mode is enabled",'success')
   }        
  }
  return (
  <Router>
     
<Navbar header ="Text Utils" title ="About" mode = {mode} toggleMode = {toggleMode}/>
<Alert alert = {alert} />
  <div className='container my-3'>

    <Routes>
      <Route exact path="/" element={<TextForm heading = 'My heading' mode = {mode} toggleMode = {toggleMode} showAlert = {showAlert}/> } />
      <Route exact path="/about" element={<About />} />
    </Routes>

    {/* <About/> */}

  </div>
  </Router>
  // git status
  
  );
}

export default App;
