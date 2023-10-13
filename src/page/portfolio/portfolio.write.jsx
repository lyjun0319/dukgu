import React from 'react';


const PortfolioWrite = () => {
  return (
    <div className="write-box">
      <form action="">
        <ul>
          <li>
            <label htmlFor="name">프로잭트 명</label>
            <input
              type="text"
              name="project-name"
              id="name"
              placeholder="프로젝트 이름"
            />
          </li>
          <li>
            <label htmlFor="day">프로잭트 기간</label>
            <input
              type="text"
              id="day"
              name='project-day'
              placeholder="프로젝트 기간"
            />
          </li>
          <li>
            <label htmlFor="thumb">프로잭트 썸네일</label>
            <input
              type="file"
              id="thumb"
              name='project-day'
              multiple={true}
              placeholder="프로젝트 썸네일"
            />
          </li>
          <li>
            <label htmlFor="link">프로잭트 URL</label>

              <input
                type="text"
                name="project-link"
                id="link"
                placeholder="프로젝트 URL"
              />

          </li>
          <li>
            <label htmlFor="sub">프로잭트 소개</label>
            <textarea
              name="project-info"
              id=""
            >
            </textarea>
          </li>
        </ul>
      </form>
      <div className="btn-box">
        <button type="button" className="btn-save">저장</button>
      </div>
    </div>
  );
};

export default PortfolioWrite;