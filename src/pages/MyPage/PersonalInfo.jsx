import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ 이거 빠졌으면 꼭 추가!
import axios from 'axios';
import MyPage from './MyPage';
import BottomNavbar from '../../components/Navbar/BottomNavbar';
import './MyPage.css';

const PersonalInfo = () => {
  const [isAuth, setIsAuth] = useState(false); // 🔑 로그인 여부
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ useNavigate는 컴포넌트 안에서만!

  const [userId, setUserId] = useState("");
  const [username, setUn] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [phone, setPhone] = useState("");
  const [basicAdd, setBasicAdd] = useState("");
  const [detailAdd, setDetail] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [lolNick, setLolNick] = useState("");
  const [lolTag, setLolTag] = useState("");

  useEffect(() => {
    axios.get('/api/session-check', { withCredentials: true })
      .then(() => {
        const stored = JSON.parse(localStorage.getItem("loginUser"));
        if (!stored?.userId) throw new Error("사용자 ID 없음");

        axios.get(`/api/user/${stored.userId}`)
          .then(res => {
            const data = res.data;
            setUserId(data.userId);
            setUn(data.userNm || "");
            setNickname(data.niknm || "");
            setEmail(data.email || "");
            setMobile(data.telno1 || "");
            setPhone(data.telno2 || "");
            setBasicAdd(data.baseAddr || "");
            setDetail(data.dtlAddr || "");
            setJob(data.jobNm || "");
            setCountry(data.nation || "");
            setLolNick(data.lolNick || "");
            setLolTag(data.lolTag || "");
            setIsAuth(true); // 인증 통과
          })
          .catch(() => navigate('/login'));
      })
      .catch(() => navigate('/login'))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/user/update', {
      userId,
      userNm: username,
      niknm: nickname,
      email,
      telno1: mobile,
      telno2: phone,
      baseAddr: basicAdd,
      dtlAddr: detailAdd,
      jobNm: job,
      nation: country,
      lolNick,
      lolTag
    })
    .then(() => alert("저장되었습니다!"))
    .catch(() => alert("저장 실패"));
  };

  if (loading) return null; // ✅ 로딩 중일 땐 아무것도 안 그림
  if (!isAuth) return null; // ✅ 인증 안 되면 아무것도 안 그림 (navigate가 처리함)

  return (
    <div>
      <MyPage />
      <div className='overall mb-3'>
        <form onSubmit={handleSubmit} className='user col-12 col-lg-10'>
          <Input label="유저 네임" value={username} setValue={setUn} />
          <Input label="닉네임" value={nickname} setValue={setNickname} />
          <Input label="이메일" value={email} setValue={setEmail} />
          <Input label="연락처1" value={mobile} setValue={setMobile} />
          <Input label="연락처2" value={phone} setValue={setPhone} />
          <Input label="작업" value={job} setValue={setJob} />
          <Input label="국적" value={country} setValue={setCountry} />
          <Input label="롤 닉네임" value={lolNick} setValue={setLolNick} />
          <Input label="롤 태그" value={lolTag} setValue={setLolTag} />

          <div className='d-flex w-100 mb-2 align-items-center'>
            <div className='d-none d-lg-flex col-2 fw-bold align-items-center'>
              기본주소
              <button type='button' className='ms-2 btn btn-outline-secondary'>주소 변경</button>
            </div>
            <div className='col-12 col-lg-10'>
              <input type="text" className="form-control form-input" value={basicAdd} disabled />
            </div>
          </div>

          <Input label="상세주소" value={detailAdd} setValue={setDetail} />

          <div className='text-end w-100'>
            <button type='submit' className='save'>저장</button>
          </div>
        </form>
      </div>
      <BottomNavbar />
    </div>
  );
};

const Input = ({ label, value, setValue }) => (
  <div className='d-flex w-100 mb-2 align-items-center'>
    <div className='d-none d-lg-block col-2 fw-bold'>{label}</div>
    <div className='col-12 col-lg-10'>
      <input
        type="text"
        className='form-control form-input'
        value={value}
        onChange={e => setValue(e.target.value)}
        required
      />
    </div>
  </div>
);

export default PersonalInfo;
