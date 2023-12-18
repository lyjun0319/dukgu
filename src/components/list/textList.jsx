import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const TextList = ({data}) => {
  const [randomNumber, setRandomNumber] = useState(null);
  const {id, name, day, skill} = data;
  const navigate = useNavigate();
  const handelClick = (id, data)=>{
    navigate(`/portfolio/${id}`,{ state : { data } });
  }

  const skills = (skill)=>{
    return skill.map((item)=>{
      return <span key={item} className="skill-item">#{item}</span>
    })
  }

  useEffect(()=>{
    const newRandomNumber = Math.floor(Math.random() * 5) + 1;
    setRandomNumber(newRandomNumber);
  },[])

  return (
    <li className={`text-list bgColor${randomNumber}`} key={id} onClick={()=>handelClick(id, data)}>
      <div className="prj-info">
        <div className="prj-info-hd">
          <p className="name">{name}</p>
          <p className="day">{day}</p>
        </div>
        <div className="skill">{skills(skill)}</div>
      </div>
    </li>
  );
};

export default TextList;