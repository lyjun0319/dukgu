import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const ThumbNailList = ({data}) => {

  const navigate = useNavigate();
  const handelClick = (id, data)=>{
    navigate(`/portfolio/${id}`,{ state : { data } });
  }

  const skills = (skill)=>{
    return skill.map((item)=>{
       return <span key={item} className="skill-item">#{item}</span>
    })
  }
  const {id, thumb, name, day, skill, thumbWidth} = data;

  return (
    <li key={id} onClick={()=>handelClick(id, data)}>
      <div className="img-thumbnail">
        <img src={thumb} alt="" className={thumbWidth ? "width-img" : null}  />
      </div>
      <div className="prj-info">
        <div className="prj-info-hd">
          <p className="name">{name}</p>
          <p className="day">{day}</p>
        </div>
        <div className="skill">{skills(skill)}</div>
      </div>
    </li>
  )
};

export default ThumbNailList;