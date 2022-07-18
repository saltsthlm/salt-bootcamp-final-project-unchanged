import React from "react";
import LoginButton from "./loginbutton";
import popcorn from '../assets/popcorn.png';

const Login = () => {
  return (
    <>
      <h1>Movie Maker</h1>
      <img src={popcorn} className="App-logo" alt="logo" />
      <p>Welcome! Please log in</p>
      <LoginButton />
    </>
  );
};

export default Login;