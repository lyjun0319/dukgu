import React from 'react';
import {Link, NavLink} from "react-router-dom";
import User from "./user";
import {useAuth} from "../../common/auth";


const Header = () => {
  const { user, status, login, logout } = useAuth();

  if(status === "loading") return false;

  return (
    <header id="header">
      <h1 id="logo">
        <Link to="/">Dukgu's</Link></h1>
      <nav id="nav">
        <NavLink to="/my" className="nav-list">Intro</NavLink>
        {/*<NavLink to="/portfolio" className="nav-list">PortFolio</NavLink>*/}
        {user && <User user={user} logout={logout} />}
        {!user && <button type="button" className="nav-list btn-login" onClick={login}>Login</button> }
      </nav>
    </header>
  );
};

export default Header;