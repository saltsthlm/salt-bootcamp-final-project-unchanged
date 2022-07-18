import React from "react";
import logo from "./assets/logo.svg";
import popcorn from './assets/popcorn.png';
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
        {!isAuthenticated ? <Login /> : <Profile />}
      </header>
    </div>
  );
}
export default App;