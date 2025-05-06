import React, { useEffect, useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import Inputform from '../../components/Input/Inputform';
import Verify from '../../components/Input/Verify';
import { sendSms } from '../../services/verify/Verify';

const Signup = () => {
  const [id, setId] = useState("");
  const [validId, setValidId] = useState("");

  const [nickname, setNickname] = useState("");
  const [validNickname, setValidNn] = useState("");

  const [password, setPw] = useState("");
  const [validPw, setValidPw] = useState("");

  const [fbPwCf, setfbPwCf] = useState("d-none");
  const [validPwCf, setValidPwCf] = useState("");
  const [passwordCf, setPwCf] = useState("");
  const handlePwCf = e => {
    const value = e.target.value;
    setPwCf(value);

    if (value.length === 0) { setValidPwCf(""); setfbPwCf("d-none"); }
    else if (value !== password) { setValidPwCf("is-invalid"); setfbPwCf(""); }
    else { setValidPwCf("is-valid"); setfbPwCf("d-none"); }
  }

  const [mobile, setMobile] = useState("");
  const [mobileHolder, setHolder] = useState("휴대폰");
  const [mobileFb, setMobileFb] = useState("");

  const navigator = useNavigate();
  const next = (e) => {
    e.preventDefault();
    if (
      validId === "is-valid" &&
      validNickname === "is-valid" &&
      validPw === "is-valid" &&
      validPwCf === "is-valid" &&
      validEmail === "is-valid"
    ) {
      navigator("/signup/signup2", {
        state: {
          userId: id,
          userNm: "", // 이름은 2단계에서 입력
          pswd: password,
          niknm: nickname,
          email: email,
        },
      });
    } else {
      alert("다시 확인해주세요!");
    }
  };
  return (
    <div className='dis' style={{ backgroundColor: "rgba(4, 26, 44, 0.15)", height: "100vh" }}>
      <div className='col-12 col-lg-10 p-4 bg-white inside'>
        <img src="/assets/signup/lsg.png" className='img d-none d-lg-flex col-5' />
        <div className='col-12 col-lg-7 dis' style={{ color: "#001C41" }}>
          <div className='col-11 col-lg-9'>
            <h1 style={{ color: "rgba(4, 26, 44, 0.8)", fontWeight: "bolder", textAlign: "center" }} className='mb-5'>회원가입</h1>
            <form action="submit" className='dis flex-wrap' onSubmit={next}>
              <Inputform
                placeholder='아이디'
                value={id}
                setValue={setId}
                feedback='죄송합니다. 아이디는 4~10자의 문자(한글/영문) 및 숫자 조합으로 입력하셔야 합니다.'
                regex={/^(?=.*[A-Za-z가-힣])(?=.*\d)[A-Za-z가-힣\d]{4,10}$/}
                type={"text"}
                valid={validId}
                setValid={setValidId}
              />
              <Inputform
                placeholder='닉네임'
                value={nickname}
                setValue={setNickname}
                feedback='죄송합니다. 닉네임는 4~10자의 문자(영문/한글글)로 입력하셔야 합니다.'
                regex={/^(?=.*[A-Za-z가-힣])[A-Za-z가-힣\d]{4,10}$/}
                type={"text"}
                valid={validNickname}
                setValid={setValidNn}
              />
              <Inputform
                placeholder='비밀번호'
                value={password}
                setValue={setPw}
                feedback='죄송합니다. 비밀번호는 6~15자의 영문 대문자, 소문자, 숫자 및 특수문자 조합으로 입력하셔야 합니다.'
                regex={/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*/?])[A-Za-z\d!@#$%^&*/?]{6,15}$/}
                type={"password"}
                valid={validPw}
                setValid={setValidPw}
              />
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="password" placeholder='비밀번호 확인' className={`form-control ${validPwCf} form-input`} required
                  value={passwordCf} onChange={handlePwCf} />
                <span className={`${fbPwCf}`}>죄송합니다. 비밀번호와 일치하지 않습니다.</span>
              </div>
              <Verify
                value={mobile}
                setValue={setMobile}
                placeholder={mobileHolder}
                setHolder={setHolder}
                focusText={"010-____-____"}
                blurText={"휴대폰"}
                feedback={'"010-____-____"양식으로 입력하십시오.'}
                verifyFb={mobileFb}
                setVerifyFb={setMobileFb}
                regex={/^010-\d{4}-\d{4}$/}
                sendRequest1={()=>sendSms({"telno":mobile})}
              />
              <div className='dis mt-5'><button type='submit' className='submit'>다음</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup