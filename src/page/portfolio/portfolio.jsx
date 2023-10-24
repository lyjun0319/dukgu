import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../common/auth";
import {getPortfolio} from "../../libs/firebase/firebase";
import {useQuery} from "react-query";
import ThumbNailList from "../../components/list/thumbNailList";

const Portfolio = () => {

  const {user, status} = useAuth();
  const {isLoading, error, data:portfolioList} = useQuery(["portfolio"],getPortfolio)
  const navigation = useNavigate();

  if(status === "loading") return false;
  const writeBtn = () =>{
    const { isAdmin } = user;
    if(!isAdmin) {
      return alert("글쓰기 권한이 없습니다.");
    }
    navigation("/portfolioWrite");
  };

  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>{error}</p>}
      {portfolioList &&
        <div className="portfolio-wrap">
          <button type="button" className="btn-write" onClick={writeBtn}>글쓰기</button>
          <ul className="portfolio-list">
            <ThumbNailList data={portfolioList}/>
          </ul>
        </div>
      }
    </>

  );
};

export default Portfolio;