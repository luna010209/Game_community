import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Terms from './pages/Signup/Terms'
import Signup1 from './pages/Signup/Signup1'
import Signup2 from './pages/Signup/Signup2'
import Signup3 from './pages/Signup/Signup3'
import Login from './pages/Login/Login'
import PersonalInfo from './pages/MyPage/PersonalInfo'
import Note from './pages/MyPage/Note'
import Feed from './pages/Feed/Feed'
import CreateFeed from './pages/Feed/CreateFeed'
import UserInfo from './pages/UserInfo/UserInfo'
import Guild from './pages/Guild/Guild'
import GuildDetail from './pages/Guild/GuildDetail'
import GuildMember from './pages/Guild/GuildMember'
import CreateGuild from './pages/Guild/CreateGuild'
import Announce from './pages/Announce/Announce'
import FAQ from './pages/FAQ/FAQ'
import FAQDetail from './pages/FAQ/FAQDetail'
import CreateFAQ from './pages/FAQ/CreateFAQ'
import UserDetail from './pages/UserInfo/UserDetail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup/terms' element={<Terms/>}/>
          <Route path='/signup/signup1' element={<Signup1/>}/>
          <Route path='/signup/signup2' element={<Signup2/>}/>
          <Route path='/signup/signup3' element={<Signup3/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/my-page' element={<PersonalInfo/>}/>
          <Route path='/my-page/note' element={<Note/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/feed/create' element={<CreateFeed/>}/>
          <Route path='/userinfo' element={<UserInfo/>}/>
          <Route path='/userinfo/:id' element={<UserDetail/>}/>
          <Route path='/guild' element={<Guild/>}/>
          <Route path='/guild/:id' element={<GuildDetail/>}/>
          <Route path='/guild/:id/member' element={<GuildMember/>}/>
          <Route path='/guild/create' element={<CreateGuild/>}/>
          <Route path='/announce' element={<Announce/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/faq/:id' element={<FAQDetail/>}/>
          <Route path='/faq/create' element={<CreateFAQ/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
