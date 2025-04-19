import React, { useEffect, useRef, useState } from 'react'
import "./UserInfo.css"
import Navbar from '../Navbar/Navbar'
import BottomNavbar from '../Navbar/BottomNavbar'
import RightSide from '../Side/RightSide1'

const UserInfo = () => {
  const dataDefault = [
    {"nickname":"유라", "group":"슈퍼hero", "ranking":"1", "rate":"95.5"},
    {"nickname":"Maya", "group":"슈퍼hero", "ranking":"2", "rate":"90.5"},
  ];
  const dataSample=Array(10).fill(dataDefault).flat();
  const divRef = useRef(null);
  const [height, setHeight]=useState(0);

  useEffect(()=>{
    if (divRef.current) {
      setHeight(divRef.current.offsetHeight-110);
    }
  }, []);

  return (
    <div>
      <Navbar/>
      <div className='d-flex w-100 mt-2 mb-2 justify-content-center'>
        <div className='col-12 col-lg-10 d-flex'>
          <div className='col-12 col-lg-8 pe-2 '>
            <div className='w-100 d-flex justify-content-between mb-2'>
              <button className='feed'>유저정보</button>
            </div>
            <div className='user-info w-100'>
              <div className='d-flex'>
                <div className='title-catalog col-3'>닉네임</div>
                <div className='title-catalog col-5'>길드</div>
                <div className='title-catalog col-2'>순위</div>
                <div className='title-catalog col-2'>승률</div>
              </div>
              <div style={{height:height, cursor:"pointer"}} className='detail'>
                {dataSample.map((data, idx)=>(
                  <div key={idx} className='d-flex text-dark' style={{background: idx%2===0? "":"#D9D9D9"}}>
                    <div className='one-line col-3 ps-2 pe-2'><img src="/assets/mypage/avatar.png" className='me-1' height={30} />{data.nickname}</div>
                    <div className='one-line col-5 ps-2 pe-2'><img src="/assets/mypage/avatar.png" className='me-1' height={30} />{data.group}</div>
                    <div className='one-line col-2 ps-2 pe-2 justify-content-center'>{data.ranking}</div>
                    <div className='one-line col-2 ps-2 pe-2 justify-content-center'>{data.rate}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='col-4' ref={divRef}>
            <RightSide/>
          </div>
        </div>
      </div>
      <BottomNavbar/>
    </div>
  )
}

export default UserInfo