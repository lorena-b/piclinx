import React, { useEffect, createContext, useReducer, useContext } from 'react';
import NavBar from './components/NavBar.js'
import "./App.css"
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/screens/Home.js'
import Login from './components/screens/Login.js'
import Profile from './components/screens/Profile.js'
import Signup from './components/screens/Signup.js'
import CreatePost from './components/screens/CreatePost.js'
import {reducer, initialState} from './reducers/userReducer.js'
import UserProfile from './components/screens/UserProfile'

export const UserContext = createContext()

const Routing = () => {

  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({type:"USER", payload:user})
    } else {
      history.push('/login')
    }

  },[])

  return (
    <Switch>

    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route exact path="/profile">
      <Profile />
    </Route>
    <Route path="/createpost">
      <CreatePost />
    </Route>
    <Route path="/profile/:userid">
      <UserProfile />
    </Route>

    </Switch>
  )
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value = {{state, dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
