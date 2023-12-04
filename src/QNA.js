import './QNA.css';
import React, { useState } from "react";
import RightArrow from './images/right_arrow.png'
import LeftArrow from './images/left_arrow.png'


function QNA({ item}) {
  
  const [count, setCount] = useState(0);
  if(count>=1){{/*changed it to >=1 so that it would work if it was 1 intead of just above 1*/}
    return (
      <div className='box'>
        <h3 className='Answer'>{item.Question}?<ul className='Answers'>{item.Answer}</ul></h3>{/*changed it to have ? after question so it looks better */}
        <button onClick={() => setCount(count - 1) }className='close'><img src={RightArrow} width="50px" height="auto" alt="logo" /></button>
      </div>   
    );
  }
  else{
    return (
      <div className='box'>
        <h3 className='Question'>{item.Question}?</h3>{/*changed it to have ? after question so it looks better */}
        <button onClick={() => setCount(count + 1)}className='expand'><img src={LeftArrow} width="50px" height="auto" alt="logo" /></button>
      </div>
      
    );
  }
}

export default QNA;