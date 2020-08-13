import React from 'react';
import NavBar from './components/NavBar.js'
import "./App.css"
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screens/Home.js'
import Login from './components/screens/Login.js'
import Profile from './components/screens/Profile.js'
import Signup from './components/screens/Signup.js'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path = "/">

      </Route>
    </BrowserRouter>
    
    
  );
}

export default App;
