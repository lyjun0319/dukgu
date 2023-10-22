import React, {useEffect} from 'react';
import {useAuth} from "../../common/auth";
import {Navigate} from "react-router-dom";

const IsAdmin = ({children}) => {
  const {user,status} =  useAuth();

  if(status === "loading") return false;

  if(!user === null || !user?.isAdmin) {
    alert("글쓰기 권한이 없습니다.");
    return <Navigate to={"/"} replace/>
  }
  return children;
};

export default IsAdmin;