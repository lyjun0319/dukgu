import React from 'react';
import ThumbNailList from "../../components/list/thumbNailList";
import TextList from "../../components/list/textList";

const PortfolioList = ({data}) => {

  const thumbData = data.filter((item)=> item.hasOwnProperty("thumb"));
  const notThumbData = data.filter((item) => item.thumb === undefined || item.thumb === null);

  return (
    <>
      <ul className="portfolio-list">
        <ThumbNailList data={thumbData} />
      </ul>

      <ul className="portfolio-list">
        <TextList data ={notThumbData} />
      </ul>
    </>
  );
};

export default PortfolioList;