import React, { useEffect, useRef, useState } from 'react'
import "./MyPage.css";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const contentRef = useRef();
  const [spaceHeight, setSpaceHeight] = useState(0);
  useEffect(()=>{
    const height = contentRef.current?.offsetHeight || 0;
    setSpaceHeight(height/2+20);
  }, []);

  const navigator = useNavigate();
  return (
    <div style={{marginBottom: spaceHeight}}>
      <div className='position-relative'>
        <Navbar />
        <div className='content' ref={contentRef}>
          <div className='col-12 col-xl-10 content-inside position-relative'>
            <div className='d-none d-xl-flex col-12'>
              <div className='col-1'></div>
              <div className='position-relative col-2'>
                <img src="/assets/mypage/avatar.png" className='avatar w-100'/>
                <div className='edit'>
                  <a href="#"><img src="/assets/mypage/edit.png" className='col-2'/></a>
                </div>
              </div>
            </div>
            <div className='col-12 col-xl-9 position-absolute top-50 p-3'>
              <div className='text'>
                <div>
                  <div className='d-flex'>
                    <h2 className='fw-bold me-2'>체스트넛님</h2>
                    <button className='inbox' type='button' onClick={()=>{navigator("/my-page/note")}}><b>쪽지함</b></button>
                  </div>
                  <div className='ms-5'>
                      랭크: <strong>1위</strong><br/>
                      포인트: <strong>0P</strong><br/>
                      길드: <strong>--없음--</strong>
                  </div>
                </div>
                <div className='text-end'>
                  <a href="/guild" className='path'>길드 찾기</a>
                  <a href="/guild/create" className='path'>길드 만들기</a>
                  <a href="#" className='path'>길드관리</a>
                  <a href="#" className='path'>후원 구독</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage