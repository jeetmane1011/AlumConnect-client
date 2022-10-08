import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Community from './pages/Community';
import Gallery from './pages/Gallery';
import Profile from './pages/Profile';
import Events from './pages/Events';
import Opportunity from './pages/Opportunity';
import Resources from './pages/Resources';
import SignUp from './pages/SignUp';
import Navbar from './components/Home-Comp/Navbar';
import ChatPage from "./pages/Chatpage";

function App(){

  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/community' element={<Community />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/opportunity' element={<Opportunity />}/>
        <Route path='/resources' element={<Resources />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/chats" element={<ChatPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;