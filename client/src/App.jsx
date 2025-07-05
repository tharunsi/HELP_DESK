import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './Home'
import Login from './Login'
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';
import DashboardOperationTeam from './DashboardOperationTeam';
import NewTicket from './NewTicket';
import MyTicket from './MyTicket';
import UserProfile from './UserProfile';
import EditAccount from './EditAccount';

function App() {
 

  return (
    <>
     
         <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboardop" element={<DashboardOperationTeam />}></Route>
        <Route path="/newticket" element={<NewTicket />}></Route>
        <Route path="/myticket" element={<MyTicket />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/usereditprofile" element={<EditAccount />}></Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
