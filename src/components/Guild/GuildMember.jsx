import React from 'react'
import "./Guild.css"
import Navbar from '../Navbar/Navbar'
import BottomNavbar from '../Navbar/BottomNavbar'
import RightSide from '../Feed/RightSide'
import { useParams } from 'react-router-dom'

const GuildMember = () => {
  const { id } = useParams();
  const dataDefault = [
    { "nickname": "1", "group": "슈퍼hero", "ranking": "금천구", "rate": "900000" },
    { "nickname": "2", "group": "슈퍼hero", "ranking": "마포구", "rate": "930000" },
  ];
  const dataSample = Array(5).fill(dataDefault).flat();
  return (
    <div>
      <Navbar />
      <div className='d-flex w-100 mt-2 mb-2 justify-content-center'>
        <div className='col-12 col-lg-10 d-flex'>
          <div className='col-12 col-lg-8 pe-2 '>
            <div className='w-100 d-flex justify-content-between mb-2'>
              <button className='feed'>길드 정보</button>
              <a href="/create-guild" role='button' className='create-feed'>
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
                <div className='d-flex gap-2'>
                  <a href="#" role='button' className='guild-record col-5'>길드 이력</a>
                  <a href="#" role='button' className='create-team col-5'>팀 생성</a>
                </div>
              </div>
              <div className='col-12 col-lg-9 base-info text-dark p-2'>
                <div className='user-info w-100'>
                    <div className='d-flex'>
                      <div className='title-catalog col-3'>순위</div>
                      <div className='title-catalog col-5'>길드명</div>
                      <div className='title-catalog col-2'>지역</div>
                      <div className='title-catalog col-2'>길드인원</div>
                    </div>
                    <div style={{ cursor: "pointer", height:"300px" }} className='detail'>
                      {dataSample.map((data, idx) => (
                        <div key={idx} className='d-flex text-dark' style={{ background: idx % 2 === 0 ? "" : "#D9D9D9" }} onClick={() => { navigator(`/guild/${idx + 1}`) }}>
                          <div className='one-line col-3 ps-2 pe-2'>{data.nickname}</div>
                          <div className='one-line col-5 ps-2 pe-2'><img src="/assets/guild/guild1.png" className='me-1' height={30} />{data.group}</div>
                          <div className='one-line col-2 ps-2 pe-2 justify-content-center'>{data.ranking}</div>
                          <div className='one-line col-2 ps-2 pe-2 justify-content-center'>{data.rate}</div>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </div>
            <div className='d-flex w-100'>
              <div className='col-4'></div>
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

export default GuildMember