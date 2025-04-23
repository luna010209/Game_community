import React, { useState } from 'react';
import "./FAQ.css";
import Navbar from '../Navbar/Navbar';
import BottomNavbar from '../Navbar/BottomNavbar';
import Ad from '../Ad/Ad';
import { useNavigate, useParams } from 'react-router-dom';

const FAQDetail = () => {
  const {id} = useParams();
  const navigator = useNavigate();
  return (
    <div>
      <Navbar />
      <div className='d-flex w-100 mt-2 mb-2 justify-content-center'>
        <div className='col-12 col-xl-10 d-flex'>
          <div className='col-12 col-xl-8 pe-2 '>
            <div className='w-100 d-flex justify-content-between mb-2'>
              <button className='feed'>FAQ</button>
              <a href="/faq/create" role='button' className='create-feed'>
                <img src="/assets/feed/createfeed.svg" height={30} />FAQ 작성
              </a>
            </div>
            <div>
            <div className='one-post mb-2'>
                <div className='info'>
                  <div style={{fontWeight:"bolder"}}><img src="/assets/mypage/avatar.png" height={40} className='me-2'/>체스트넛</div>
                  <span>2025 - 01 - 02 (목)</span>
                </div>
                <div className='ps-5 pe-5 text-dark mb-2'>
                  킹 오브 파이터 올스타를 이용할 수 있는 최소 사양을 안내 드립니다.<br/><br/>
                  ■ 최소 사양(최소 용량)<br/>
                  - 안드로이드: 갤럭시S5 이상 (CPU 쿼드코어 2.5Ghz, RAM 2GB)<br/>
                  - 애플: 아이폰 6S 이상 (RAM 2GB)<br/><br/>
                  
                  ※ 기기 환경에 따라 차이가 있을 수 있습니다.<br/>
                  ※ 상황에 따라 사양 기준은 변동될 수 있습니다.<br/><br/>
                  
                  안내드린 사양을 충족함에도 게임 이용에 불편이 있으시다면<br/>
                  아래 [1:1 문의하기] 버튼으로 문의를 접수해 주시기 바랍니다.<br/>
                  ...<br/><br/>
                </div>
                <div className='comment'>
                  <div>
                    <span className='me-3'>조회수: 1523</span>
                    <span className='me-2'><a href="#"><i class="fa-solid fa-share"></i> 999</a></span>
                  </div>
                  <div>
                    <a href="#"><i class="fa-solid fa-triangle-exclamation"></i> 리포트</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className="d-flex mb-2 gap-2 pe-2">
              <div className='col-6 other-faq' 
                style={{cursor: id==="1"?"":"pointer"}}
                onClick={()=>{if (id!=="1"){navigator(`/faq/${parseInt(id)-1}`)}}}
              >
                <h4 className='p-2'>이전 FAQ</h4>
                <div className='before-faq'>
                  이전 FAQ
                  없습니다.
                </div>
              </div>
              <div className='col-6 other-faq'
                style={{cursor: id==="10"?"":"pointer"}} //최대 10개
                onClick={()=>{if (id!=="10"){navigator(`/faq/${parseInt(id)+1}`)}}}
              >
                <h4 className='p-2'>다음 FAQ</h4>
                <div className='before-faq'>
                  <div>
                    <h5 className='text-center fw-bold'>길드 가입</h5>
                    <div>
                      <span><strong>작상일:</strong> 2025 - 01 - 02 (목)</span><br/>
                      <span><strong>조회수:</strong> 152</span><br/>
                      <span><strong>작성자:</strong> 마루</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Ad/>
            <Ad/>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  )
}

export default FAQDetail