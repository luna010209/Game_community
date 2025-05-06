import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import "./Signup.css";

const Signup2 = () => {
  const [fullname, setName] = useState("");

  const [mobile, setMobile] = useState("")
  const [validMobile, setValidMobile] = useState("");
  const [fbMobile, setfbMobile] = useState("d-none");
  const [mobileHolder, setHolder] = useState("휴대폰")
  const mobileInput = e => {
    const value = e.target.value;
    setMobile(value);
    const mobileRegex = /^010-\d{4}-\d{4}$/;

    if (value.length === 0) { setValidMobile(""); setfbMobile("d-none"); }
    else if (!mobileRegex.test(value)) { setValidMobile("is-invalid"); setfbMobile(""); }
    else { setValidMobile("is-valid"); setfbMobile("d-none"); }
  }

  const [phone, setPhone] = useState("");
  const [phoneHolder, setPhoneHolder] = useState("전화번호");
  const [validPhone, setValidPhone] = useState("");
  const [fbPhone, setfbPhone] = useState("d-none");
  const phoneInput = e => {
    const value = e.target.value;
    setPhone(value);
    const phoneRegex = /^02-\d{3,}-\d{3,}$/;

    if (value.length === 0) { setValidPhone(""); setfbPhone("d-none"); }
    else if (!phoneRegex.test(value)) { setValidPhone("is-invalid"); setfbPhone(""); }
    else { setValidPhone("is-valid"); setfbPhone("d-none"); }
  }

  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");

  const navigator = useNavigate()
  const location = useLocation(); // 👈 이거 추가
  const next = e => {
    e.preventDefault();

    if (validMobile === "is-valid" && validPhone === "is-valid") {
      navigator("/signup/signup3", {
        state: {
          ...location.state, // ← Signup1에서 받은 값 유지
          fullname,
          mobile,
          phone,
          job,
          country
        }
      });
    } else {
      alert("전화번호 확인이 필요합니다!");
    }
  };

  return (
    <div className='dis' style={{ backgroundColor: "rgba(4, 26, 44, 0.15)", height: "100vh" }}>
      <div className='col-12 col-lg-10 bg-white inside p-4'>
        <img src="/assets/signup/lsg.png" className='img d-none d-lg-flex col-5' />
        <div className='col-12 col-lg-7 dis' style={{ color: "#001C41" }}>
          <div className='col-11 col-lg-9'>
            <h1 style={{ color: "rgba(4, 26, 44, 0.8)", fontWeight: "bolder", textAlign: "center" }} className='mb-5'>회원가입</h1>
            <form action="submit" onSubmit={next} className='dis flex-wrap'>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="text" placeholder='이름' className={`form-control form-input`} required
                  value={fullname} onChange={e => { setName(e.target.value) }} />
              </div>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="text" placeholder={mobileHolder} className={`form-control form-input ${validMobile}`} required
                  value={mobile} onChange={mobileInput}
                  onFocus={() => setHolder("010-____-____")}
                  onBlur={() => !mobile && setHolder("휴대폰")} />
                <span className={`${fbMobile}`}>"010-____-____"양식으로 입력하십시오.</span>
              </div>
              <div className='w-100 check-box flex-wrap mb-2'>
                <div className='w-100 check-box mb-1'>
                  <input type="text" placeholder={phoneHolder} className={`form-control form-input ${validPhone}`} required
                    value={phone} onChange={phoneInput}
                    onFocus={() => setPhoneHolder("02-____-____")}
                    onBlur={() => !phone && setPhoneHolder("전화번호")} />
                  <span className={`${fbPhone}`}>"02-____-____"양식으로 입력하십시오.</span>
                  {/* <button type='button' className={`btn btn-outline-secondary col-2 ms-2 ${firstVerify}`} onClick={verifyButton}>인증</button> */}
                </div>

              </div>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="text" placeholder='직업' className={`form-control form-input`} required
                  value={job} onChange={e => { setJob(e.target.value) }} />
              </div>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="text" placeholder='국적' className={`form-control form-input`} required
                  value={country} onChange={e => { setCountry(e.target.value) }} />
              </div>
              <div className='dis mt-5'><button className='submit'>다음</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup2