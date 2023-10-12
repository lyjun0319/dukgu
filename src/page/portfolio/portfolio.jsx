import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Portfolio = () => {
  const navigation = useNavigate();
  const writeBtn = () =>{
    navigation("/portfolioWrite");
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