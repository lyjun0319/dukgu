import React, {Fragment, useEffect, useState} from 'react';

const TextOut = ({children , props}) => {
  const { scrollY, value, step } = props;
  const [opacityVal, setOpacityVal] = useState(0);
  const [topMove, setTopMove] = useState(100);

  useEffect(()=>{
    fadeInOut(value, step);
  }, [scrollY])

  const fadeInOut = (value)=>{
    const topMove = Math.max(20 - scrollY / 10, 0);
    const opacityVal = !step ? scrollY / value : (scrollY - value * step) / value;

    if(opacityVal >= 1){

    }else{
      setOpacityVal(opacityVal > 0.95 ? 1 : opacityVal);
      setTopMove(topMove);
    }
  }

  return (

    <div className={"text-box-inr"} style={{opacity:opacityVal, transform:`translateY(${topMove}px)`, display: opacityVal >= 1 ? "none": "block"}}>
      {children}
    </div>
  );
};

export default TextOut;