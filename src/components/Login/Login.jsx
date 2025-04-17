import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPw] = useState("");
  return (
    <div className='dis' style={{backgroundColor: "rgba(4, 26, 44, 0.15)", height: "100vh" }}>
      <div className='col-12 col-lg-10 p-4 bg-white inside'>
        <img src="/assets/signup/lsg.png" className='img d-none d-lg-flex col-5'/>
        <div className='col-12 col-lg-7 dis' style={{color:"#001C41"}}>
          <div className='col-11 col-lg-9'>
            <h1 style={{color:"rgba(4, 26, 44, 0.8)", fontWeight:"bolder", textAlign:"center"}} className='mb-5'>LSG, 환영합니다!</h1>
            <form action="submit" className='dis flex-wrap'>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="text" placeholder='아이디' className={`form-control form-input`} required
                value={id} onChange={e=>{setId(e.target.value)}}/>
              </div>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="password" placeholder='비밀번호' className={`form-control form-input`} required
                value={password} onChange={e=>{setPw(e.target.value)}}/>
              </div>
              <div className='w-100 check-box justify-content-between'>
                <b><a href="#" className='other-path'>비밀번호 찾기</a></b>
                <b><a href="/terms" className='other-path'>회원가입</a></b>
              </div>
              <div className='w-100 check-box justify-content-center'>
                <a href="/#"><img src="" /></a>
              </div>
              <div className='dis mt-5'><button type='submit' className='submit'>로그인</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login