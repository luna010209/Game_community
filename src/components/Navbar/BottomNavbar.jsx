import React from 'react'
import "./BottomNavbar.css";

const BottomNavbar = () => {
  return (
    <div>
      <div className='term'>
        <span className='ps-4 pe-4'><a href="#" className='term-a'>이용약관</a></span>
        <span className='ps-4 pe-4'><a href="#" className='term-a'>개인정보처리방침</a></span>
        <span className='ps-4 pe-4'><a href="#" className='term-a'>청소년 보호정책</a></span>
        <span className='ps-4 pe-4'><a href="#" className='term-a'>불법 촬영물 신고</a></span> 
      </div>
      <div className='company pb-5'>
        <div className='col-2'></div>
        <div className='pb-3'>
          <div className='pt-4 pb-4'><img src="/assets/lsg.jpg" height={60}/></div>
          <p>
            08632 서울특별시 금천구 시흥대로59길 9, 위드비엠 2층 202호<br/>
            사업자번호 263-88-01665 <br/>
            TEL 010-2927-0841 / FAX 050-4028-0841
          </p>
        </div>
      </div>
    </div>
  )
}

export default BottomNavbar