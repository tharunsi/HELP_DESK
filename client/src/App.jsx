import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home'
import Login from './Login'
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

function App() {
 

  return (
    <>
     
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
