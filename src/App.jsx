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

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/navbar' element={<Navbar />}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/signup1' element={<Signup1/>}/>
          <Route path='/signup2' element={<Signup2/>}/>
          <Route path='/signup3' element={<Signup3/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/my-page' element={<PersonalInfo/>}/>
          <Route path='/note' element={<Note/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/create-feed' element={<CreateFeed/>}/>
          <Route path='/user-info' element={<UserInfo/>}/>
          <Route path='/guild' element={<Guild/>}/>
          <Route path='/guild/:id' element={<GuildDetail/>}/>
          <Route path='/guild/:id/member' element={<GuildMember/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
