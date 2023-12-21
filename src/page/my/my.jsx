import React, {useEffect, useRef, useState} from 'react';
import TextOut from "../../components/scroll/textOut";


const My = () => {
  const [scrollY , setScrollY] = useState(0);

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll',  handleScroll); //clean up
    };
  }, [])

  const handleScroll = ()=>{
    const scrY = window.scrollY;
    setScrollY(scrY);
  }

  return (
    <div className="my-wrap">
      <div className="text-box">
        {scrollY >= 0 && scrollY <= 1 &&
          <>
            <div className="scroll-text">Introduce
              <p className="scroll-down">SCROLL DOWN</p>
            </div>
          </>
        }
        {scrollY > 0  && scrollY < 800 &&
          <TextOut props={
            {
              scrollY,
              value:800,
              step:0,
            }
          }>
            <h1 className="title">Dukgu's</h1>
            <p><br/></p>
            <p>안녕하세요.</p>
            <p>2011년에 IT업체 취업하여 웹디자인 웹 퍼블리셔 현재 프런트 엔드까지 발전해온 12년 차 FE 개발자입니다</p>
            <p>웹 디자이너로 취업하여 회사 스터디를 통해 HTML과 CSS3를 접하면서 재미를 느껴,</p>
            <p>웹 디자인과 웹 퍼블리셔 일을 병행 하던 중, 지인의 추천으로 자바스크립트, 제이쿼리를 배워 웹 퍼블리셔로 전향하게 되었습니다.</p>
          </TextOut>
        }

        {scrollY > 800  && scrollY < 1600 &&
          <TextOut props={
          {
            scrollY,
            value:800,
            step:1,
          }
          }>
            <p>개발자와 소통을 많이 하다 보니 자연스럽게 데이터 바인딩을 접하게 되었고</p>
            <p>시장에 웹 퍼블리셔가 단순 이벤트성 작업뿐만 아닌 데이터 바인딩까지 하는 FE개발자 직군이 생기면서 웹 퍼블리셔 보다 전문직에 가까워질 수 있다는 생각에 사내 스터디를 통해 FE 개발에 관한 지식을 쌓게 되었고</p>
            <p>프로젝트를 통해 시행착오를 겪으면서 데이터, 자바스크립트의 원리를 경험하게 되었습니다.</p>
            <p style={{paddingTop:"20px"}}>프리랜서로 다니던 중 팀장 오퍼를 해주셔서 FE 팀을 맞게 되었고 주 언어를 React로 가져 가게 되었고,</p>
            <p>React에 지식이 없었지만, 강의를 통해 작은 프로젝트 부터 REACT를 적용하게 되었습니다.</p>
            <p>공식문서, 구글링, 강의, chat GPT에 의존하여 혼자 React를 작업하다 보니, 어떤 소스가 좋은 소스인지, 소스 재활용 어떻게 만들어야 하는지, 작업 한 소스가 제대로 만들었는지 끝없이 의심하는 중입니다.</p>
          </TextOut>
        }
        {scrollY > 1600  && scrollY < 2400 &&
          <TextOut props={
            {
              scrollY,
              value:800,
              step:2,
            }
          }>
            <p>IT업체 12년째 근무하면서 책임감이 강한 사람이 일을 잘한다고 생각합니다.</p>
            <p>책임감을 느끼고 프로젝트에 임하는 분들은 불합리한 일이 발생해도, 어떻게든 프로젝트를 끝내기 위해 노력하는 거 같습니다.</p>
            <p>그러다 보니 주변 사람들에게 인정받게 되는 거 같습니다.</p>
            <p>그런 좋은 사람들을 통해 책임감을 배우게 되었고, 내 프로젝트에 책임감을 느끼기 위해 항상 노력하려고 합니다.</p>
            <p><br/></p>
            <p>또 한 번 책임감을 느끼고 다닐 회사를 찾으려 합니다.</p>
            <p>읽어 주셔서 감사합니다.</p>
          </TextOut>
        }
        {scrollY > 2400  && scrollY < 3200 &&
          <TextOut props={
            {
              scrollY,
              value:800,
              step:3,
            }
          }>
            <h1 className="title">History</h1>
          </TextOut>
        }
        {scrollY > 3200  && scrollY < 4000 &&
          <TextOut props={
            {
              scrollY,
              value:800,
              step:4,
            }
          }>
            <div className="history-list">
              <ul>
                <li>
                  <div className="history-hd">
                    <p className="company-name">미플즈</p>
                    <p className="day">2022.01 ~ 2023.07</p>
                  </div>
                  <p className="his-hash">#R&amp;D사업본부 #정직원 #책임 #팀장</p>
                </li>
                <li>
                  <div className="history-hd">
                    <p className="company-name">미플즈</p>
                    <p className="day">2020.08 ~ 2021.12</p>
                  </div>
                  <p className="his-hash">#R&amp;D사업본부 #프리랜서</p>
                </li>
                <li>
                  <div className="history-hd">
                    <p className="company-name">유니드컴즈</p>
                    <p className="day">2019.02 ~ 2020.04</p>
                  </div>
                  <p className="his-hash">#제품개발팀 #서비스파트 #매니저</p>
                </li>
                <li>
                  <div className="history-hd">
                    <p className="company-name">미플즈</p>
                    <p className="day">2017.08 ~ 2018.12</p>
                  </div>
                  <p className="his-hash">#웹플랫폼팀 #선임 #파트장</p>
                </li>
                <li>
                  <div className="history-hd">
                    <p className="company-name">여의도증권미디어그룹</p>
                    <p className="day">2016.11 ~ 2017.05</p>
                  </div>
                  <p className="his-hash">#IT팀 #대리 #팀원</p>
                </li>
                <li>
                  <div className="history-hd">
                    <p className="company-name">비즈밸리</p>
                    <p className="day">2015.03 ~ 2016.02</p>
                  </div>
                  <p className="his-hash">#웹디자인 #퍼블리셔 #주임</p>
                </li>
                <li>
                  <div className="history-hd">
                    <p className="company-name">NCT/NCCJ</p>
                    <p className="day">2011.12 ~ 2014.12</p>
                  </div>
                  <p className="his-hash">#웹디자인 #퍼블리셔 #당근웹솔루션 #주임</p>
                </li>
              </ul>

            </div>
          </TextOut>
        }
      </div>
    </div>
  );
};

export default My;