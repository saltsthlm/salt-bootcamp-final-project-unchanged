import React, { useState } from "react";


const imgComedy= "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg";
function Comedy({}) {

  
  return (
    <div className="action">
        <p>Comedy</p>
      <img src={imgComedy}  className="img"></img>
      
    </div>
  );
}
export default Comedy;