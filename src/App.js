
import { useState } from 'react';
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import NavBar from './components/Navbar';
import TextForm from './components/TextForm'
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled','success');

    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#032a3d';
      showAlert('Dark Mode has been enabled','success');

    }
  }
  return (
      <>
      <Router>
        <NavBar title = "TextUtils"  mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
           <Routes>
            <Route exact path="/about" mode = {mode} element={<About/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Text to Analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
      </>
  );

}

export default App;
