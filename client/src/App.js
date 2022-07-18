import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import Profile from "./components/profile";

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <LoginButton />
        <LogoutButton />
        <Profile />
      </header>
    </div>
  );
}
export default App;