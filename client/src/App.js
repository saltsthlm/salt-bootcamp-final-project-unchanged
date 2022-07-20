import React, { useEffect, useState } from "react";
import "./App.css";
import Swiper from './components/Swiper';
import Login from "./components/login";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/logoutbutton";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  // Should fetch information about user here, or initialise information about the user 
  
  if(!isAuthenticated) {
    return (
      <div className="App">
       <header className="App-header">
          <Login />
        </header>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <LogoutButton />
        <Swiper />
      </header>
    </div>
  );
}

export default App;