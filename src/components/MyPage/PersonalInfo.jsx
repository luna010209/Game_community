import React, { useState } from 'react'
import MyPage from './MyPage'
import BottomNavbar from '../Navbar/BottomNavbar';
import './MyPage.css';

const PersonalInfo = () => {
  const [username, setUn]=useState("");
  const [nickname, setNickname]=useState("");
  const [email, setEmail]=useState("");
  const [mobile, setMobile]=useState("");
  const [phone, setPhone]=useState("");
  const [basicAdd, setBasicAdd]=useState("");
  const [detailAdd, setDetail]=useState("");
  const [job, setJob]=useState("");
  const [country, setCountry]=useState("");
  return (
    <div>
      <MyPage/>
      <div className='overall mb-3'>
        <form action="submit" className='user col-12 col-xl-10'>
          <div className='d-flex w-100 mb-2 align-items-center'>
            <div className='d-none d-xl-block col-2 fw-bold'>
              유저 네임
            </div>
            <div className='col-12 col-xl-10'>
              <input type="text" placeholder='체스트넛' className={`form-control form-input`} required
                  value={username} onChange={e=>{setUn(e.target.value)}}/>
            </div>
          </div>
          <div className='d-flex w-100 mb-2 align-items-center'>
            <div className='d-none d-xl-block col-2 fw-bold'>
              닉네임
            </div>
            <div className='col-12 col-xl-10'>
              <input type="text" placeholder='사자' className={`form-control form-input`} required
                  value={nickname} onChange={e=>{setNickname(e.target.value)}}/>
            </div>
          </div>
          <div className='d-flex w-100 mb-2 align-items-center'>
            <div className='d-none d-xl-block col-2 fw-bold'>
              이메일
            </div>
            <div className='col-12 col-xl-10'>
              <input type="text" placeholder='chestnut@gmail.com' className={`form-control form-input`} required
                  value={email} onChange={e=>{setEmail(e.target.value)}}/>
            </div>
          </div>
          <div className='d-flex w-100 mb-2 align-items-center'>
            <div className='d-none d-xl-block col-2 fw-bold'>
              연락처1
            </div>
            <div className='col-12 col-xl-10'>
              <input type="text" placeholder='010-1234-5677' className={`form-control form-input`} required
                  value={mobile} onChange={e=>{setMobile(e.target.value)}}/>
            </div>
          </div>
          <div className='d-flex w-100 mb-2 align-items-center'>
            <div className='d-none d-xl-block col-2 fw-bold'>
              연락처2
            </div>
            <div className='col-12 col-xl-10'>
              <input type="text" placeholder='02-1234-5677' className={`form-control form-input`} required
                  value={phone} onChange={e=>{setPhone(e.target.value)}}/>
            </div>
          </div>
          <div className='d-flex w-100 mb-2 align-items-center'>
            <div className='d-none d-xl-flex col-2 fw-bold align-items-center'>
              기본주소
              <button type='button' className='ms-2 btn btn-outline-secondary'>주소 변경</button>
            </div>
            <div className='col-12 col-xl-10'>
              <input type="text" placeholder='시흥시 조남동 711' className={`form-control form-input`} required disabled
                  value={basicAdd}/>
            </div>
          </div>
          <div className='d-flex w-100 mb-2 align-items-center'>
            <div className='d-none d-xl-block col-2 fw-bold'>
              자세주소
            </div>
            <div className='col-12 col-xl-10'>
              <input type="text" placeholder='목감로얄팰리스 707호' className={`form-control form-input`} required
                  value={detailAdd} onChange={e=>{setDetail(e.target.value)}}/>
            </div>
          </div>
          <div className='d-flex w-100 mb-2 align-items-center'>
            <div className='d-none d-xl-block col-2 fw-bold'>
              작업
            </div>
            <div className='col-12 col-xl-10'>
              <input type="text" placeholder='웹개발자' className={`form-control form-input`} required
                  value={job} onChange={e=>{setJob(e.target.value)}}/>
            </div>
          </div>
          <div className='d-flex w-100 mb-2 align-items-center'>
            <div className='d-none d-xl-block col-2 fw-bold'>
              국적
            </div>
            <div className='col-12 col-xl-10'>
              <input type="text" placeholder='대한민국' className={`form-control form-input`} required
                  value={country} onChange={e=>{setCountry(e.target.value)}}/>
            </div>
          </div>
          <div className='text-end w-100'><button type='submit' className='save'>저장</button></div>
        </form>
      </div>
      <BottomNavbar/>
    </div>
  )
}

export default PersonalInfo