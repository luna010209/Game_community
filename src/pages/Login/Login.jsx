import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPw] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', {
        userId: id,
        pswd: password
      }, {
        withCredentials: true // 🔥 세션 쿠키 저장
      });

      if (res.data && res.data.success) {
        setMessage(`환영합니다, ${res.data.niknm}님!`);
        localStorage.setItem("loginUser", JSON.stringify(res.data));
        navigate('/');
      } else {
        setMessage(res.data.message || '로그인 실패: 아이디 또는 비밀번호가 틀렸습니다.');
      }
    } catch (err) {
      setMessage('로그인 실패: 서버 오류');
    }
  };

  return (
    <div className='dis' style={{ backgroundColor: "rgba(4, 26, 44, 0.15)", height: "100vh" }}>
      <div className='col-12 col-lg-10 p-4 bg-white inside'>
        <img src="/assets/signup/lsg.png" className='img d-none d-lg-flex col-5' />
        <div className='col-12 col-lg-7 dis' style={{ color: "#001C41" }}>
          <div className='col-11 col-lg-9'>
            <h1 style={{ color: "rgba(4, 26, 44, 0.8)", fontWeight: "bolder", textAlign: "center" }} className='mb-5'>LSG, 환영합니다!</h1>
            <form onSubmit={handleLogin} className='dis flex-wrap'>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="text" placeholder='아이디' className='form-control form-input' required
                  value={id} onChange={e => setId(e.target.value)} />
              </div>
              <div className='w-100 check-box flex-wrap mb-2'>
                <input type="password" placeholder='비밀번호' className='form-control form-input' required
                  value={password} onChange={e => setPw(e.target.value)} />
              </div>
              <div className='w-100 check-box justify-content-between'>
                <b style={{cursor:"pointer"}}>비밀번호 찾기</b>
                <b onClick={() => navigate('/signup/terms')} style={{cursor:"pointer"}}>회원가입</b>
              </div>
              <div className='w-100 check-box justify-content-center'>
                <a href="/#"><img src="" alt="" /></a>
              </div>
              <div className='dis mt-5'><button type='submit' className='submit'>로그인</button></div>
              <p>{message}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
