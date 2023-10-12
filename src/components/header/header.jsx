import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {login, logout, onUserStateChange} from "../../libs/firebase/firebase";
import User from "./user";


const Header = () => {
  const [user, setUser] = useState();

  useEffect(()=>{
    onUserStateChange(setUser);
  }, []);

  return (
    <header id="header">
      <h1 id="logo">
        <Link to="/">Dukgu's</Link></h1>
      <nav id="nav">
        <NavLink to="/my" className="nav-list">Intro</NavLink>
        <NavLink to="/portfolio" className="nav-list">PortFolio</NavLink>
        {user && <User user={user} />}
        {!user && <button type="button" className="btn-login" onClick={login}>Login</button> }
      </nav>
    </header>
  );
};

export default Header;