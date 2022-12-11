import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// import About from './components/About';





function App() {
  const [mode, setMode] = useState("light")

  //now we make a state for alert
  const [alert, setalert] = useState(null)//here by deafult me make alert as a object
  //here we show alert
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    //now here i want after show message by calling showAlert() it remove automatically for the user
    setTimeout(() => {
      setalert(null);
    }, 3000)
  }

  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")//here call showAlert method when we click on button
      document.title = "Textutils-Light Mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")//here call showAlert method when we click on button
      document.title = "Textutils-Darkr Mode"




    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}

            {/* <Route exact path="/about"> */}
              {/* <About/> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
            {/* </Route> */}




          {/* </Switch> */}
        </div>
      {/* </Router> */}

    </>

  );
}

export default App;
