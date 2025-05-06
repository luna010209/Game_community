import React, { useEffect, useRef, useState } from 'react'

const Verify = ( {value, setValue, placeholder, setHolder, focusText, blurText, feedback, verifyFb, setVerifyFb, regex, sendRequest1, sendRequest2} ) => {
  const [valid, setValid] = useState("");
  const [fb, setfb] = useState("d-none");
  
  const handleInput = e => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.length === 0) { setValid(""); setfb("d-none"); }
    else if (!regex.test(newValue)) { setValid("is-invalid"); setfb(""); }
    else { setValid("is-valid"); setfb("d-none"); }
  }

  const interval = useRef(null);
  const [verifyArea, setArea] =useState("d-none");
  const [verify, setVerify] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [time, setTimePlay] = useState("d-none");
  const [verifyFail, setFail]=useState("d-none");
  const [verifySuccess, setSuccess]=useState("d-none");
  const formatTime = second => {
    const minutes = Math.floor(second / 60)
    const secs = second % 60
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`
  }

  const verifyButton = async(e) => {
    e.preventDefault();
    if (valid!=="is-valid") return;
    const res1 = await sendRequest1();
    if (res1.status!==200){
      setArea("");
      setVerifyFb(res1);
      return;
    }
    setArea("");
    setTimePlay("");
    setVerify("d-none");
    setFail("d-none");
    setVerifyFb(res1.data);
    if (timeLeft > 0) {
      interval.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval.current)
    } else{
      setTimeLeft(10);
    }
  }

  useEffect(() => {
    if (timeLeft <= 0) {
      setArea("d-none");
      setVerify("");
      setFail("");
    }
  }, [timeLeft]);

  const confirm = (e) => {
    e.preventDefault();
    if (res && res.status === 200){
      setSuccess("");
      setFail("d-none");
      setArea("d-none");
      clearInterval(interval.current);
    } else {
      setFail("");
      setSuccess("d-none");
    }
  }
  
  return (
    <div className='d-flex w-100 flex-wrap mb-2'>
      <div className='w-100 d-flex align-items-start'>
        <div className='w-100 check-box flex-wrap'>
          <input type="text" placeholder={placeholder} className={`form-control form-input ${valid}`} required
            value={value} onChange={handleInput}
            onFocus={() => setHolder(focusText)}
            onBlur={() => !value && setHolder(blurText)} />
          <span className={`${fb}`}>{feedback}</span>
        </div>
        <button type='button' className={`btn btn-outline-secondary col-2 ms-2 ${verify}`} onClick={verifyButton}>인증</button>
      </div>

      <div className={`ps-5 input-group check-box justify-content-end ${verifyArea}`}>
        <div className={`ps-5 mb-1 input-group check-box ${time}`}>
          <input type="text" className="form-control" placeholder="인증코드" required />
          <button className="btn btn-outline-secondary" type="button" onClick={confirm}>확인</button>
          <span className={`ms-2`}>{formatTime(timeLeft)}</span>
        </div>
        <span>{verifyFb}</span>
      </div>
      <span className={`w-100 text-end text-danger ${verifyFail}`}>인증 실패했습니다.</span>
      <span className={`w-100 text-end text-success ${verifySuccess}`}>인증 성공했습니다.</span>
    </div>
  )
}

export default Verify