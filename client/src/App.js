import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
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
        {!isAuthenticated ? <Login /> : <Profile />}
      </header>
    </div>
  );
}
export default App;