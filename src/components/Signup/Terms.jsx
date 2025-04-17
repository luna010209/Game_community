import React, { useEffect, useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const [allCheck, setAllCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);

  const handleAllCheck = ()=>{
    setAllCheck(!allCheck);
    setCheck1(!allCheck);
    setCheck2(!allCheck);
    setCheck3(!allCheck);
    setCheck4(!allCheck);
    setCheck5(!allCheck);
    setCheck6(!allCheck);
    setCheck7(!allCheck);
    setCheck71(!allCheck);
    setCheck72(!allCheck);
    setCheck73(!allCheck);
  }

  const handleCheck7 = ()=>{
    setCheck7(!check7); 
    if (check7===true) setAllCheck(false);
    setCheck71(!check7);
    setCheck72(!check7);
    setCheck73(!check7);
  }

  const [check71, setCheck71] = useState(false);
  const [check72, setCheck72] = useState(false);
  const [check73, setCheck73] = useState(false);

  useEffect(()=>{
    if (check1 && check2 && check3 && check4 && check5 && check6 && check7)
      setAllCheck(true)
    if (check71 && check72 && check73)
      setCheck7(true)
  })

  const navigator = useNavigate();
  const next = ()=>{
    if (check1 && check2 && check3 && check4 && check5)
      navigator("/signup1")
    else alert("필수 정보를 모두 동의하셔야 합니다!")
  }
  return (
    <div className='dis' style={{backgroundColor: "rgba(4, 26, 44, 0.15)", height: "100vh" }}>
      <div className='col-12 col-lg-10 p-4 bg-white inside'>
        <img src="/assets/signup/lsg.png" className='img d-none d-lg-flex col-5'/>
        <div className='col-12 col-lg-7 dis' style={{color:"#001C41"}}>
          <div className='col-11 col-lg-9'>
            <div className='check-box'>
              <input type='checkbox' className='me-2' style={{ accentColor: "#3F649B", width: "35px", height: "35px" }}
              checked={allCheck} onChange={handleAllCheck}/>
              <label className='fs-3 fw-bold text-decoration-underline'>모두 확인하였으며 동의합니다.</label>
            </div>
            <p>전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며, 개별적으로 동의를 선택 하실 수 있습니다. 선택 항목에 대한 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.</p>
            <div className='img p-4 mb-3'>
              <div className='check-box mb-2'>
                <input type="checkbox" id='1' checked={check1} onChange={()=>{setCheck1(!check1); if (check1===true) setAllCheck(false)}}/>
                <label htmlFor="1" className='fw-bold ms-2'>[필수] 만 14세 이상입니다</label>
              </div>
              <div className='check-box justify-content-between'>
                <div className='check-box mb-2'>
                  <input type="checkbox" id='2' checked={check2} onChange={()=>{setCheck2(!check2); if (check2===true) setAllCheck(false)}}/>
                  <label htmlFor="2" className='fw-bold ms-2'>[필수] LSG 이용약관 동의</label>
                </div>
                <a href="" className='all'>전체
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4 5.80024L19 11.4002L13.4 17.0002M5 5.80024L10.6 11.4002L5 17.0002" stroke="#001C41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className='check-box justify-content-between'>
                <div className='check-box mb-2'>
                  <input type="checkbox" id='3' checked={check3} onChange={()=>{setCheck3(!check3); if (check3===true) setAllCheck(false)}}/>
                  <label htmlFor="3" className='fw-bold ms-2'>[필수] 전자금융거래 이용약관 동의</label>
                </div>
                <a href="" className='all'>전체
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4 5.80024L19 11.4002L13.4 17.0002M5 5.80024L10.6 11.4002L5 17.0002" stroke="#001C41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className='check-box justify-content-between'>
                <div className='check-box mb-2'>
                  <input type="checkbox" id='4' checked={check4} onChange={()=>{setCheck4(!check4); if (check4===true) setAllCheck(false)}}/>
                  <label htmlFor="4" className='fw-bold ms-2'>[필수] 개인정보 수집 및 이용 동의</label>
                </div>
                <a href="" className='all'>전체
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4 5.80024L19 11.4002L13.4 17.0002M5 5.80024L10.6 11.4002L5 17.0002" stroke="#001C41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className='check-box justify-content-between'>
                <div className='check-box mb-2'>
                  <input type="checkbox" id='5' checked={check5} onChange={()=>{setCheck5(!check5); if (check5===true) setAllCheck(false)}}/>
                  <label htmlFor="5" className='fw-bold ms-2'>[필수] 개인정보 제3자 제공 동의</label>
                </div>
                <a href="" className='all'>전체
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4 5.80024L19 11.4002L13.4 17.0002M5 5.80024L10.6 11.4002L5 17.0002" stroke="#001C41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className='check-box justify-content-between'>
                <div className='check-box mb-2'>
                  <input type="checkbox" id='6' checked={check6} onChange={()=>{setCheck6(!check6); if (check6===true) setAllCheck(false)}}/>
                  <label htmlFor="6" className='fw-bold ms-2'>[선택] 마케팅 목적의 개인정보 수집 및 이용 동의</label>
                </div>
                <a href="" className='all'>전체
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4 5.80024L19 11.4002L13.4 17.0002M5 5.80024L10.6 11.4002L5 17.0002" stroke="#001C41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className='check-box justify-content-between'>
                <div className='check-box mb-2'>
                  <input type="checkbox" id='7' checked={check7} onChange={handleCheck7}/>
                  <label htmlFor="7" className='fw-bold ms-2'>[선택] 광고성 정보 수신 동의</label>
                </div>
                <a href="" className='all'>전체
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4 5.80024L19 11.4002L13.4 17.0002M5 5.80024L10.6 11.4002L5 17.0002" stroke="#001C41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className='check-box mb-2 ms-5'>
                <input type="checkbox" id='71' checked={check71} onChange={()=>{setCheck71(!check71); if (check71===true) {setAllCheck(false); setCheck7(false)}}}/>
                <label htmlFor="71" className='fw-bold ms-2'>[선택] 이메일 수신 동의</label>
              </div>
              <div className='check-box mb-2 ms-5'>
                <input type="checkbox" id='72' checked={check72} onChange={()=>{setCheck72(!check72); if (check72===true) {setAllCheck(false); setCheck7(false)}}}/>
                <label htmlFor="72" className='fw-bold ms-2'>[선택] SMS, SNS 수신 동의</label>
              </div>
              <div className='check-box mb-2 ms-5'>
                <input type="checkbox" id='73' checked={check73} onChange={()=>{setCheck73(!check73); if (check73===true) {setAllCheck(false); setCheck7(false)}}}/>
                <label htmlFor="73" className='fw-bold ms-2'>[선택] 앱 푸시 수신 동의</label>
              </div>
            </div>
            <div className='dis'><button type="button" className='submit' onClick={next}>다음</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms