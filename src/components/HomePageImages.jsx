import React from 'react';
import GalaxyBowl4 from "../images/GalaxyBowl4.jpg"
import GalaxyBowl3 from "../images/GalaxyBowl3.jpg"
import GalaxyBowl2 from "../images/GalaxyBowl2.jpg"
import GalaxyBowl1 from "../images/GalaxyBowl1.jpg"
import { useState } from 'react';

function HomePageImages() {
  var arrayOfImages = [GalaxyBowl3, GalaxyBowl2, GalaxyBowl1]
  const [mainImage, setMainImage] = useState(GalaxyBowl4) 
  
  function handleClick(event) {
    console.log("sddddd", event.target.id)
    setMainImage(arrayOfImages[event.target.id])
  }
  return (
      <div className="galaxyBowls">
        <button className="galaxyBowlMainButton"><img className="galaxyBowlMain" src={mainImage} /></button>
        <div className="galaxyBowlSideContainer">
            <button onClick={handleClick} className="buttonMargin"><img id="0" className="galaxyBowlSide" src={arrayOfImages[0]} /></button>
            <button onClick={handleClick} className="buttonMargin"><img id="1" className="galaxyBowlSide" src={arrayOfImages[1]} /></button>
            <button onClick={handleClick} className="buttonMargin"><img id="2" className="galaxyBowlSide" src={arrayOfImages[2]} /></button>
        </div>
      </div>
  );
}

export default HomePageImages;
