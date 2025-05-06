import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./RightSide2.css";
import Ad from '../Ad/Ad';

const RightSide = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    axios.get('/api/user/my-page', { withCredentials: true })
      .then(res => {
        setUserInfo(res.data);
      })
      .catch(err => {
        console.error('유저 정보 불러오기 실패:', err);
      });
  }, []);

  return (
    <div>
      <div className='gap-1 d-flex mb-2'>
        <div className='col-6 other'>
          <div className='rank-inside w-100'>
            <h3 className='fw-bold'>길드랭킹</h3>
            <div className='w-100'>
              {[...Array(6)].map((_, i) => (
                <div key={i} className='d-flex justify-content-between'><span>SKT T1</span>{i + 1}위</div>
              ))}
            </div>
            <div className='w-100 d-flex justify-content-center align-items-end'>
              <nav className='paging'>
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
                {[1,2,3].map(p => (
                  <li className="page-item" key={p}><a className="page-link" href="#">{p}</a></li>
                ))}
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className='col-6 other'>
          <div className='d-flex justify-content-between w-100'>
            <div className='col-7 display-info'>
              {userInfo ? (
                <>
                  <div className='mb-2'>
                    <img src="/assets/mypage/avatar.png" height={40} style={{ borderRadius: "8px" }} />
                    <span className='ms-2 fw-bold'>{userInfo.userNm}님</span>
                  </div>
                  <div style={{ fontSize: "12px" }}>
                    최종접속일 <br />
                    {userInfo.finlDt?.replace('T', ' ') || '정보 없음'}
                  </div>
                </>
                ) : (
                  <div>정보 로딩 중...</div>
              )}
            </div>
            <div className='col-5 path-button'>
              <div className='col-12 text-center my-page'><a href="/my-page">내정보</a></div>
              <div className='col-12 text-center my-page'><a href="/my-page/note">쪽지함</a></div>
            </div>
          </div>
          <div className='p-2 w-100'>
            <div className='game-group'>
              <h6 className='fw-bold mt-2'>길드 아직 없습니까?</h6>
              <div className='d-flex justify-content-center p-2 gap-3'>
                <div className='create-group'><a href="#">길드 생성</a></div>
                <div className='create-group'><a href="#">길드 가입</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ad/>
      <Ad/>
    </div>
  );
};

export default RightSide;
