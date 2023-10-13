import React, {useState} from 'react';

const User = ({user : {photoURL, displayName}, logout}) => {

  const [useToggle, setToggle] = useState(false);

  const handelLogout = async () => {
    await logout()
    window.location.reload();
  }

  const handelToggle = ()=> {
    if(!useToggle){
      setToggle(true);
    }else{
      setToggle(false);
    }
  }

  return (
    <div className="user-info">
      <button type="button" className="user-profile" onClick={handelToggle}>
        <img src={photoURL} alt={displayName} className="user-thumbnail"/>
        <span className="user-name">{displayName}</span>
      </button>

      {useToggle && <div className="user-toggle">
        <button type="button" className="logout" onClick={handelLogout}>Logout</button>
      </div>}

    </div>
  );
};

export default User;