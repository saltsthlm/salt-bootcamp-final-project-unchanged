import React, { useState } from "react";


const imgDrama= "https://i.pinimg.com/736x/30/12/34/30123417c776ac9f62d447d1e6dff12a.jpg";
function Drama() {

  
  return (
    <div className="action">
        <p>Drama</p>
      <img src={imgDrama}className="img"></img>
      
    </div>
  );
}
export default Drama;