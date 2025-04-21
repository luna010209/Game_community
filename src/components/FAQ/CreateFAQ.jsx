import React, { useState } from 'react'
import "./FAQ.css"
import Navbar from '../Navbar/Navbar'
import RightSide from '../Side/RightSide2'
import BottomNavbar from '../Navbar/BottomNavbar'

const CreateFAQ = () => {
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
        <div className='col-12 col-lg-10 d-flex'>
          <div className='col-12 col-lg-8 ps-2 pe-2'>
            <div className='w-100 d-flex justify-content-between mb-2'>
              <button className='feed'>FAQ</button>
              <a href="/faq" role='button' className='create-feed'>
                <i className="fa-solid fa-backward me-2"></i> 뒤돌아가기
              </a>
            </div>
            <div className='feed-catalog'>
              <h4 className='fw-bold me-5'>글쓰기</h4>
              <div className='d-flex'>
                {["길드", "사용법", "사용자"].map((val) => (
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
            <div className='ps-5 pt-3'>
              <textarea
                rows="13"
                placeholder=
                {`※ 질문 내용`}
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
              <button type='button' className='done-button'>보내기</button>
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

export default CreateFAQ