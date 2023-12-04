import './Slideshow.css';
import React, { useState } from "react";
import RightArrow from './images/right_arrow.png'
import LeftArrow from './images/left_arrow.png'
import Slideshow_1 from './images/Slideshow_1.jpg'
import Tournament_main from './images/Tournament_main.JPG'
import One_On_One_Main from './images/One_On_One_Main.jpg'

function Slideshow() {
  
  const [count, setCount] = useState(0);
  switch(count) {
    case 1:
      return (
        <div className='box'>
          <img src={Tournament_main} className='main_image' width="100%" height="auto" alt="logo" />
          <h3 className='titles'>chess tournament envolving Marks chess clubmembers </h3>
          <button onClick={() => setCount(count - 1)}className='left'><img src={LeftArrow} width="100%" height="auto" alt="logo" /></button>
          <button onClick={() => setCount(count + 1) }className='right'><img src={RightArrow} width="100%" height="auto" alt="logo" /></button>
        </div>   
      ); 
    case 2:
      return (
        <div className='box'>
          <img src={One_On_One_Main} className='main_image' width="100%" height="auto" alt="logo" />
          <h3 className='titles'>Mark teaching chess one on one with a student</h3>
          <button onClick={() => setCount(count - 1)}className='left'><img src={LeftArrow} width="100%" height="auto" alt="logo" /></button>
          <button onClick={() => setCount(count - 2) }className='right'><img src={RightArrow} width="100%" height="auto" alt="logo" /></button>{/*changed it to -2 so that it would go to the first slide so it repeats*/}
        </div>
      );
    default:
      return (
        <div className='box'>
          <img src={Slideshow_1} className='main_image' width="100%" height="auto" alt="logo" />
          <h3 className='titles'>Mark teaching chess at a school </h3>
          <button onClick={() => setCount(count + 2)}className='left'><img src={LeftArrow} width="100%" height="auto" alt="logo" /></button>{/*changed it to +2 so that it would go to the last slide so it repeats*/}
          <button onClick={() => setCount(count + 1) }className='right'><img src={RightArrow} width="100%" height="auto" alt="logo" /></button>
        </div>   
      ); 

  }
}

export default Slideshow;