import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get("/api/session-check", { withCredentials: true })
      .then(() => setIsLoggedIn(true))
      .catch((err) => {
        if (err.response?.status === 401) {
          setIsLoggedIn(false); // 인증 안됨: 로그아웃 상태
        } else {
          console.error('알 수 없는 오류:', err);
        }
      });
  }, []);

  const handleLogout = () => {
    axios.post('/api/logout', {}, { withCredentials: true })
      .then(() => {
        setIsLoggedIn(false);
        window.location.href = '/'; // 홈으로 이동
      })
      .catch(err => {
        console.error('로그아웃 실패:', err);
      });
  };

  const [announce, setAnnounce] = useState(true);
  const [appear, setAppear]= useState("");
  const handleClose = (e)=> {
    e.preventDefault();
    setAnnounce(false);
    setAppear("d-none");
  }

  return (
    <div className='position-relative'>
      <div className={`w-100 d-flex position-absolute ${appear}`} style={{ top: "5%", left: "60%" }}>
        <div className='d-none d-xl-block col-4 pop-up'>
          <div className='popup-title'>
            <h4 className='fw-bold text-dark'>정기점검 공지사항</h4>
          </div>
          <div className='popup-content'>
            <div className='w-100 text-center pt-3 pb-3'>
              <img src="/assets/announce/setting.jpg" height={200} />
            </div>
            <div>
              안녕하세요. 체스트넛입니다.<br />
              1/2(목) lolstargram 정기점검이 진행되어 안내 드립니다. (PC/모바일 점검 시간 동일)<br /><br />
              ■ 정기점검 내용<br /><br />
              ※ 점검 내용과 시간은 진행 상황에 따라 달라질 수 있습니다.<br /><br />
              감사합니다.<br />
            </div>
          </div>
          <div className='d-flex w-100 justify-content-between'>
            <div className='text-dark d-flex align-items-center gap-2 disappear'>
              <input type="checkbox" id='nomore' />
              <label htmlFor="nomore" style={{ cursor: "pointer" }}>오늘 하루동안 보지 않기</label>
            </div>
            <a href="#" role='button' onClick={handleClose} className='text-dark fw-bold btn btn-outline-secondary'>닫기</a>
          </div>
        </div>
      </div>

      <div className='main-area'>
        <div className='d-flex position-fixed w-100 justify-content-between align-items-center p-3'>
          <div className='d-none d-xl-flex col-2'>
            <img src="/assets/logo.png" height={60} />
          </div>
          <div className='nav-menu col-12 col-xl-6 justify-content-between'>
            <li><a href="/feed">피드</a></li>
            <li><a href="/userinfo">유저정보</a></li>
            <li><a href="/guild">길드</a></li>
            <li><a href="/announce">공지사항</a></li>
            <li><a href="/faq">FAQ</a></li>
          </div>
          <div className='nav-menu d-none d-xl-flex col-2 justify-content-end'>
            <li><i className="fa-solid fa-language me-2"></i>한국어</li>
            {
              isLoggedIn ? (
                <li><a href="#" onClick={handleLogout}>로그아웃</a></li>
              ) : (
                <>
                  <li><a href="/signup/terms">회원가입</a></li>
                  <li><a href="/login">로그인</a></li>
                </>
              )
            }
          </div>
        </div>

        <img src="/assets/home/home.jpg" className='col-12 bg-img' />
        <img src="/assets/logo.png" className='position-absolute end-50 bottom-50 moving-img col-2' />
      </div>

      <div className='text-center p-5' style={{ backgroundColor: "rgba(4, 26, 44, 0.8)" }}>
        <img src="/assets/home/lsg.png" className='mt-5 mb-5' /><br /><br />
        <h1 className='mb-5'>🌟 환영합니다! 함께하는 소중한 공간 🌟</h1>
        <p className='mb-5'>안녕하세요! 저희 커뮤니티에 오신 것을 진심으로 환영합니다. 😊<br />
          이곳은 서로의 경험을 나누고, 배움을 공유하며, 즐거운 소통을 할 수 있는 공간입니다. <br />
          👥 소통과 교류 – 자유롭게 의견을 나누고 공감하는 커뮤니티<br />
          📚 정보와 지식 – 다양한 주제의 유용한 정보 공유<br />
          🎉 함께 성장 – 서로 도우며 더 나은 미래를 만들어 가는 곳<br />
          새로운 분들도 언제든 환영하며, 여러분의 이야기를 들려주세요!<br />
          함께 따뜻하고 유익한 공간을 만들어가요. 💙<br />
          지금 바로 첫 인사를 남겨보세요! 😉</p>
      </div>
    </div>
  );
};

export default Home;
