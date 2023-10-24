import React from 'react';
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


  return (
    data.map((item)=>{
      const {id, thumb, name, day, skill} = item;
      return  <li key={id} onClick={()=>handelClick(id, item)}>
        <div className="img-thumbnail">
          <img src={thumb} alt="" />
        </div>
        <div className="prj-info">
          <div className="prj-info-hd">
            <p className="name">{name}</p>
            <p className="day">{day}</p>
          </div>
          <div className="skill">{skills(skill)}</div>
        </div>
      </li>
    })
  );
};

export default ThumbNailList;