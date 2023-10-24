import React from 'react';
import {useLocation} from "react-router-dom";

const PortfolioDetail = () => {
  const {state:{
    data :{
      id,
      thumb,
      name,
      day,
      skill,
      company,
      desc,
      work,
      link
    }
  }} = useLocation();

  const textarea = (text, type)=>{
    const enter = text.split("\n");
    return enter.map((item, idx)=>{
      return <li key={idx}><span className="extra-num">{idx + 1}.</span> <span className="text">{item}</span></li>
    })
  }

  const outLink = (link) => {
    window.open(link);
  }

  return (
    <div className="detail-wrap">
      <div className="thumbnail">
        <img src={thumb} alt={name} />
      </div>
      <div className="detail-info">
        <h2 className="title">{name}<span className="company">({company})</span></h2>
        <p className="day">{day}</p>
        <div className="skill">
          {
            skill.map((item, idx )=>{
              return <p className="skill-item" key={idx}>#{item}</p>
            })
          }
        </div>
        <div className="intro-box">
          <div className="desc">
            <h3>프로잭트 소개</h3>
            <ol className="box">{textarea(desc)}</ol>
          </div>
          <div className="work">
            <h3>프로젝트 작업</h3>
            <ol className="box">{textarea(work)}</ol>
          </div>
        </div>
        {link && <button type="button" className="btn-link" onClick={()=>outLink(link)}>URL</button>}
      </div>
    </div>
  );
};

export default PortfolioDetail;