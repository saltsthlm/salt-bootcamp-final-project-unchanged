import React, { useState } from "react";


const imgAnimation= "https://www.liveabout.com/thmb/HiKmFTriz9GQr-JxoToyFSDhtPQ=/338x500/filters:fill(auto,1)/TheNutJob-56a575333df78cf772887292.jpg";
function Animate() {

  
  return (
    <div className="action">
        <p>Animation</p>
      <img src={imgAnimation} className="img"></img>
      
    </div>
  );
}
export default Animate;