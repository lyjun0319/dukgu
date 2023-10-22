import React from 'react';

const ThumbNailList = ({data}) => {

  const handelClick = (link)=>{
    window.open(`http://www.${link}`, "_blank");
  }
  return (
    data.map(({id, thumb, name, day, desc, link})=>{
      console.log(thumb);
      return  <li key={id} onClick={()=>handelClick(link)}>
        <div className="img-thumbnail">
          <img src={thumb} alt="" />
        </div>
        <p className="prj-name">{name}</p>
        <p className="prj-day">{day}</p>
      </li>
    })

  );
};

export default ThumbNailList;