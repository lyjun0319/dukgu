import React from 'react';
import { useNavigate} from "react-router-dom";
import {useAuth} from "../../common/auth";
import {getPortfolio} from "../../libs/firebase/firebase";
import {useQuery} from "react-query";
import PortfolioList from "./portfolio.list";

const Portfolio = () => {

  const {user, status} = useAuth();
  const {isLoading, error, data} = useQuery(["portfolio"],getPortfolio);
  const navigate = useNavigate();


  if(status === "loading") return false;

  const writeBtn = () =>{
    const { isAdmin } = user;
    if(!isAdmin) {
      return alert("글쓰기 권한이 없습니다.");
    }
    navigate("/portfolioWrite")
  };


  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>{error}</p>}
      {data &&
        <>
        <div className="portfolio-wrap">
          <PortfolioList data={data}/>
        </div>
          <button type="button" className="btn-write" onClick={writeBtn}>글쓰기</button>
        </>
      }
    </>

  );
};

export default Portfolio;