import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import logo from '/assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await axios.post('/api/logout', {}, { withCredentials: true }); // 서버 세션 무효화
    localStorage.clear(); // 사용자 정보 삭제
    navigate('/login'); // 로그인 페이지로 이동
  } catch (error) {
    console.error("로그아웃 실패:", error);
    alert("로그아웃 중 문제가 발생했습니다.");
  }
};
return (
    <div>
      <div className='position-relative d-flex justify-content-center align-items-center flex-wrap p-2' style={{backgroundColor:"rgba(4, 26, 44, 0.8)"}}>
          <div className='d-flex justify-content-between col-12 col-lg-10'>
            <div className='d-none d-lg-flex nav-menu col-3'>
              <li><i class="fa-solid fa-language me-2"></i>한국어</li>
            </div>
            <img src="/assets/logo.png" height={60}/>
            <div className='d-none d-lg-flex nav-menu col-3 justify-content-end'>
              <li><Link to="/my-page">내 정보</Link></li>
              <li className='fw-bold'><a href="#" onClick={handleLogout}>로그아웃</a></li>
            </div>
            <div className='align-items-center d-flex d-lg-none'>
              <button className="toggler" type="button">
                <img src="/assets/toggler.png" height={50}/>
              </button>
            </div>
          </div>
          <div className='nav-menu justify-content-between col-12 col-lg-6 mt-3 d-none d-lg-flex'>
              <li><Link to="/feed">피드</Link></li>
              <li><Link to="/userinfo">유저정보</Link></li>
              <li><Link to="/guild">길드</Link></li>
              <li><Link to="/announce">공지사항</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
          </div>
          <div className='drop-down d-lg-none p-2'>
              <li><Link to="/feed"><i className="fa-solid fa-square-rss me-2"></i>피드</Link></li>
              <li><Link to="/userinfo"><i className="fa-solid fa-users me-2"></i>유저정보</Link></li>
              <li><Link to="/guild">길드</Link></li>
              <li><Link to="/announce">공지사항</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/my-page">내 정보</Link></li>
              <li><a href="#" onClick={handleLogout}>로그아웃</a></li>
          </div>
      </div>
      <div className='text-center'><img src="/assets/bg.png" className='col-12 col-xl-10 img-fluid'/></div>
    </div>
  )
}

export default Navbar