import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./MyPage.css";
import Navbar from '../../components/Navbar/Navbar';

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [spaceHeight, setSpaceHeight] = useState(0);
  const contentRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/session-check', { withCredentials: true })
      .then(() => {
        // 로그인된 사용자 정보는 localStorage나 별도 API로 불러오기
        const saved = JSON.parse(localStorage.getItem("loginUser"));
        setUserInfo(saved);
      })
      .catch(() => {
        navigate('/login');
      });

    const height = contentRef.current?.offsetHeight || 0;
    setSpaceHeight(height / 2 + 20);
  }, []);

  if (!userInfo) return null; // 로딩 중 or 인증 실패로 redirect 중이면 렌더링 X

  const { userNm, niknm, userPoint } = userInfo;

  return (
    <div style={{ marginBottom: spaceHeight }}>
      <div className='position-relative'>
        <Navbar />
        <div className='content' ref={contentRef}>
          <div className='col-12 col-lg-10 content-inside position-relative'>
            <div className='d-none d-lg-flex col-12'>
              <div className='col-1'></div>
              <div className='position-relative col-2'>
                <img src="/assets/mypage/avatar.png" className='avatar w-100' />
                <div className='edit'>
                  <a href="#"><img src="/assets/mypage/edit.png" className='col-2' /></a>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-9 position-absolute top-50 p-3'>
              <div className='text'>
                <div>
                  <div className='d-flex'>
                    <h2 className='fw-bold me-2'>{userNm}님</h2>
                    <button className='inbox'><b>쪽지함</b></button>
                  </div>
                  <div className='ms-5'>
                    닉네임: <strong>{niknm}</strong><br />
                    포인트: <strong>{userPoint}P</strong><br />
                    길드: <strong>--없음--</strong>
                  </div>
                </div>
                <div className='text-end'>
                  <a href="#" className='path'>길드 찾기</a>
                  <a href="#" className='path'>길드 만들기</a>
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

export default MyPage;
