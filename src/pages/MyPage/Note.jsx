import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyPage from './MyPage';
import BottomNavbar from '../../components/Navbar/BottomNavbar';
import './MyPage.css';

const Note = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const tabLabels = ['받은 쪽지', '보낸 쪽지', '쪽지 쓰기'];

  const [receiver, setReceiver] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // ✅ 로그인 안했으면 로그인 페이지로 강제 이동
  useEffect(() => {
    const loginUser = JSON.parse(localStorage.getItem("loginUser"));
    if (!loginUser) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <MyPage />
      <div className='overall mb-3'>
        <div className='col-12 col-lg-10 note'>
          <div className='d-flex w-100'>
            {tabLabels.map((label, index) => (
              <span
                key={index}
                className={`col-4 text-center p-2 ${activeIdx === index ? "" : "non-active"}`}
                onClick={() => setActiveIdx(index)}
              >
                {label}
              </span>
            ))}
          </div>
          <div className='w-100' style={{ padding: "2% 3%" }}>
            {/* 받은 쪽지 */}
            <div className={`note-content ${activeIdx === 0 ? "" : "d-none"}`}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className='col-12 mb-2 one-note'>
                  <div className='d-flex gap-3'>
                    <img src="/assets/mypage/avatar.png" height={50} style={{ borderRadius: "50%" }} />
                    <div>
                      <span>사라 씨</span><br />
                      <span>ㅇㅇㅇㅇ 안내드립니다.</span>
                    </div>
                  </div>
                  <a href="#"><div><img src="/assets/mypage/trash.png" height={40} /></div></a>
                </div>
              ))}
            </div>

            {/* 쪽지 쓰기 */}
            <form action="submit" className={`${activeIdx === 2 ? "" : "d-none"}`}>
              <div className='d-flex w-100 align-items-center mb-2'>
                <div className='d-none d-lg-block col-2'>받은 사람</div>
                <div className='col-12 col-lg-10'>
                  <input type="text" className='form-control' required
                    value={receiver} onChange={e => setReceiver(e.target.value)} />
                </div>
              </div>
              <div className='d-flex w-100 align-items-center mb-2'>
                <div className='d-none d-lg-block col-2'>제목</div>
                <div className='col-12 col-lg-10'>
                  <input type="text" className='form-control' required
                    value={title} onChange={e => setTitle(e.target.value)} />
                </div>
              </div>
              <div className='d-flex w-100 align-items-center mb-2'>
                <div className='d-none d-lg-block col-2'>내용</div>
                <div className='col-12 col-lg-10'>
                  <textarea className='form-control' required rows={10}
                    value={content} onChange={e => setContent(e.target.value)} />
                </div>
              </div>
              <div className='w-100 text-end mt-2'>
                <button type='submit' className='save'>보내기</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Note;
