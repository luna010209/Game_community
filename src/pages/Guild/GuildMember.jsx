import React from 'react'
import "./Guild.css"
import Navbar from '../../components/Navbar/Navbar'
import BottomNavbar from '../../components/Navbar/BottomNavbar'
import RightSide from '../../components/Side/RightSide2'
import { useParams } from 'react-router-dom'

const GuildMember = () => {
  const { id } = useParams();
  const dataDefault = [
    { "ranking": "1", "member": "사라", "area": "금천구", "no": "900000" },
    { "ranking": "2", "member": "슈퍼hero", "area": "마포구", "no": "930000" },
    { "ranking": "3", "member": "미연", "area": "동작구", "no": "930000" },
    { "ranking": "4", "member": "Cara", "area": "구로구", "no": "930000" },
  ];
  const dataSample = Array(5).fill(dataDefault).flat();

  const member = [
    { "member": "사라"},
    { "member": "미연"},{ "member": "Cara"},
  ];
  const members = Array(3).fill(member).flat();
  return (
    <div>
      <Navbar />
      <div className='d-flex w-100 mt-2 mb-2 justify-content-center'>
        <div className='col-12 col-lg-10 d-flex'>
          <div className='col-12 col-lg-8 pe-2'>
            <div className='w-100 d-flex justify-content-between mb-2'>
              <button className='feed'>길드 정보</button>
              <a href="/guild/create" role='button' className='create-feed'>
                <img src="/assets/feed/createfeed.svg" height={30} />길드 작성
              </a>
            </div>
            <div className='guild-info w-100 mb-2'>
              <div className='d-none d-lg-block col-3 p-2'>
                <img src="/assets/guild/guild1.png" className='border border-1 border-dark rounded mb-2 w-50' /><br />
                <span className='level'>LV.72</span><br />
                <span style={{ fontSize: "20px", fontWeight: "bolder", color: "black" }}>CHESTNUT</span>
                <div>
                  <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar">20%</div>
                  </div>
                  <p className='text-dark mt-1'>23,130/132,000</p>
                </div>
                <div className='d-flex gap-2'>
                  <a href="#" role='button' className='guild-record col-5'>길드 이력</a>
                  <a href="#" role='button' className='create-team col-5'>팀 생성</a>
                </div>
              </div>
              <div className='col-12 col-lg-9 base-info text-dark p-2'>
                <div className='user-info w-100'>
                  <div className='d-flex'>
                    <div className='title-catalog col-2'>순위</div>
                    <div className='title-catalog col-5'>인원명</div>
                    <div className='title-catalog col-2'>지역</div>
                    <div className='title-catalog col-3'>길드인원</div>
                  </div>
                  <div style={{ cursor: "pointer", height: "300px" }} className='detail'>
                    {dataSample.map((data, idx) => (
                      <div key={idx} className='d-flex text-dark' style={{ background: idx % 2 === 0 ? "" : "#D9D9D9" }} onClick={() => { navigator(`/guild/${idx + 1}`) }}>
                        <div className='one-line col-2 ps-2 pe-2'>{idx+1}</div>
                        <div className='one-line col-5 ps-2 pe-2'><img src={`/assets/guild/guild${idx%6}.jpg`} className='me-1' height={30} />{data.member}</div>
                        <div className='one-line col-2 ps-2 pe-2 justify-content-center'>{data.area}</div>
                        <div className='one-line col-3 ps-2 pe-2 justify-content-center'>{data.no}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex w-100'>
              <div className='col-4 d-flex p-1'>
                <div className='w-100'>
                  <div className='d-flex'>
                    <div className='team-title col-2'>팀A</div>
                    <div className='team-title col-10'>감독:<span className='w-75 text-center'><img src="/assets/guild/guild2.jpg" height={30} className='me-1'/>나야</span></div>
                  </div>
                  <div style={{ cursor: "pointer", height: "350px" }} className='detail'>
                    {members.map((data, idx) => (
                      <div key={idx} className='d-flex text-dark' style={{ background: idx % 2 === 0 ? "" : "#D9D9D9" }} onClick={() => { navigator(`/guild/${idx + 1}`) }}>
                        <div className='one-line col-2 ps-2 pe-2'>{idx+1}</div>
                        <div className='one-line col-10 ps-2 pe-2'><img src={`/assets/guild/guild${idx%6}.jpg`} className='me-1' height={30} />{data.member}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-4 d-flex p-1'>
                <div className='w-100'>
                  <div className='d-flex'>
                    <div className='team-title col-2'>팀B</div>
                    <div className='team-title col-10'>감독:<span className='w-75 text-center'><img src="/assets/guild/guild3.jpg" height={30} className='me-1'/>Ara</span></div>
                  </div>
                  <div style={{ cursor: "pointer", height: "350px" }} className='detail'>
                    {member.map((data, idx) => (
                      <div key={idx} className='d-flex text-dark' style={{ background: idx % 2 === 0 ? "" : "#D9D9D9" }} onClick={() => { navigator(`/guild/${idx + 1}`) }}>
                        <div className='one-line col-2 ps-2 pe-2'>{idx+1}</div>
                        <div className='one-line col-10 ps-2 pe-2'><img src={`/assets/guild/guild${idx%6}.jpg`} className='me-1' height={30} />{data.member}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-4 d-flex p-1'>
                <div className='w-100'>
                  <div className='d-flex'>
                    <div className='team-title col-2'>팀C</div>
                    <div className='team-title col-10'>감독:<span className='w-75 text-center'><img src="/assets/guild/guild4.jpg" height={30} className='me-1'/>나야</span></div>
                  </div>
                  <div style={{ cursor: "pointer", height: "350px" }} className='detail'>
                    {members.map((data, idx) => (
                      <div key={idx} className='d-flex text-dark' style={{ background: idx % 2 === 0 ? "" : "#D9D9D9" }} onClick={() => { navigator(`/guild/${idx + 1}`) }}>
                        <div className='one-line col-2 ps-2 pe-2'>{idx+1}</div>
                        <div className='one-line col-10 ps-2 pe-2'><img src={`/assets/guild/guild${idx%6}.jpg`} className='me-1' height={30} />{data.member}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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

export default GuildMember