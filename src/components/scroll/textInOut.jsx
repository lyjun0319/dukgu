import React, {useEffect, useState} from 'react';

const TextInOut = ({children, type, value}) => {
  const [textIn, setTextIn] = useState(0);
  const [pdTop, setPdTop] = useState(0);

  useEffect(()=>{
    window.addEventListener('scroll', fadeInOut);
    return () => {
      window.removeEventListener('scroll', fadeInOut); //clean up
    };
  }, [])


  const fadeInOut = (prop)=>{
    const scrollY = window.scrollY;
    const opacity = prop ? scrollY / prop : scrollY / value;
    const top = Math.max(20 - scrollY / 10, 0);

    setTextIn(opacity > 1 ? 1 : opacity);
    setPdTop(top);
  }

  return (
    <div style={{opacity:textIn, transform:`translateY(${pdTop}px`}}>
      {children}
    </div>
  );
};

export default TextInOut;