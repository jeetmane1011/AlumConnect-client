import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Profile from './pages/Profile';
import Events from './pages/Events';
import Opportunity from './pages/Opportunity';
import Resources from './pages/Resources';
import SignUp from './pages/SignUp';
import Community from './pages/Community';
import ChatProvider from './Context/ChatProvider';
import Layout from './components/Home-Comp/Layout';
import PrivateRoute from './components/Login-Comp/PrivateRoute';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './Context/AuthProvider.js';


function App(){

  return(
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home />}/>
                <Route path='/community' element={<PrivateRoute>
                    <Community />
                  </PrivateRoute>}/>
                <Route path='/Profile' element={<Profile />}/>
                <Route path='/events' element={<Events />}/>
                <Route path='/opportunity' element={<Opportunity />}/>
                <Route path='/resources' element={<Resources />}/>          
                <Route path='/gallery' element={<Gallery />}/>
              </Route>
                <Route path='/signup' element={<SignUp />}/>
            </Routes>
          </ChatProvider>
        </AuthProvider>

      </BrowserRouter>
    </ChakraProvider>

  );
}

export default App;