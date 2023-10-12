import React, {useEffect, useState} from 'react';
import {databaseCall, logout} from "../../libs/firebase/firebase";

const User = ({user : {photoURL, displayName}}) => {

  const [useToggle, setToggle] = useState(false);

  const handelToggle = ()=> {
    if(!useToggle){
      setToggle(true);
    }else{
      setToggle(false);
    }
  }

  useEffect(()=>{
    console.log(databaseCall)
  },[])

  return (
    <div className="user-info">
      <button type="button" className="user-profile" onClick={handelToggle}>
        <img src={photoURL} alt={displayName} className="user-thumbnail"/>
        <span className="user-name">{displayName}</span>
      </button>

      {useToggle && <div className="user-toggle">
        <button type="button" className="logout" onClick={logout}>Logout</button>
      </div>}

    </div>
  );
};

export default User;