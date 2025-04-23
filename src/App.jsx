import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Terms from './components/Signup/Terms'
import Signup1 from './components/Signup/Signup1'
import Signup2 from './components/Signup/Signup2'
import Signup3 from './components/Signup/Signup3'
import Login from './components/Login/Login'
import PersonalInfo from './components/MyPage/PersonalInfo'
import Note from './components/MyPage/Note'
import Feed from './components/Feed/Feed'
import CreateFeed from './components/Feed/CreateFeed'
import UserInfo from './components/UserInfo/UserInfo'
import Guild from './components/Guild/Guild'
import GuildDetail from './components/Guild/GuildDetail'
import GuildMember from './components/Guild/GuildMember'
import CreateGuild from './components/Guild/CreateGuild'
import Announce from './components/Announce/Announce'
import FAQ from './components/FAQ/FAQ'
import FAQDetail from './components/FAQ/FAQDetail'
import CreateFAQ from './components/FAQ/CreateFAQ'
import UserDetail from './components/UserInfo/UserDetail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/navbar' element={<Navbar />}/>
          <Route path='/signup/terms' element={<Terms/>}/>
          <Route path='/signup/signup1' element={<Signup1/>}/>
          <Route path='/signup/signup2' element={<Signup2/>}/>
          <Route path='/signup/signup3' element={<Signup3/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/my-page' element={<PersonalInfo/>}/>
          <Route path='/my-page/note' element={<Note/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/feed/create' element={<CreateFeed/>}/>
          <Route path='/user-info' element={<UserInfo/>}/>
          <Route path='/user-info/:id' element={<UserDetail/>}/>
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
