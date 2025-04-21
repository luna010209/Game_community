import React, { useState } from 'react'
import MyPage from './MyPage';
import BottomNavbar from '../Navbar/BottomNavbar';
import './MyPage.css';

const Note = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const tabLabels = ['받은 쪽지', '보낸 쪽지', '쪽지 쓰기']

  const [receiver, setReceiver] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //Sample data
  const [noteReceive, setNoteReceive] = useState([
    { "avatar": "/assets/mypage/avatar1.png", "user": "사라 씨", content: "ㅇㅇㅇㅇ 안내드립니다." },
    { "avatar": "/assets/mypage/avatar2.png", "user": "Alex 씨", content: "ㅇㅇㅇㅇ 안녕하세요! <br/>저는 Alex입니다." },
    { "avatar": "/assets/mypage/avatar3.png", "user": "니나 씨", content: "ㅇㅇㅇㅇ 축하해." },
    { "avatar": "/assets/mypage/avatar4.png", "user": "Clara 씨", content: "ㅇㅇㅇㅇ 문젠 있냐?" },
    { "avatar": "/assets/mypage/avatar5.png", "user": "Lucas 씨", content: "ㅇㅇㅇㅇ 문젠 있냐?" },
    { "avatar": "/assets/mypage/avatar.jpg", "user": "바라나 씨", content: "ㅇㅇㅇㅇ 문젠 있냐?" },
  ]);
  const handleDelete=(idx)=>{
    const updatedData = noteReceive.filter((_, index)=> index!==idx);
    setNoteReceive(updatedData);
  }

  const [noteSend, setNoteSend] = useState([
    { "avatar": "/assets/mypage/avatar1.png", "user": "사라 씨", content: "ㅇㅇㅇㅇ 안내드립니다." },
    { "avatar": "/assets/mypage/avatar2.png", "user": "Alex 씨", content: "ㅇㅇㅇㅇ 안녕하세요! <br/>저는 Alex입니다." },
    { "avatar": "/assets/mypage/avatar3.png", "user": "니나 씨", content: "ㅇㅇㅇㅇ 축하해." },
    { "avatar": "/assets/mypage/avatar4.png", "user": "Clara 씨", content: "ㅇㅇㅇㅇ 문젠 있냐?" },
    { "avatar": "/assets/mypage/avatar5.png", "user": "Lucas 씨", content: "ㅇㅇㅇㅇ 문젠 있냐?" },
    { "avatar": "/assets/mypage/avatar.jpg", "user": "바라나 씨", content: "ㅇㅇㅇㅇ 문젠 있냐?" },
  ]);
  const handleDeleteSend=(idx)=>{
    const updatedData = noteSend.filter((_, index)=> index!==idx);
    setNoteSend(updatedData);
  }
  return (
    <div>
      <MyPage />
      <div className='overall mb-3'>
        <div className='col-12 col-lg-10 note'>
          <div className='d-flex w-100'>
            {/* <span className='col-4 text-center p-2'>받은 쪽지</span>
            <span className='col-4 text-center p-2 non-active'>보낸 쪽지</span>
            <span className='col-4 text-center p-2 non-active'>쪽지 쓰기</span> */}
            {
              tabLabels.map((label, index) => (
                <span
                  key={index}
                  className={`col-4 text-center p-2 ${activeIdx === index ? "" : "non-active"}`}
                  onClick={() => setActiveIdx(index)}>{label}
                </span>
              ))
            }
          </div>
          <div className='w-100' style={{ padding: "2% 3%" }}>
            {/* 받은 쪽지 */}
            <div className={`note-content ${activeIdx == 0 ? "" : "d-none"}`}>
              {noteReceive.map((data, idx) => (
                <div key={idx} className='col-12 mb-2 one-note'>
                  <div className='d-flex gap-3'>
                    <img src={data.avatar} height={50} style={{ borderRadius: "50%" }} />
                    <div>
                      <span>{data.user}</span><br />
                      <span>{data.content}</span>
                    </div>
                  </div>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleDelete(idx); }}><div><img src="/assets/mypage/trash.png" height={40} /></div></a>
                </div>
              ))}
              <div className='col-12 mb-2 one-note'>
                <div className='d-flex gap-3'>
                  <img src="/assets/mypage/avatar.png" height={50} style={{ borderRadius: "50%" }} />
                  <div>
                    <span>사라 씨</span><br />
                    <span>ㅇㅇㅇㅇ 안내드립니다.</span>
                  </div>
                </div>
                <a href="#"><div><img src="/assets/mypage/trash.png" height={40} /></div></a>
              </div>
            </div>
            {/* 보낸 쪽지 */}
            <div className={`note-content ${activeIdx == 1 ? "" : "d-none"}`}>
              {noteSend.map((data, idx) => (
                <div key={idx} className='col-12 mb-2 one-note'>
                  <div className='d-flex flex-wrap gap-3'>
                    <div className='d-flex align-items-center'>
                      <img src="/assets/mypage/avatar.png" height={30} style={{ borderRadius: "50%", paddingRight:"5px"}} /> <span>체스트넛</span> 
                      <i className="fa-solid fa-arrow-right ms-3 me-3"></i>
                      <img src={data.avatar} height={30} style={{ borderRadius: "50%", paddingRight:"5px" }} /> <span>{data.user}</span>
                    </div>
                    <div className='w-100'>
                      <span>{data.content}</span>
                    </div>
                  </div>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleDeleteSend(idx); }}><div><img src="/assets/mypage/trash.png" height={40} /></div></a>
                </div>
              ))}
            </div>
            {/* 쪽지 쓰기 */}
            <form action="submit" className={`${activeIdx == 2 ? "" : "d-none"}`}>
              <div className='d-flex w-100 align-items-center mb-2'>
                <div className='d-none d-lg-block col-2'>받은 사람</div>
                <div className='col-12 col-lg-10'>
                  <input type="text" className={`form-control`} required
                    value={receiver} onChange={e => { setReceiver(e.target.value) }} />
                </div>
              </div>
              <div className='d-flex w-100 align-items-center mb-2'>
                <div className='d-none d-lg-block col-2'>제목</div>
                <div className='col-12 col-lg-10'>
                  <input type="text" className={`form-control`} required
                    value={title} onChange={e => { setTitle(e.target.value) }} />
                </div>
              </div>
              <div className='d-flex w-100 align-items-center mb-2'>
                <div className='d-none d-lg-block col-2'>내용</div>
                <div className='col-12 col-lg-10'>
                  <textarea className={`form-control`} required rows={10}
                    value={content} onChange={e => { setContent(e.target.value) }}></textarea>
                </div>
              </div>
              <div className='w-100 text-end mt-2'><button type='submit' className='save'>보내기</button></div>
            </form>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  )
}

export default Note