import React from "react";
import  {Route , Routes, useNavigate } from "react-router-dom"
import Action from "./Pages/Action";
import Animate from "./Pages/Animate";
import Home from "./Pages/Home";
import Comedy from "./Pages/Comedy";
import Drama from "./Pages/Drama";
import Horror from "./Pages/Horror";
import Romance from "./Pages/Romance";




function Movies() {

  return (
    <div className="App">
    
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/action" element={<Action />} />
          <Route path="/animate" element={<Animate />} />
          <Route path="/comedy" element={<Comedy />} />
          <Route path="/romance" element={<Romance />} />
          <Route path="/horror" element={<Horror />} />
          <Route path="/drama" element={<Drama />} />
        </Routes>

    </div>
  );
}
export default Movies;