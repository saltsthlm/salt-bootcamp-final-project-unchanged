import React, { useState } from "react";


const imgHorror= "https://i.pinimg.com/736x/c1/13/81/c11381c6da7bfa31b4e7e49bccd15e97.jpg";
function Horror() {

  
  return (
    <div className="action">
        <p>Horror</p>
      <img src={imgHorror}  className="img"></img>
      
    </div>
  );
}
export default Horror;