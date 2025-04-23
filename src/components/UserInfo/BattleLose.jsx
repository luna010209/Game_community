import React from 'react'
import "./BattleDetail.css";

const BattleLose = () => {
  // sample data
  const winData = [
    { "un": "사자", "level": 180, "op": 7.1, "ranking": "3rd", "kda": ["25/13/24(67%)", "3.77:1"], "damage": ["42,070", "22,092"], "damPercent": [67, 30], "cs": [37, 2.2] },
    { "un": "마자", "level": 380, "op": 8.1, "ranking": "1st", "kda": ["8/10/53(84%)", "6.10:1"], "damage": ["38,185", "21,243"], "damPercent": [60, 22], "cs": [41, 2] },
    { "un": "체스트넛", "level": 54, "op": 5.8, "ranking": "5th", "kda": ["12/13/32(60%)", "3.38:1"], "damage": ["49,537", "44,899"], "damPercent": [81, 54], "cs": [32, 1.7] },
    { "un": "Alex", "level": 80, "op": 7, "ranking": "4th", "kda": ["15/10/36(70%)", "5.10:1"], "damage": ["62,514", "29,536"], "damPercent": [100, 25], "cs": [70, 3.7] },
    { "un": "Brad Claud", "level": 99, "op": 7.9, "ranking": "2nd", "kda": ["13/7/42(75%)", "7.86:1"], "damage": ["39,937", "27,775"], "damPercent": [64, 21], "cs": [41, 2.2] },
  ]
  const loseData = [
    { "un": "Dogstriker", "level": 18, "op": 4.1, "ranking": "7th", "kda": ["8/14/27(66%)", "2.50:1"], "damage": ["33,119", "28,215"], "damPercent": [25, 70], "cs": [37, 2.2] },
    { "un": "Into Destruction", "level": 80, "op": 3.4, "ranking": "8th", "kda": ["10/16/23(62%)", "2.06:1"], "damage": ["25,463", "21,243"], "damPercent": [36, 72], "cs": [41, 2] },
    { "un": "체스트넛", "level": 54, "op": 3, "ranking": "9th", "kda": ["15/14/13(53%)", "2.00:1"], "damage": ["20,762", "44,899"], "damPercent": [21, 74], "cs": [32, 1.7] },
    { "un": "Zaube", "level": 7, "op": 4.2, "ranking": "ACE", "kda": ["14/11/18(60%)", "2.91:1"], "damage": ["32,657", "29,536"], "damPercent": [10, 85], "cs": [70, 3.7] },
    { "un": "Brad Claud", "level": 9, "op": 2.5, "ranking": "10th", "kda": ["6/18/22(53%)", "1.56:1"], "damage": ["27,078", "27,775"], "damPercent": [34, 51], "cs": [41, 2.2] },
  ]
  return (
    <div>
      <div>
        <div className='win-title pt-2 pb-2'>
          <div style={{ width: "23%" }}><strong style={{ color: "#B6B659" }}>패배팀</strong></div>
          <div style={{ width: "10%", textAlign: "center" }}>OP Score</div>
          <div style={{ width: "12%", textAlign: "center" }}>KDA</div>
          <div style={{ width: "15%", textAlign: "center" }}>피해량</div>
          <div style={{ width: "7%", textAlign: "center" }}>와드</div>
          <div style={{ width: "8%", textAlign: "center" }}>CS</div>
          <div style={{ width: "25%", textAlign: "center" }}>아이템</div>
        </div>
        <div>
          {loseData.map((data, idx) => (
            <div key={idx} className='one-record' style={{ backgroundColor: "rgba(182, 182, 89, 0.2)" }}>
              <div style={{ width: "23%", padding: "5px", display: "flex", gap: "5px", alignItems: "center" }}>
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
                  <strong className='text-dark'>{data.un.length > 4 ? data.un.slice(0, 3) + "..." : data.un}</strong><br />
                  <span style={{ color: "gray", fontSize: "12px" }}>Level {data.level}</span>
                </div>
              </div>
              <div style={{ width: "10%", padding: "5px", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                <strong className='text-dark' style={{ width: "40%" }}><i>{data.op}</i></strong>
                <div style={{ backgroundColor: "#878787", padding: "1px 10px", borderRadius: "40px", width: "60%", textAlign: "center" }}>{data.ranking}</div>
              </div>
              <div style={{ width: "12%", padding: "5px", alignItems: "center", fontSize: "13px", textAlign: "center" }}>
                <div className='text-dark fs-sm'>{data.kda[0]}</div>
                <div style={{ color: "#F16D0F" }}>{data.kda[1]}</div>
              </div>
              <div style={{ width: "15%", padding: "5px", display: "flex" }}>
                <div className='col-6 text-center pe-1'>
                  <span className='text-secondary' style={{ fontSize: "14px" }}>{data.damage[0]}</span>
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${data.damPercent[0]}%`, backgroundColor: "#B6B659" }}></div>
                  </div>
                </div>
                <div className='col-6 text-center ps-1'>
                  <span className='text-secondary' style={{ fontSize: "14px" }}>{data.damage[1]}</span>
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${data.damPercent[1]}%`, backgroundColor: "gray" }}></div>
                  </div>
                </div>
              </div>
              <div style={{ width: "7%", padding: "5px", alignItems: "center", fontSize: "14px", textAlign: "center" }}>
                <div className='text-secondary fs-sm'>0<br />0 / 0</div>
              </div>
              <div style={{ width: "8%", padding: "5px", alignItems: "center", fontSize: "14px", textAlign: "center" }}>
                <div className='text-secondary fs-sm'>{data.cs[0]}<br />분당 {data.cs[1]}</div>
              </div>
              <div style={{ width: "25%", padding: "5px", alignItems: "center", fontSize: "14px", textAlign: "center" }}>
                {[1, 2, 3, 4, 5, 6].map((no) => (
                  <img key={no} src={`/assets/info/weapon${no}.jpg`} height={25} style={{ borderRadius: "5px", marginRight: "2px", marginBottom: "3px" }} />
                ))}
                <img src="/assets/info/treasure1.png" height={25} style={{ borderRadius: "5px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='d-flex p-2 align-items-center' style={{ backgroundColor: "#E9E9E9" }}>
        <div className='col-3'>
          <div style={{ color: "#B6B659" }}>
            <i className="fa-solid fa-cloud me-2"></i><span className='me-2 text-secondary'>0</span>
            <i className="fa-brands fa-bluesky me-2"></i><span className='me-2 text-secondary'>0</span>
            <i className="fa-brands fa-pagelines me-2"></i><span className='me-2 text-secondary'>4</span>
            <i className="fa-brands fa-envira me-2"></i><span className='me-2 text-secondary'>2</span>
          </div>
          <div style={{ color: "#B6B659" }}>
            <i className="fa-brands fa-phoenix-squadron me-2"></i><span className='me-2 text-secondary'>4</span>
            <i className="fa-brands fa-diaspora me-2"></i><span className='me-2 text-secondary'>0</span>
            <i className="fa-brands fa-sketch me-2"></i><span className='me-2 text-secondary'>0</span>
          </div>
        </div>
        <div className='col-6'>
          <div className="mb-1 d-flex w-100 position-relative" style={{ height: "45%", overflow: "hidden" }}>
            <div className="total-lose justify-content-start ps-1" style={{ width: `${26 / (33 + 26) * 100}%` }}>
              <span>26</span>
            </div>
            <div className="total-win justify-content-end pe-1" style={{ width: `${33 / (33 + 26) * 100}%` }}>
              <span>33</span>
            </div>
            <span class="center-text">Total Kill</span>
          </div>
          <div className="mb-1 d-flex w-100 position-relative align-content-end" style={{ height: "45%", overflow: "hidden" }}>
            <div className="total-lose justify-content-start ps-1" style={{ width: `${65028 / (72349 + 65028) * 100}%` }}>
              <span>65,028</span>
            </div>
            <div className="total-win justify-content-end pe-1" style={{ width: `${72349 / (72349 + 65028) * 100}%` }}>
              <span>72,349</span>
            </div>
            <span class="center-text">Total Gold</span>
          </div>
        </div>
        <div className='col-3 text-end'>
          <div style={{ color: "#3F649B" }}>
            <i className="fa-solid fa-cloud me-2"></i><span className='me-2 text-secondary'>0</span>
            <i className="fa-brands fa-bluesky me-2"></i><span className='me-2 text-secondary'>0</span>
            <i className="fa-brands fa-pagelines me-2"></i><span className='me-2 text-secondary'>4</span>
            <i className="fa-brands fa-envira me-2"></i><span className='me-2 text-secondary'>2</span>
          </div>
          <div style={{ color: "#3F649B" }}>
            <i className="fa-brands fa-phoenix-squadron me-2"></i><span className='me-2 text-secondary'>4</span>
            <i className="fa-brands fa-diaspora me-2"></i><span className='me-2 text-secondary'>0</span>
            <i className="fa-brands fa-sketch me-2"></i><span className='me-2 text-secondary'>0</span>
          </div>
        </div>
      </div>
      <div>
        <div className='win-title pt-2 pb-2'>
          <div style={{ width: "23%" }}><strong style={{ color: "rgba(63, 100, 155, 1)" }}>승리팀</strong></div>
          <div style={{ width: "10%", textAlign: "center" }}>OP Score</div>
          <div style={{ width: "12%", textAlign: "center" }}>KDA</div>
          <div style={{ width: "15%", textAlign: "center" }}>피해량</div>
          <div style={{ width: "7%", textAlign: "center" }}>와드</div>
          <div style={{ width: "8%", textAlign: "center" }}>CS</div>
          <div style={{ width: "25%", textAlign: "center" }}>아이템</div>
        </div>
        <div>
          {winData.map((data, idx) => (
            <div key={idx} className='one-record'>
              <div style={{ width: "23%", padding: "5px", display: "flex", gap: "5px", alignItems: "center" }}>
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
                  <strong className='text-dark'>{data.un.length > 4 ? data.un.slice(0, 3) + "..." : data.un}</strong><br />
                  <span style={{ color: "gray", fontSize: "12px" }}>Level {data.level}</span>
                </div>
              </div>
              <div style={{ width: "10%", padding: "5px", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                <strong className='text-dark' style={{ width: "40%" }}><i>{data.op}</i></strong>
                <div style={{ backgroundColor: "#878787", padding: "1px 10px", borderRadius: "40px", width: "60%", textAlign: "center" }}>{data.ranking}</div>
              </div>
              <div style={{ width: "12%", padding: "5px", alignItems: "center", fontSize: "13px", textAlign: "center" }}>
                <div className='text-dark fs-sm'>{data.kda[0]}</div>
                <div style={{ color: "#F16D0F" }}>{data.kda[1]}</div>
              </div>
              <div style={{ width: "15%", padding: "5px", display: "flex" }}>
                <div className='col-6 text-center pe-1'>
                  <span className='text-secondary' style={{ fontSize: "14px" }}>{data.damage[0]}</span>
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${data.damPercent[0]}%`, backgroundColor: "#3F649B" }}></div>
                  </div>
                </div>
                <div className='col-6 text-center ps-1'>
                  <span className='text-secondary' style={{ fontSize: "14px" }}>{data.damage[1]}</span>
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${data.damPercent[1]}%`, backgroundColor: "gray" }}></div>
                  </div>
                </div>
              </div>
              <div style={{ width: "7%", padding: "5px", alignItems: "center", fontSize: "14px", textAlign: "center" }}>
                <div className='text-secondary fs-sm'>0<br />0 / 0</div>
              </div>
              <div style={{ width: "8%", padding: "5px", alignItems: "center", fontSize: "14px", textAlign: "center" }}>
                <div className='text-secondary fs-sm'>{data.cs[0]}<br />분당 {data.cs[1]}</div>
              </div>
              <div style={{ width: "25%", padding: "5px", alignItems: "center", fontSize: "14px", textAlign: "center" }}>
                {[1, 2, 3, 4, 5, 6].map((no) => (
                  <img key={no} src={`/assets/info/weapon${no}.jpg`} height={25} style={{ borderRadius: "5px", marginRight: "2px", marginBottom: "3px" }} />
                ))}
                <img src="/assets/info/treasure1.png" height={25} style={{ borderRadius: "5px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BattleLose