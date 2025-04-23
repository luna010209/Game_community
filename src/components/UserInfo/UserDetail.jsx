import React, { useEffect, useRef, useState } from 'react'
import "./UserInfo.css"
import Navbar from '../Navbar/Navbar'
import BottomNavbar from '../Navbar/BottomNavbar'
import RightSide from '../Side/RightSide1'
import Graph from './Graph'
import BattleDetail from './BattleDetail'

const UserDetail = () => {
  const divRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.offsetHeight - 110);
    }
  }, []);

  const datasets = [
    { "isWin": true, "time": "3일 전", "ranking": "2위", "user": "사자" },
    { "isWin": false, "time": "5일 전", "ranking": "9위", "user": "사자" },
    { "isWin": true, "time": "10일 전", "ranking": "1위", "user": "사자" },
    { "isWin": true, "time": "10일 전", "ranking": "1위", "user": "사자" },
  ]

  return (
    <div>
      <Navbar />
      <div className='d-flex w-100 mt-2 mb-2 justify-content-center'>
        <div className='col-12 col-xl-10 d-flex'>
          <div className='col-12 col-xl-8 pe-2 '>
            <div className='w-100 d-flex justify-content-between mb-2'>
              <button className='feed'>유저정보</button>
            </div>
            <div className='user-area'>
              <div className='d-flex justify-content-between mb-3'>
                <div className='p-4 d-flex gap-4 align-items-center'>
                  <img src="/assets/mypage/avatar.png" height={120} style={{ borderRadius: "30px" }} />
                  <div>
                    <h5 className='text-dark'>사자</h5>
                    <h5 className='text-secondary'>#반레온</h5>
                    <button className='update-button'>전적 갱신</button>
                  </div>
                </div>
                <div className='text-center'>
                  <div style={{ color: "#8F8F8F" }}>최근 승률</div>
                  <Graph />
                </div>
              </div>
              <div className='data-area'>
                {datasets.map((data, idx) => (
                  <div key={idx} className='mb-2'>
                    <div className='one-result'>
                      <div className='col-11 result-record' style={{ backgroundColor: data.isWin ? "rgba(63, 100, 155, 0.3)" : "rgba(182, 182, 89, 0.2)" }}>
                        <div className='col-1 d-flex align-items-stretch flex-wrap'>
                          <div className='w-100'>
                            <strong className='text-dark'>랭킹</strong><br />
                            <span className='text-secondary'>{data.time}</span>
                          </div>
                          <div className='d-flex align-items-end'><strong className='text-secondary'>{data.isWin ? "승리" : "패패"}</strong></div>
                        </div>
                        <div className='col-6 d-flex align-items-stretch flex-wrap'>
                          <div className='d-flex gap-4'>
                            <div className='position-relative' style={{ height: "50px", width: "50px" }}>
                              <img src="/assets/info/icon1.png" height={50} style={{ borderRadius: "50%" }} />
                              <span className='img-number'>15</span>
                            </div>
                            <div className=''>
                              <div className='gap-1'>
                                <img src="/assets/info/treasure1.png" height={25} />
                                <img src="/assets/info/treasure1.png" height={25} />
                              </div>
                              <div className=''>
                                <img src="/assets/info/treasure1.png" height={25} />
                                <img src="/assets/info/treasure2.png" height={25} />
                              </div>
                            </div>
                            <div>
                              <strong className='fs-5 text-dark'>2 / 0 / 5</strong><br />
                              <span className='text-secondary'>완벽</span>
                            </div>
                          </div>
                          <div className='d-flex gap-3 mt-3 align-items-center'>
                            <div className='d-flex gap-1'>
                              <img src="/assets/info/weapon1.jpg" height={25} style={{ borderRadius: "5px" }} />
                              <img src="/assets/info/weapon1.jpg" height={25} style={{ borderRadius: "5px" }} />
                              <img src="/assets/info/weapon1.jpg" height={25} style={{ borderRadius: "5px" }} />
                              <img src="/assets/info/weapon1.jpg" height={25} style={{ borderRadius: "5px" }} />
                              <img src="/assets/info/weapon2.jpg" height={25} style={{ borderRadius: "5px" }} />
                            </div>
                            <div className='d-flex gap-1'>
                              <div style={{ borderRadius: "40px", backgroundColor: "#878787", padding: "0px 10px", fontSize: "13px", alignContent: "center" }}>2nd</div>
                              <div style={{ borderRadius: "40px", backgroundColor: "#B8B8B8", padding: "1px 10px", fontSize: "13px", alignContent: "center" }}>Late night</div>
                            </div>
                          </div>
                        </div>
                        <div className='col-2 inside-text'>
                          <span className='text-dark'>{data.ranking}</span><br />
                          <span>P/Kill 35%</span><br />
                          <span>CS 231 (7.8)</span><br />
                          <span>Silver 4</span><br />
                        </div>
                        <div className='col-3 d-flex justify-content-between'>
                          <div>
                            <div className='d-flex align-items-center gap-1 text-secondary mb-1'><img src="/assets/mypage/avatar.png" height={25} style={{ borderRadius: "5px" }} />사나</div>
                            <div className='d-flex align-items-center gap-1 text-secondary mb-1'><img src="/assets/mypage/avatar.png" height={25} style={{ borderRadius: "5px" }} />사나</div>
                            <div className='d-flex align-items-center gap-1 text-secondary mb-1'><img src="/assets/mypage/avatar.png" height={25} style={{ borderRadius: "5px" }} />사나</div>
                            <div className='d-flex align-items-center gap-1 text-secondary mb-1'><img src="/assets/mypage/avatar.png" height={25} style={{ borderRadius: "5px" }} />사나</div>
                          </div>
                          <div>
                            <div className='d-flex align-items-center gap-1 text-secondary mb-1'><img src="/assets/mypage/avatar.png" height={25} style={{ borderRadius: "5px" }} />사나</div>
                            <div className='d-flex align-items-center gap-1 text-secondary mb-1'><img src="/assets/mypage/avatar.png" height={25} style={{ borderRadius: "5px" }} />사나</div>
                            <div className='d-flex align-items-center gap-1 text-secondary mb-1'><img src="/assets/mypage/avatar.png" height={25} style={{ borderRadius: "5px" }} />사나</div>
                            <div className='d-flex align-items-center gap-1 text-secondary mb-1'><img src="/assets/mypage/avatar.png" height={25} style={{ borderRadius: "5px" }} />사나</div>
                          </div>
                        </div>
                      </div>
                      <div className='col-1 more' style={{ backgroundColor: data.isWin ? "rgba(63, 100, 155, 1)" : "rgba(182, 182, 89, 1)" }}>
                        <u>더 보기</u>
                      </div>
                    </div>
                    <div>
                      <BattleDetail/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='col-4' ref={divRef}>
            <RightSide />
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  )
}

export default UserDetail