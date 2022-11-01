

import React from 'react';

// Components:
// import Navbar from './components/Navbar';

// Import page switcher
import SwitchPage from './components/SwitchPage';

import { useLocation } from 'react-router-dom';

// const backgroundImg = "";
// import backgroundImg from './assets/home/background-home-desktop.jpg';
// let backgroundImg = require('./assets/home/background-home-desktop.jpg');

function App() {

  let location = useLocation().pathname;

  if(location === "/") location = "/home";
  const divName = "mainDiv " + location.replace("/", "");

  return (
    <>
      
      <div className={`${location === '/crew' ? "pb-0" : "pb-80"} ${divName} pt-10 w-full mx-auto relative`}>

        <SwitchPage/>
        
      </div>
    </>
  );
}

export default App;
