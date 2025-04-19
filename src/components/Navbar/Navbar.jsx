import React, { useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.png';

const Navbar = () => {
  const [down, setDown] = useState("d-none");
  const toggle = (e)=>{
    e.preventDefault();
    if (down==="d-none") setDown("");
    else setDown("d-none");
  }
  return (
      <div>
        <div className='position-relative d-flex justify-content-center align-items-center flex-wrap p-2' style={{backgroundColor:"rgba(4, 26, 44, 0.8)"}}>
            <div className='d-flex justify-content-between col-12 col-lg-10'>
              <div className='d-none d-lg-flex nav-menu col-3'>
                <li><i class="fa-solid fa-language me-2"></i>한국어</li>
              </div>
              <img src="/assets/logo.png" height={60}/>
              <div className='d-none d-lg-flex nav-menu col-3 justify-content-end'>
                <li><a href="/my-page">내 정보</a></li>
                <li className='fw-bold'><a href="#">로그아웃</a></li>
              </div>
              <div className='align-items-center d-flex d-lg-none'>
                <button className="toggler" type="button" onClick={toggle}>
                  <img src="/assets/toggler.png" height={30}/>
                </button>
              </div>
            </div>
            <div className='nav-menu justify-content-between col-12 col-lg-6 mt-3 d-none d-lg-flex'>
                <li><a href="/feed">피드</a></li>
                <li><a href="/user-info">유저정보</a></li>
                <li><a href="/guild">길드</a></li>
                <li><a href="/announce">공지사항</a></li>
                <li><a href="/faq">FAQ</a></li>
            </div>
            <div className={`drop-down d-lg-none p-2 ${down}`}>
                <li><a href="/feed"><i className="fa-solid fa-square-rss me-2"></i>피드</a></li>
                <li><a href="/user-info"><i className="fa-solid fa-users me-2"></i>유저정보</a></li>
                <li><a href="/guild">길드</a></li>
                <li><a href="/announce">공지사항</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/my-page">내 정보</a></li>
                <li><a href="#">로그아웃</a></li>
            </div>
        </div>
        <div className='text-center'><img src="/assets/bg.png" className='col-12 col-lg-10 img-fluid'/></div>
      </div>
    )
}

export default Navbar