import React from 'react'; // Import React
import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home'
import Appbar from './components/Appbar';
import Profile from './components/Profile'
import StickyFooter from './StickyFooter'
import Astrology from './Astrology'
import { useState } from 'react';

function App({ store }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic here, set isLoggedIn to true upon successful login
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here, set isLoggedIn to false upon logout
    setIsLoggedIn(false);
  };
  // Ensure that store.getState() is returning a string (or modify the switch accordingly)
  function Page() {
    switch (store.getState().NavReducer) {
      case "Home":
        return (<div><Home /></div>);
      case "Login":
        return (<div><Login store={store}/></div>);
      case "Registration":
        return (<div><Registration /></div>);
      case "Astrology":
        return (<div><Astrology /></div>);
      case "Profile":
        return (<div><Profile /></div>); 
      default: 
        return null; // Handle the default case or add an error message
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Astrological Prediction System</p>
      </header>
      <div className="App-body">
        <Appbar store={store} />
        <center><Page /></center>
      </div>
      <StickyFooter />
    </div>
  );
}

export default App;