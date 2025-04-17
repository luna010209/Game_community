import React from 'react'
import Ad from '../Ad/Ad'
import "./RightSide.css"

const RightSide = () => {
  return (
    <div>
      <div className='search-outside'>
        <div className='search-inside'>
          <i className="fa-solid fa-magnifying-glass me-2" style={{ cursor: "pointer" }}></i>
          <input
            type="text"
            placeholder='유저 닉네임을 입력하세요.'
            className='custom-search'
          />
        </div>
      </div>
      <div className='p-2'>
        <div className='account'>
          <div className='d-flex justify-content-between col-6'>
            <div className='col-7 display-info'>
              <div className='mb-2'>
                <img src="/assets/mypage/avatar.png" height={40} style={{ borderRadius: "8px" }} />
                <span className='ms-2 fw-bold'>체스트넛님</span>
              </div>
              <div style={{ fontSize: "12px" }}>
                최종접속일 <br />
                2025-01-03 10:25
              </div>
            </div>
            <div className='col-5 path-button'>
              <div className='col-12 text-center my-page'><a href="/my-page" role='button'>내정보</a></div>
              <div className='col-12 text-center my-page'><a href="/note" role='button'>쪽지함</a></div>
            </div>
          </div>
          <div className='col-6 ps-2'>
            <div className='game-group'>
              <h6 className='fw-bold mt-2'>길드 아직 없습니까?</h6>
              <div className='d-flex justify-content-center p-2 gap-3'>
                <div className='create-group'><a href="#" role='button'>길드 생성</a></div>
                <div className='create-group'><a href="#" role='button'>길드 가입</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ad />
      <Ad />
    </div>
  )
}

export default RightSide