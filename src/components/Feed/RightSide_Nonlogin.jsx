import React from 'react'
import "./RightSide.css"
import Ad from '../Ad/Ad'

const RightSide_Nonlogin = () => {
  return (
    <div>
      <div className='gap-1 d-flex mb-2'>
        <div className='col-6 other'>
          <div className='rank-inside w-100'>
            <h3 className='fw-bold'>길드랭킹</h3>
            <div className='w-100'>
              <div className='d-flex justify-content-between'><span>SKT T1</span>1위</div>
              <div className='d-flex justify-content-between'><span>SKT T1</span>1위</div>
              <div className='d-flex justify-content-between'><span>SKT T1</span>1위</div>
              <div className='d-flex justify-content-between'><span>SKT T1</span>1위</div>
              <div className='d-flex justify-content-between'><span>SKT T1</span>1위</div>
              <div className='d-flex justify-content-between'><span>SKT T1</span>1위</div>
            </div>
            <div className='w-100 d-flex justify-content-center align-items-end'>
              <nav className='paging'>
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className='col-6 other'>
          <div className='w-100 text-center pt-4 pb-4'>
            <span className='fw-bold fs-4'>로그인 후</span><br/>
            이용해주세요.
          </div>
          <div>
            <div className='login-button ms-2 me-2'><a href="#" role='button'>LSG 로그인</a></div>
            <div className='text-center mt-2'>
              <a href="#" className='forgot'>아이디 찾기</a>
              <div className='vr ms-1 me-1'></div>
              <a href="#" className='forgot'>비밀번호 찾기</a>
              <div className='vr ms-1 me-1'></div>
              <a href="/terms" className='forgot'>회원가입</a>
            </div>
          </div>
        </div>
      </div>
      <Ad/>
      <Ad/>
    </div>
  )
}

export default RightSide_Nonlogin