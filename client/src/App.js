import React from 'react';
import NavBar from './components/NavBar.js'
import "./App.css"
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screens/Home.js'
import Login from './components/screens/Login.js'
import Profile from './components/screens/Profile.js'
import Signup from './components/screens/Signup.js'
import CreatePost from './components/screens/CreatePost.js'



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path = "/">
        <Home />
      </Route>
      <Route path = "/login">
        <Login />
      </Route>
      <Route path = "/signup">
        <Signup />
      </Route>
      <Route path = "/profile">
        <Profile />
      </Route>
      <Route path = "/create">
        <CreatePost />
      </Route>
    </BrowserRouter>
    
    
  );
}

export default App;
