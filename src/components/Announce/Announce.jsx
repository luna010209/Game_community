import React, { useState } from 'react'
import "./Announce.css"
import Navbar_Nonlogin from '../Navbar/Navbar_Nonlogin'
import BottomNavbar from '../Navbar/BottomNavbar'
import RightSide from '../Side/RightSide2'
import RightSide_Nonlogin from '../Side/RightSide_Nonlogin2'

const Announce = () => {
  const [announce, setAnnounce] = useState(true);
  const [appear, setAppear]= useState("");
  const handleClose = (e)=>{
    e.preventDefault();
    setAnnounce(false);
    setAppear("d-none");
  }
  return (
    <div>
      <div className='position-relative'>
        <Navbar_Nonlogin />
        <div className={`w-100 d-flex position-fixed ${appear}`} style={{top:"15%", left:"50%"}}>
          <div className='d-none d-lg-block col-4 pop-up'>
            <div className='popup-title'>
              <h4 className='fw-bold text-dark'>정기점검 공지사항</h4>
            </div>
            <div className='popup-content'>
              <div className='w-100 text-center pt-3 pb-3'>
                <img src="/assets/announce/setting.jpg" height={200} />
              </div>
              <div>
                안녕하세요. 체스트넛입니다.<br />
                1/2(목) lolstargram 정기점검이 진행되어 안내 드립니다. (PC/모바일 점검 시간 동일)<br /><br />

                ■ 정기점검 내용<br /><br />

                ※ 점검 내용과 시간은 진행 상황에 따라 달라질 수 있습니다.<br /><br />

                감사합니다.<br />
              </div>
            </div>
            <div className='d-flex w-100 justify-content-between'>
              <div className='text-dark d-flex align-items-center gap-2 disappear'>
                <input type="checkbox" id='nomore'/>
                <label htmlFor="nomore" style={{cursor:"pointer"}}>오늘 하루동안 보지 않기</label>
              </div>
              <a href="#" role='button' onClick={handleClose} className='text-dark fw-bold btn btn-outline-secondary'>닫기</a>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex w-100 mt-2 mb-2 justify-content-center' style={{ opacity: announce ? 0.3 : 1 }}>
        <div className='col-12 col-lg-10 d-flex'>
          <div className='col-12 col-lg-8 ps-2 pe-2'>
            <div className='announce-content'>
              <div className='one-post mb-2'>
                <div className='info'>
                  <div style={{ fontWeight: "bolder" }}><img src="/assets/mypage/avatar.png" height={40} className='me-2' />체스트넛</div>
                  <span>2025 - 01 - 02 (목)</span>
                </div>
                <div className='ps-5 pe-5 text-dark mb-2'>
                  안녕하세요. 체스트넛입니다.<br />
                  1/2(목) lolstargram 정기점검이 진행되어 안내 드립니다. (PC/모바일 점검 시간 동일)<br /><br />

                  ■ 정기점검 내용<br /><br />

                  ※ 점검 내용과 시간은 진행 상황에 따라 달라질 수 있습니다.<br /><br />

                  감사합니다.
                </div>
                <div className='comment'>
                  <div>
                    <span className='me-2'><a href="#"><i class="fa-regular fa-heart"></i> 999</a></span>
                    <span><a href="#"><i class="fa-regular fa-comment"></i> 999</a></span>
                  </div>
                  <div><a href="#"><i class="fa-solid fa-triangle-exclamation"></i> 리포트</a></div>
                </div>
              </div>
              <div className='one-post mb-2'>
                <div className='info'>
                  <div style={{ fontWeight: "bolder" }}><img src="/assets/mypage/avatar.png" height={40} className='me-2' />체스트넛</div>
                  <span>2025 - 01 - 02 (목)</span>
                </div>
                <div className='ps-5 pe-5 text-dark mb-2'>
                  게임 재미있게 하자!<br />
                  <div className='post-image mt-1 mb-1'>
                    <img src="/assets/feed/post1.jpg" height={350} className='me-2' />
                    <img src="/assets/feed/post2.jpg" height={350} className='me-2' />
                    <img src="/assets/feed/post3.jpg" height={350} className='me-2' />
                  </div>
                </div>
                <div className='comment'>
                  <div>
                    <span className='me-2'><a href="#"><i class="fa-regular fa-heart"></i> 999</a></span>
                    <span><a href="#"><i class="fa-regular fa-comment"></i> 999</a></span>
                  </div>
                  <div><a href="#"><i class="fa-solid fa-triangle-exclamation"></i> 리포트</a></div>
                </div>
              </div>
              <div className='one-post mb-2'>
                <div className='info'>
                  <div style={{ fontWeight: "bolder" }}><img src="/assets/mypage/avatar.png" height={40} className='me-2' />체스트넛</div>
                  <span>2025 - 01 - 02 (목)</span>
                </div>
                <div className='ps-5 pe-5 text-dark mb-2'>
                  게임 재미있게 하자!<br />
                  <div className='post-image mt-1 mb-1'>
                    <img src="/assets/feed/post1.jpg" height={350} />
                  </div>
                </div>
                <div className='comment'>
                  <div>
                    <span className='me-2'><a href="#"><i class="fa-regular fa-heart"></i> 999</a></span>
                    <span><a href="#"><i class="fa-regular fa-comment"></i> 999</a></span>
                  </div>
                  <div><a href="#"><i class="fa-solid fa-triangle-exclamation"></i> 리포트</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <RightSide_Nonlogin />
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  )
}

export default Announce