import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';



function Demo() {

  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message, type) =>{

     setAlert({
      msg : message,
      type : type
     })
  }
  setTimeout(() => {
    setAlert(null);
    
  }, 2000);
  

  const toggleMode = ()=>{

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","Success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success")
    }
  }

 

  return (
<div>

 <Navbar text="This is props" text1 = {3} mode={mode} toggleMode={toggleMode}/>
 <Alert alert ={alert} />
     
  {/* <About /> */}
        
  <TextForm heading = "Enter the text to analyize" mode={mode} showAlert={showAlert} />
          



</div>


  );
}

export default Demo;