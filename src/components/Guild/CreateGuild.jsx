import React, { useEffect, useRef, useState } from 'react'
import "./Guild.css";
import Navbar from '../Navbar/Navbar';
import BottomNavbar from '../Navbar/BottomNavbar';
import RightSide from '../Side/RightSide1';
import { useNavigate } from 'react-router-dom';

const CreateGuild = () => {
  const [addCode, setAddCode]= useState("");
  const [basicAdd, setBasicAdd]= useState("");
  const [detailAdd, setDetailAdd]= useState("");
  return (
    <div>
      <Navbar />
      <div className='d-flex w-100 mt-2 mb-2 justify-content-center'>
        <div className='col-12 col-lg-10 d-flex'>
          <div className='col-12 col-lg-8 pe-2 '>
            <div className='w-100 d-flex justify-content-between mb-2'>
              <button className='feed'>길드 작성</button>
              <a href="/guild" role='button' className='create-feed'>
                <i className="fa-solid fa-backward me-2"></i> 뒤돌아가기
              </a>
            </div>
            <div className='create-guild w-100 p-2'>
              <div className='col-6 p-2'>
                <div className='display-box mb-2'>
                  <i className="fa-solid fa-users me-2"></i>
                  <input type="text" placeholder='길드명' />
                </div>
                <div className='display-box mb-2'>
                  <i className="fa-solid fa-mobile me-2"></i>
                  <input type="text" placeholder='휴대전화번호' />
                </div>
                <div className='display-box mb-2'>
                  <i className="fa-solid fa-phone me-2"></i>
                  <input type="text" placeholder='전화번호' />
                </div>
                <div className='display-box mb-2'>
                  <textarea rows={5} placeholder='길드를 묘사해주세요.' />
                </div>
              </div>
              <div className='col-6 p-2'>
                <div className='address-info ps-3 mb-2'><h5 className='fw-bold'><i className="fa-solid fa-location-dot me-2 text-dark"></i>주소</h5></div>
                <div className='dis flex-wrap'>
                  <div className='w-100 mb-2 d-flex'>
                    <div className='display-box col-8'>
                      <input type="text" placeholder='도로명 기본주소' disabled
                        value={addCode} onChange={e => { setAddCode(e.target.value) }} />
                    </div>
                    <div className='col-4 ps-2'><button className='w-100 button-code'>우편번호검색</button></div>
                  </div>
                  <div className='w-100 display-box mb-2'>
                    <input type="text" placeholder='기본주소' required
                      value={basicAdd} onChange={e => { setBasicAdd(e.target.value) }} />
                  </div>
                  <div className='w-100 display-box mb-2'>
                    <i className="fa-solid fa-house me-2"></i>
                    <input type="text" placeholder='상세주소' required
                      value={detailAdd} onChange={e => { setDetailAdd(e.target.value) }} />
                  </div>
                  <div className='w-100 sample mb-2' style={{color: "#001C41"}}>
                    <p>우편번호 검색, 우편번호 및 기본주소 입력 후 상세주소 필수 입력 바랍니다.<br />
                      <strong>ex) 서울종로구 동숭동(기본주소) 181토픽아파트 1동 101호(상세주소는-건물명,동,층,호)</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-100 text-end p-3'>
                <button type='button' className='guild-done'>작성</button>
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

export default CreateGuild