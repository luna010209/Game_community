import React from 'react'
import "./Guild.css"
import Navbar from '../../components/Navbar/Navbar';
import BottomNavbar from '../../components/Navbar/BottomNavbar';
import RightSide from '../../components/Side/RightSide1';
import { useParams } from 'react-router-dom'

const GuildDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div className='d-flex w-100 mt-2 mb-2 justify-content-center'>
        <div className='col-12 col-lg-10 d-flex'>
          <div className='col-12 col-lg-8 pe-2 '>
            <div className='w-100 d-flex justify-content-between mb-2'>
              <button className='feed'>길드 정보</button>
              <a href="/guild/create" role='button' className='create-feed'>
                <img src="/assets/feed/createfeed.svg" height={30} />길드 작성
              </a>
            </div>
            <div className='guild-info w-100'>
              <div className='d-none d-lg-block col-3 p-2'>
                <img src="/assets/guild/guild1.png" className='border border-1 border-dark rounded mb-2 w-50' /><br />
                <span className='level'>LV.72</span><br />
                <span style={{ fontSize: "20px", fontWeight: "bolder", color: "black" }}>CHESTNUT</span>
                <div>
                  <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar">20%</div>
                  </div>
                  <p className='text-dark mt-1'>23,130/132,000</p>
                </div>
                <a href={`/guild/${id}/member`} style={{color:"rgba(4, 26, 44, 0.8)", fontWeight:"bolder", textDecoration:"underline"}}>길드 인원</a>
              </div>
              <div className='col-12 col-lg-9 base-info text-dark p-2'>
                <div className='d-flex justify-content-between mb-2'>
                  <span>길드장</span>
                  <strong style={{color:"#2B0A04"}}>까사노빈</strong>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                  <span>길드원</span>
                  <strong style={{color:"#2B0A04"}}>28/30</strong>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                  <span>승률</span>
                  <strong style={{color:"#2B0A04"}}>45% 11전 5승 6패 </strong>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                  <span>기본주소</span>
                  <strong style={{color:"#2B0A04"}}>서울 금천구 시흥동 992-6</strong>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                  <span>자세 주소</span>
                  <strong style={{color:"#2B0A04"}}>위드비엠 2층 카페체스트넛</strong>
                </div>
                <div className='mb-3'>
                  <span>묘사</span>
                  <div className='describe'>안녕하세요!</div>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                  <button type='button' className='guild-out'>탈퇴</button>
                  <button type='button' className='guild-in'>가입</button>
                </div>
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

export default GuildDetail