import React, { useState } from 'react'
import "./Signup.css";

const Signup3 = () => {
  const [addCode, setAddCode]= useState("");
  const [basicAdd, setBasicAdd]= useState("");
  const [detailAdd, setDetailAdd]= useState("");
  return (
    <div className='dis' style={{backgroundColor:"rgba(4, 26, 44, 0.15)", height:"100vh"}}>
      <div className='col-12 col-xl-10 bg-white inside p-4'>
        <img src="/assets/signup/lsg.png" className='img d-none d-xl-flex col-5'/>
        <div className='col-12 col-xl-7 dis' style={{color:"#001C41"}}>
          <div className='col-12 col-xl-9'>
            <h1 style={{color:"rgba(4, 26, 44, 0.8)", fontWeight:"bolder", textAlign:"center"}} className='mb-5'>회원가입</h1>
            <div className='address ps-5 mb-3'><h5 className='fw-bold'><i className="fa-solid fa-location-dot me-2"></i>주소</h5></div>
            <form action="submit" className='dis flex-wrap'>
              <div className='w-100 check-box mb-2'>
                <input type="text" placeholder='도로명 기본주소' className={`form-control form-input`} required
                value={addCode} onChange={e=>{setAddCode(e.target.value)}}/>
                <button className='col-3 code-add'>우편번호검색</button>
              </div>
              <div className='w-100 check-box mb-2'>
                <input type="text" placeholder='기본주소' className={`form-control form-input`} required
                value={basicAdd} onChange={e=>{setBasicAdd(e.target.value)}}/>
              </div>
              <div className='w-100 check-box mb-2'>
                <input type="text" placeholder='상세주소' className={`form-control form-input`} required
                value={detailAdd} onChange={e=>{setDetailAdd(e.target.value)}}/>
              </div>
              <div className='w-100 check-box mb-2'>
                <p>우편번호 검색, 우편번호 및 기본주소 입력 후 상세주소 필수 입력 바랍니다.<br/>
                <strong>ex) 서울종로구 동숭동(기본주소) 181토픽아파트 1동 101호(상세주소는-건물명,동,층,호)</strong>
                </p>
              </div>
              <div className='dis mt-5'><button className='submit'>완료</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup3