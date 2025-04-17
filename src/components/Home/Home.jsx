import React from 'react'
import './Home.css'
// import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div>
      <div className='main-area'>
        <div className='d-flex position-fixed w-100 justify-content-between align-items-center p-3'>
          <div className='d-none d-lg-flex col-2'><img src="/assets/logo.png" height={60}/></div>
          <div className='nav-menu col-12 col-lg-6 justify-content-between'>
            <li><a href="/feed">피드</a></li>
            <li><a href="/user-info">유저정보</a></li>
            <li><a href="/guild">길드</a></li>
            <li>공지사항</li>
            <li>FAQ</li>
          </div>
          <div className='nav-menu d-none d-lg-flex col-2 justify-content-end'>
            <li><i class="fa-solid fa-language me-2"></i>한국어</li>
            <li><a href="/terms">회원가입</a></li>
            <li><a href="/login">로그인</a></li>
          </div>
        </div>
        <img src="/assets/home/home.jpg" className='col-12 bg-img'/>  
        <img src="/assets/logo.png" className='position-absolute end-50 bottom-50 moving-img col-2' />
        
      </div>
      <div className='text-center p-5' style={{backgroundColor: "rgba(4, 26, 44, 0.8)"}}>
        <img src="/assets/home/lsg.png" className='mt-5 mb-5' /><br /><br />
        <h1 className='mb-5'>🌟 환영합니다! 함께하는 소중한 공간 🌟</h1>
        <p className='mb-5'>안녕하세요! 저희 커뮤니티에 오신 것을 진심으로 환영합니다. 😊<br />
        이곳은 서로의 경험을 나누고, 배움을 공유하며, 즐거운 소통을 할 수 있는 공간입니다. <br/>
        👥 소통과 교류 – 자유롭게 의견을 나누고 공감하는 커뮤니티<br/>
        📚 정보와 지식 – 다양한 주제의 유용한 정보 공유<br/>
        🎉 함께 성장 – 서로 도우며 더 나은 미래를 만들어 가는 곳<br/>
        새로운 분들도 언제든 환영하며, 여러분의 이야기를 들려주세요!<br/>
        함께 따뜻하고 유익한 공간을 만들어가요. 💙<br/>
        지금 바로 첫 인사를 남겨보세요! 😉</p>
      </div>
    </div>
    
    
  )
}

export default Home