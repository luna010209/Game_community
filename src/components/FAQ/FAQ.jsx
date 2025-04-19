import React from 'react';
import "./FAQ.css";
import Navbar from '../Navbar/Navbar';
import BottomNavbar from '../Navbar/BottomNavbar';
import RightSide from '../Side/RightSide1';

const FAQ = () => {
  return (
    <div>
      <Navbar/>
      <div className='d-flex w-100 mt-2 mb-2 justify-content-center'>
        <div className='col-12 col-lg-10 d-flex'>
          <div className='col-12 col-lg-8 pe-2 '>
            <div className='w-100 d-flex justify-content-between mb-2'>
              <button className='feed'>길드</button>
              <a href="/guild/create" role='button' className='create-feed'>
                <img src="/assets/feed/createfeed.svg" height={30}/>길드 작성
              </a>
            </div>
          </div>
          <div className='col-4'>
            <RightSide />
          </div>
        </div>
      </div>
      <BottomNavbar/>
    </div>
  )
}

export default FAQ