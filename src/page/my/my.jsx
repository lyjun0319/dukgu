import React, {useEffect} from 'react';


const My = () => {

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    console.log("handleScroll");

  }
  return (
    <div className="my-wrap">
      <div className="text-box">
        <h1 className="title">
          Dukgu's
        </h1>
        <div className="sub">
          <p>안녕하세요.</p>
          <p>2011년에 IT업체 취업하여 웹디자인 웹 퍼블리셔 현재 프런트 엔드까지 발전해온 12년 차 FE 개발자입니다</p>
        </div>
      </div>
      <div className="text-box">
        <div className="sub">
          <p>웹 디자이너로 취업하여 회사 스터디를 통해 HTML과 CSS3를 접하면서 재미를 느껴,</p>
          <p>웹 디자인과 웹 퍼블리셔 일을 병행 하던 중, 지인의 추천으로 자바스크립트, 제이쿼리를 배워 웹 퍼블리셔로 전향하게 되었습니다.</p>
        </div>
        <div className="sub">
          <p>개발자와 소통을 많이 하다 보니 자연스럽게 데이터 바인딩을 접하게 되었고, 시장에 웹 퍼블리셔가 단순 이벤트성 작업뿐만 아닌 데이터 바인딩까지 하는 FE개발자 직군이 생기면서 웹 퍼블리셔 보다 전문직에 가까워질 수 있다는 생각에 사내 스터디를 통해 FE 개발에 관한 지식을 쌓게 되었고, 프로젝트를 통해 시행착오를 겪으면서 데이터, 자바스크립트의 원리를 경험하게 되었습니다.</p>
        </div>
        <div className="sub">
          <p>프리랜서로 다니던 중 팀장 오퍼를 해주셔서 FE 팀을 맞게 되었고 주 언어를 React로 가져 가게 되었고, React에 지식이 없었지만, 강의를 통해 작은 프로젝트 부터 REACT를 적용하게 되었습니다. 공식문서, 구글링, 강의, chat GPT에 의존하여 혼자 React를 작업하다 보니, 어떤 소스가 좋은 소스인지, 소스 재활용 어떻게 만들어야 하는지, 작업 한 소스가 제대로 만들었는지 끝없이 의심하는 중입니다.</p>
        </div>
      </div>
      <div className="text-box">
        <div className="sub">
          <p>IT업체 12년째 근무하면서 책임감이 강한 사람이 일을 잘한다고 생각합니다.</p>
          <p>책임감을 느끼고 프로젝트에 임하는 분들은 불합리한 일이 발생해도, 어떻게든 프로젝트를 끝내기 위해 노력하는 거 같습니다.</p>
          <p>그러다 보니 주변 사람들에게 인정받게 되는 거 같습니다.</p>
          <p>그런 좋은 사람들을 통해 책임감을 배우게 되었고, 내 프로젝트에 책임감을 느끼기 위해 항상 노력하려고 합니다.</p>
        </div>
      </div>
      <div className="text-box">
        <div className="sub">
          <p>또 한 번 책임감을 느끼고 다닐 회사를 찾으려 합니다.</p>
          <p>읽어 주셔서 감사합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default My;