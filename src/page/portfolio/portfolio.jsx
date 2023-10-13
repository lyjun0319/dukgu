import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../common/auth";

const Portfolio = () => {

  const {user, status} = useAuth();
  const navigation = useNavigate();

  if(status === "loading") return false;
  const writeBtn = () =>{
    const { isAdmin } = user;
    if(!isAdmin) {
      return alert("글쓰기 권한이 없습니다.");
    }

    navigation("/portfolioWrite")
  };



  return (
    <div className="portfolio-wrap">
      <button type="button" className="btn-write" onClick={writeBtn}>글쓰기</button>

      <ul className="portfolio-list">
        <li>리스트1</li>
      </ul>
    </div>
  );
};

export default Portfolio;