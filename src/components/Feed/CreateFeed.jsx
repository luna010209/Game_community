import React, { useState } from 'react'
import "./Feed.css"
import Navbar from '../Navbar/Navbar'
import RightSide from '../Side/RightSide2'
import BottomNavbar from '../Navbar/BottomNavbar'

const CreateFeed = () => {
  const [selected, setSelected] = useState(null);

  const handleCheck = (value) => {
    setSelected(prev => (prev === value ? null : value));
  }

  const [files, setFiles]=useState([]);
  const [numOfFile, setNum]=useState("d-none");
  const handleFile = (e)=>{
    if (files.length<3){
      const selectedFiles = Array.from(e.target.files);
      if (selectedFiles.length>3) setNum("");
      else {setFiles([...files, ...selectedFiles]); setNum("d-none");}
    } else{
      setNum("");
    }
  }

  const handleDelete= (idx)=>{
    const updatedFiles = files.filter((_, index)=> index!==idx);
    setFiles(updatedFiles);
    setNum("d-none");
  }

  return (
    <div>
      <Navbar />
      <div className='d-flex w-100 mt-2 mb-2 justify-content-center'>
        <div className='col-12 col-xl-10 d-flex'>
          <div className='col-12 col-xl-8 ps-2 pe-2'>
            <div className='w-100 d-flex justify-content-between mb-2'>
              <button className='feed'>피드</button>
              <a href="/feed" role='button' className='create-feed'>
                <i className="fa-solid fa-backward me-2"></i> 뒤돌아가기
              </a>
            </div>
            <div className='feed-catalog'>
              <h4 className='fw-bold me-5'>글쓰기</h4>
              <div className='d-flex'>
                {["자유", "홍보", "제보", "팁"].map((val) => (
                  <label key={val} className='box-type'>
                    <input
                      type="checkbox"
                      checked={selected === val}
                      onChange={() => handleCheck(val)}
                      className='me-1'
                    /> {val}
                  </label>
                ))}
              </div>
            </div>
            <div className='title-feed'>
              <span className='fw-bold fs-6 text-dark col-1 text-center'>제목</span>
              <input
                type="text"
                placeholder="제목을 입력하세요."
                className="underline-input"
                required
              />
            </div>
            <div className='ps-5 pt-3'>
              <textarea
                rows="13"
                placeholder=
                {`※ 게시판 용도와 무관하거나 아래 내용이 포함된 경우는 사전 안내없이 삭제/제재됩니다.

                - 욕설, 상대 비방 등 타인의 명예를 훼손하는 게시물
                - 불쾌감을 줄 수 있는 이미지나 내용, 저작권에 위배되는 게시물
                - 개인정보 노출이 있거나 현금 거래 시도 등에 준하는 행위
                - 공식 안내되지 않은 허위 정보로 혼란을 초래하거나 운영에 심각한 악영향을 끼칠 수 있는 게시물`
                }
                className="underline-input"
                required
              />
            </div>
            <div className='d-flex ps-5 pe-5'>
              <div className='col-5 p-3'>
                <label className='upload-img' htmlFor='fileUpload'>
                  <img src="/assets/feed/upload.png" height={60} />
                  <span className='w-100 text-center'>이미지 업로드</span>
                  <span className='w-100 text-center fw-bold' style={{fontSize:"12px"}}>(파일은 최대 3개 있고 .png, .jpg만 가능합니다.)</span>
                </label>
                <input
                  type="file"
                  accept='.jpg,.png'
                  id="fileUpload"
                  multiple
                  className='d-none'
                  onChange={handleFile}
                />
              </div>
              <div className='col-7 p-3'>
                {files.map((file, idx)=>(
                  <div key={idx} className='img-file mb-2'>
                    <div className='d-flex align-items-center'>
                      <img src="/assets/feed/image.png" height={30} />
                      <div className='text-dark ms-2'>
                        <span className='fw-bold'>{file.name}</span><br/>
                        <span style={{fontSize:"12px"}}>{(file.size / 1024).toFixed(2)}KB of {(file.size / 1024).toFixed(2)}KB <strong><i className="fa-solid fa-circle-check ms-2 me-1"></i>완료</strong></span>
                      </div>
                    </div>
                    <div><button onClick={()=>handleDelete(idx)} type='button' style={{border:"none"}}><img src="/assets/feed/trash.png" height={40} /></button></div>
                  </div>
                ))}
                <div className={`text-danger ${numOfFile}`}>❗️업로드 파일이 최대 3개입니다.</div>
              </div>
            </div>
            <div className='d-flex w-100 justify-content-center mt-5 pt-4'>
              <button type='button' className='done-button'>등록</button>
              <button type='button' className='cancel-button'>취소</button>
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

export default CreateFeed