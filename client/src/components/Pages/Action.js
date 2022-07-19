import React, { useState } from "react";


const imgAction= "https://i.pinimg.com/originals/85/94/4b/85944bb3cd30e85be64faa9988d31e47.jpg";
function Action({}) {

  
  return (
    <div className="action">
        <p>Action</p>
      <img src={imgAction}  className="img"></img>
      
    </div>
  );
}
export default Action;