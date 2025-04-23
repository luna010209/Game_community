import React, { useEffect, useRef, useState } from 'react'
import "./Guild.css";
import Navbar from '../Navbar/Navbar';
import BottomNavbar from '../Navbar/BottomNavbar';
import RightSide from '../Side/RightSide1';
import { useNavigate } from 'react-router-dom';

const Guild = () => {
  const dataDefault = [
    { "nickname": "1", "group": "슈퍼hero", "ranking": "금천구", "rate": "900000" },
    { "nickname": "2", "group": "슈퍼hero", "ranking": "마포구", "rate": "930000" },
  ];
  const dataSample = Array(10).fill(dataDefault).flat();
  const divRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.offsetHeight - 110);
    }
  }, []);

  const navigator = useNavigate();

  return (
    <div>
      <Navbar />
      <div className='d-flex w-100 mt-2 mb-2 justify-content-center'>
        <div className='col-12 col-xl-10 d-flex'>
          <div className='col-12 col-xl-8 pe-2 '>
            <div className='w-100 d-flex justify-content-between mb-2'>
              <button className='feed'>길드</button>
              <a href="/guild/create" role='button' className='create-feed'>
                <img src="/assets/feed/createfeed.svg" height={30}/>길드 작성
              </a>
            </div>
            <div className='user-info w-100'>
              <div className='d-flex'>
                <div className='title-catalog col-3'>순위</div>
                <div className='title-catalog col-5'>길드명</div>
                <div className='title-catalog col-2'>지역</div>
                <div className='title-catalog col-2'>길드인원</div>
              </div>
              <div style={{ height: height, cursor: "pointer" }} className='detail'>
                {dataSample.map((data, idx) => (
                  <div key={idx} className='d-flex text-dark' style={{ background: idx % 2 === 0 ? "" : "#D9D9D9" }} onClick={()=>{navigator(`/guild/${idx+1}`)}}>
                    <div className='one-line col-3 ps-2 pe-2'>{data.nickname}</div>
                    <div className='one-line col-5 ps-2 pe-2'><img src="/assets/guild/guild1.png" className='me-1' height={30} />{data.group}</div>
                    <div className='one-line col-2 ps-2 pe-2 justify-content-center'>{data.ranking}</div>
                    <div className='one-line col-2 ps-2 pe-2 justify-content-center'>{data.rate}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='col-4' ref={divRef}>
            <RightSide />
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  )
}

export default Guild