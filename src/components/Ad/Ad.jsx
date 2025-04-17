import React from 'react'
import "./Ad.css"

const Ad = () => {
  return (
    <div>
      <div className='ad mb-2'>
        <div className='w-100 text-end p-2 text-dark mb-5'>PLAY APP ▷</div>
        <div className='w-100 text-center'><img src="/assets/ad/ad.png" height={100} /></div>
        <div className='w-100 text-center fw-bold text-dark'>지금까지 이런 전광판은 없었다.</div>
        <div className='w-100 p-2 text-dark mt-5'>PLAY APP ▷</div>
      </div>
    </div>
  )
}

export default Ad