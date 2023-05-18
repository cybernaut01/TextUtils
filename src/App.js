import './App.css';
import About from './components/About';
import React, {useState} from 'react';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import Alert from './components/Alert'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const enableDarkMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setTextMode('light')
      document.body.style.backgroundColor = '#292b2c'
      document.body.style.color = 'white'
      showAlert("Dark Mode is Enabled!","success")
      setAboutColor('#3C486B')
      setAboutTextColor('#FBFBFB')
    }
    else {
      setMode('light')
      setTextMode('dark')
      document.body.style.backgroundColor = '#f7f7f7'
      document.body.style.color = 'black'
      showAlert("Light Mode is Enabled!","success")
      setAboutColor('#FBFBFB')
      setAboutTextColor('#332D2D')
    }
  }

  const showAlert = (message,type) => {
    setAlert({
      message : message,
      type : type
    }
    )

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const [aboutTextColor,setAboutTextColor] = useState('black')
  const [aboutColor,setAboutColor] = useState('white')
  const [mode,setMode] = useState('light')
  const [textMode,setTextMode] = useState('dark')
  const [alert,setAlert] = useState(null)
  return (
    <>
    
    <BrowserRouter>
    <Navbar title= "TextUtils" mode={mode} enableDarkMode = {enableDarkMode} textMode = {textMode} />
    <Alert alert = {alert}/>
    <Routes>
      <Route exact path="/about" element={<About aboutColor={aboutColor}  aboutTextColor = {aboutTextColor}/>} />
      <Route exact path="/" element= {<TextArea heading="Enter the text to analyse: " mode={mode} showAlert={showAlert}/>} /> 
    </Routes>
    </BrowserRouter>

      
      
      {/* <About /> */}
      {/* <TextArea mode = {mode} showAlert={showAlert}/> */}
    </>
  );
}

export default App;
