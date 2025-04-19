import React, { useEffect, useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [fbId, setfbId] = useState("d-none");
  const [validId, setValidId] = useState("");
  const [id, setId] = useState("");
  const handleId = e=>{
    const value = e.target.value;
    setId(value);

    const idRegex = /^(?=.*[A-Za-z가-힣])(?=.*\d)[A-Za-z가-힣\d]{4,10}$/;

    if (value.length ===0) {setValidId(""); setfbId("d-none");}
    else if (!idRegex.test(value)) {setValidId("is-invalid"); setfbId("");}
    else {setValidId("is-valid"); setfbId("d-none");}
  }

  const [fbNickname, setfbNn]= useState("d-none");
  const [validNickname, setValidNn] = useState("");
  const [nickname, setNickname] = useState("");
  const handleNickname = e=>{
    const value = e.target.value;
    setNickname(value);

    const nicknameRegex = /^(?=.*[A-Za-z가-힣])[A-Za-z가-힣\d]{4,10}$/;

    if (value.length ===0) {setValidNn(""); setfbNn("d-none");}
    else if (!nicknameRegex.test(value)) {setValidNn("is-invalid"); setfbNn("");}
    else {setValidNn("is-valid"); setfbNn("d-none");}
  }

  const [fbPw, setfbPw]= useState("d-none");
  const [validPw, setValidPw] = useState("");
  const [password, setPw] = useState("");
  const handlePassword = e=>{
    const value = e.target.value;
    setPw(value);

    const pwRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*/?])[A-Za-z\d!@#$%^&*/?]{6,15}$/;

    if (value.length ===0) {setValidPw(""); setfbPw("d-none");}
    else if (!pwRegex.test(value)) {setValidPw("is-invalid"); setfbPw("");}
    else {setValidPw("is-valid"); setfbPw("d-none");}
  }

  const [fbPwCf, setfbPwCf]= useState("d-none");
  const [validPwCf, setValidPwCf] = useState("");
  const [passwordCf, setPwCf] = useState("");
  const handlePwCf = e=>{
    const value = e.target.value;
    setPwCf(value);

    if (value.length ===0) {setValidPwCf(""); setfbPwCf("d-none");}
    else if (value!==password) {setValidPwCf("is-invalid"); setfbPwCf("");}
    else {setValidPwCf("is-valid"); setfbPwCf("d-none");}
  }

  const [email, setEmail]= useState("");
  const [validEmail, setValidEmail]= useState("");
  const [firstVerify, setFirst] = useState("");
  const [verify, setVerify] = useState("d-none");
  const [timeLeft, setTimeLeft] = useState(10); 
  const [time, setTimePlay] = useState("d-none");
  const formatTime = second =>{
    const minutes = Math.floor(second/60)
    const secs = second%60
    return `${minutes}:${secs < 10?"0":""}${secs}`
  }
  const [resend, setResend]=useState("d-none");
  const verifyButton = e=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setValidEmail("is-invalid");
      return;
    }
    setValidEmail("");
    setVerify("");
    setTimePlay("");
    setFirst("d-none");
    if (timeLeft>0){
      const interval = setInterval(()=>{
        setTimeLeft((prevTime)=>prevTime-1);
      }, 1000);
      return ()=> clearInterval(interval)
    }
  }

  useEffect(()=>{
    if (timeLeft <=0){
      setTimePlay("d-none");
      setResend("");
    }
  }, [timeLeft]);

  const resendButton = ()=>{
    setTimePlay("");
    setResend("d-none");
    setTimeLeft(10);
  }

  const confirm = ()=>{
    setVerify("d-none");
    setValidEmail("is-valid");
  }

  const navigator = useNavigate()
  const next = (e)=>{
    e.preventDefault();
    if (validId==="is-valid" && validNickname==="is-valid" && validPw==="is-valid"
      && validPwCf==="is-valid" && validEmail==="is-valid"
    ) navigator("/signup/signup2");
    else alert("다시 확인해주세요!")
  }

  return (
    <div className='dis' style={{backgroundColor: "rgba(4, 26, 44, 0.15)", height: "100vh" }}>
      <div className='col-12 col-lg-10 p-4 bg-white inside'>
        <img src="/assets/signup/lsg.png" className='img d-none d-lg-flex col-5'/>
        <div className='col-12 col-lg-7 dis' style={{color:"#001C41"}}>
          <div className='col-11 col-lg-9'>
            <h1 style={{color:"rgba(4, 26, 44, 0.8)", fontWeight:"bolder", textAlign:"center"}} className='mb-5'>회원가입</h1>
            <form action="submit" className='dis flex-wrap' onSubmit={next}>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="text" placeholder='아이디' className={`form-control ${validId} form-input`} required
                value={id} onChange={handleId}/>
                <span className={`${fbId}`}>죄송합니다. 아이디는 4~10자의 문자(한글/영문) 및 숫자 조합으로 입력하셔야 합니다.</span>
              </div>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="text" placeholder='닉네임' className={`form-control ${validNickname} form-input`} required
                value={nickname} onChange={handleNickname}/>
                <span className={`${fbNickname}`}>죄송합니다. 닉네임는 4~10자의 문자(영문/한글글)로 입력하셔야 합니다.</span>
              </div>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="password" placeholder='비밀번호' className={`form-control ${validPw} form-input`} required
                value={password} onChange={handlePassword}/>
                <span className={`${fbPw}`}>죄송합니다. 비밀번호는 6~15자의 영문 대문자, 소문자, 숫자 및 특수문자 조합으로 입력하셔야 합니다.</span>
              </div>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="password" placeholder='비밀번호 확인' className={`form-control ${validPwCf} form-input`} required
                value={passwordCf} onChange={handlePwCf}/>
                <span className={`${fbPwCf}`}>죄송합니다. 비밀번호와 일치하지 않습니다.</span>
              </div>
              <div className='w-100 check-box flex-wrap mb-2'>
                <div className='w-100 check-box mb-1'>
                  <input type="email" placeholder='이메일' className={`form-control form-input ${validEmail}`} required
                  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                  <button type='button' className={`btn btn-outline-secondary col-2 ms-2 ${firstVerify}`} onClick={verifyButton}>인증</button>
                </div>
                <div className={`ps-5 input-group check-box justify-content-end ${verify}`}>
                  <div className={`ps-5 input-group check-box ${time}`}>
                    <input type="text" className="form-control" placeholder="인증코드" required/>
                    <button className="btn btn-outline-secondary" type="button" onClick={confirm}>확인</button>
                    <span className={`ms-2`}>{formatTime(timeLeft)}</span>
                  </div>
                  <button className={`btn btn-outline-secondary ${resend}`} type="button" onClick={resendButton}>다시 인증</button>
                </div>
              </div>
              <div className='dis mt-5'><button type='submit' className='submit'>다음</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup