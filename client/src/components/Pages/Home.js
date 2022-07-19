import React from "react";
import  {Route , Routes, useNavigate } from "react-router-dom"


const action= "https://i.pinimg.com/originals/85/94/4b/85944bb3cd30e85be64faa9988d31e47.jpg";
 const animation= "https://www.liveabout.com/thmb/HiKmFTriz9GQr-JxoToyFSDhtPQ=/338x500/filters:fill(auto,1)/TheNutJob-56a575333df78cf772887292.jpg";
 const comedy= "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg";
 const horror= "https://i.pinimg.com/736x/c1/13/81/c11381c6da7bfa31b4e7e49bccd15e97.jpg";
 const romance= "https://i.pinimg.com/originals/3b/27/40/3b2740afadbc1ffed4546ce1b7169e67.jpg";
 const drama= "https://i.pinimg.com/736x/30/12/34/30123417c776ac9f62d447d1e6dff12a.jpg";


function Home() {
const navigate = useNavigate();

const navigateAction =() =>{
    navigate('/action');
}
const navigateAnimate=() =>{
    navigate('/animate');
}
const navigateComedy=() =>{
    navigate('/comedy');
}
const navigateRomance=() =>{
    navigate('/romance');
}
const navigateHorror=() =>{
    navigate('/horror');
}
const navigateDrama=() =>{
    navigate('/drama');
}
  
  return (
    <div className="App">
      <img src={action}  className="img" onClick={navigateAction}></img>
      <img src={animation}  className="img" onClick={navigateAnimate}></img>
      <img src={comedy}  className="img" onClick={navigateComedy}></img>
      <img src={horror}  className="img" onClick={navigateHorror}></img>
      <img src={romance}  className="img"onClick={navigateRomance} ></img>
      <img src={drama}  className="img" onClick={navigateDrama}></img>
      

    </div>
  );
}
export default Home;