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
          <Route path="/28" element={<Action />} />
          <Route path="/16" element={<Animate />} />
          <Route path="/35" element={<Comedy />} />
          <Route path="/10749" element={<Romance />} />
          <Route path="/27" element={<Horror />} />
          <Route path="/18" element={<Drama />} />
        </Routes>
    </div>
  );
}
export default Movies;