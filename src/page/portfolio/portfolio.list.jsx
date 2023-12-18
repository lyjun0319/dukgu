import React, {Fragment, useEffect, useState} from 'react';
import ThumbNailList from "../../components/list/thumbNailList";
import TextList from "../../components/list/textList";

const PortfolioList = ({data}) => {

  const [agentType, setAgentType] = useState({
    type: "",
    colum:0,
  });

  const handleResize = () => {
    const winW = window.innerWidth;
    if(winW > 1920 && agentType.type !== "uhdpc"){
      setAgentType({
        type: "uhdpc",
        colum: 7
      });
    }

    if(winW > 1024  && winW < 1920 && agentType.type !== "pc"){
      setAgentType({
        type: "pc",
        colum:5
      });
    }

    if(winW < 1024 && winW > 768 && agentType.type !== "ipad"){
      setAgentType({
        type: "ipad",
        colum:3
      });
    }

    if(winW < 768 && agentType.type !== "mobile"){
      setAgentType({
        type: "mobile",
        colum:1
      });
    }
  }

  const handleAgentType = ()=>{

    const winW = window.innerWidth;
    if(winW > 1920 ){
      setAgentType({
        type: "uhdpc",
        colum: 7
      });
    }

    console.log(winW);

    if(winW > 1024  && winW < 1921){
      console.log("pc")
      setAgentType({
        type: "pc",
        colum: 5
      });
    }

    if(winW < 1024 && winW > 768 ){
      setAgentType({
        type: "ipad",
        colum: 3
      });
    }

    if(winW < 768){
      setAgentType({
        type: "mobile",
        colum: 1
      });
    }
  }

  useEffect(() => {

    handleAgentType();
    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [agentType.type]);


  console.log(data);

  console.log(agentType)
  if(agentType.colum === 0) return false;

  console.log("aa")
  const columns = Array.from({ length: agentType.colum }, (_, columnIndex) =>
    data.filter((item, key) => columnIndex === key % agentType.colum)
  );

  return <>
    {
      Array.from({ length: agentType.colum }).map((_, columnIndex) => (
        <div className={`portfolio-colum colum-${agentType.colum}`} key={columnIndex}>
          <ul className="portfolio-list">
            {columns[columnIndex].map((item, key) => (
              <Fragment key={key}>
                {item.thumb ? <ThumbNailList data={item} /> : <TextList data={item} />}
              </Fragment>
            ))}
          </ul>
        </div>
      ))
    }
  </>
};

export default PortfolioList;