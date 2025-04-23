import React from 'react'
import "./BattleDetail.css";

const BattleDetail = () => {
  return (
    <div>
      <div>
        <div className='win-title pt-2 pb-2'>
          <div style={{ width: "20%" }}><strong style={{ color: "rgba(63, 100, 155, 1)" }}>승리팀</strong></div>
          <div style={{ width: "10%", textAlign: "center" }}>OP Score</div>
          <div style={{ width: "10%", textAlign: "center" }}>KDA</div>
          <div style={{ width: "15%", textAlign: "center" }}>피해량</div>
          <div style={{ width: "8%", textAlign: "center" }}>와드</div>
          <div style={{ width: "8%", textAlign: "center" }}>CS</div>
          <div style={{ width: "30%", textAlign: "center" }}>아이템</div>
        </div>
        <div>
          <div className='one-record'>
            <div style={{ width: "20%", padding: "5px", display:"flex", gap:"5px", alignItems:"center" }}>
              <div className='position-relative' style={{ height: "45px", width: "45px" }}>
                <img src="/assets/info/icon1.png" height={45} style={{ borderRadius: "50%" }} />
                <span className='img-number'>15</span>
              </div>
              <div>
                <div className='gap-1'>
                  <img src="/assets/info/treasure1.png" height={25} />
                  <img src="/assets/info/treasure1.png" height={25} />
                </div>
                <div className=''>
                  <img src="/assets/info/treasure1.png" height={25} />
                  <img src="/assets/info/treasure2.png" height={25} />
                </div>
              </div>
              <div>
                <strong>호롱박이</strong>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BattleDetail