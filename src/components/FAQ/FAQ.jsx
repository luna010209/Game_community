import React, { useState } from 'react';
import "./FAQ.css";
import Navbar from '../Navbar/Navbar';
import BottomNavbar from '../Navbar/BottomNavbar';
import RightSide from '../Side/RightSide1';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const btns = ["전체", "길드", "사용법", "사용자"]
  const [activeIdx, setActiveIdx] = useState(0);

  const data = [
    { "type": "사용법", "question": "계정 연동 방법", "user": "체스트넛", "share": "999", "view": "1523", "date": "5일전" },
    { "type": "길드", "question": "길드 가입", "user": "마루", "share": "999", "view": "152", "date": "10일전" },
    { "type": "사용자", "question": "안녕", "user": "체스트넛", "share": "999", "view": "1503", "date": "15일전" },
  ]
  const navigator = useNavigate();

  return (
    <div>
      <Navbar />
      <div className='d-flex w-100 mt-2 mb-2 justify-content-center'>
        <div className='col-12 col-xl-10 d-flex'>
          <div className='col-12 col-xl-8 pe-2 '>
            <div className='w-100 d-flex justify-content-between mb-3'>
              <button className='feed'>FAQ</button>
            </div>
            <div className='d-flex gap-2 mb-3'>
              {btns.map((btn, idx) => (
                <button
                  key={idx}
                  className={`type-faq ${activeIdx === idx ? "text-white" : ""}`}
                  style={{ backgroundColor: activeIdx === idx ? "#7E7E7E" : "#D9D9D9" }}
                  type='button'
                  onClick={() => { setActiveIdx(idx) }}
                >
                  {btn}
                </button>
              ))}
            </div>
            <div className='w-100 d-flex justify-content-between align-items-center mb-2'>
              <h5 className='text-dark fw-bold'>자주 묻는 질문(FAQ)</h5>
              <a href="/faq/create" role='button' className='create-feed'>
                <img src="/assets/feed/createfeed.svg" height={30} />FAQ 작성
              </a>
            </div>
            <div className='list-faq'>
              <div className='d-flex gap-2 w-100 fw-bold'>
                <div className='title-faq' style={{ width: "10%" }}>구분</div>
                <div className='title-faq' style={{ width: "40%" }}>질문</div>
                <div className='title-faq' style={{ width: "20%" }}>작성자</div>
                <div className='title-faq' style={{ width: "10%" }}>추천</div>
                <div className='title-faq' style={{ width: "10%" }}>조회수</div>
                <div className='title-faq' style={{ width: "10%" }}>작성일</div>
              </div>
              <div className='w-100 scroll-faq'>
                {data.map((d,idx) => (
                  <div key={idx} className='d-flex gap-2 w-100' style={{cursor:"pointer"}}
                  onClick={()=>{navigator(`/faq/${idx+1}`)}}>
                    <div className='data-faq text-dark' style={{ width: "10%" }}>{d.type}</div>
                    <div className='data-faq text-dark' style={{ width: "40%" }}>{d.question}</div>
                    <div className='data-faq text-secondary' style={{ width: "20%" }}>{d.user}</div>
                    <div className='data-faq text-secondary' style={{ width: "10%" }}>{d.share}</div>
                    <div className='data-faq text-secondary' style={{ width: "10%" }}>{d.view}</div>
                    <div className='data-faq text-secondary' style={{ width: "10%" }}>{d.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='col-4'>
            <RightSide />
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  )
}

export default FAQ