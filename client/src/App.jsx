import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login'
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';
import DashboardOperationTeam from './DashboardOperationTeam';
import NewTicket from './NewTicket';
import MyTicket from './MyTicket';
import UserProfile from './UserProfile';
import EditAccount from './EditAccount';
import TicketApproval from './TicketApproval';
import MyTicketOpr from './MyTicketOpr';
import OperatorProfile from './OperationProfile';

function App() {
 

  return (
    <>
     
         <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/user-dashboard" element={<Dashboard />}></Route>
        <Route path="/operation-dashboard" element={<DashboardOperationTeam />}></Route>
        <Route path="/newticket" element={<NewTicket />}></Route>
        <Route path="/myticket" element={<MyTicket />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/usereditprofile" element={<EditAccount />}></Route>
        <Route path="/ticketapproval" element={<TicketApproval />}></Route>
        <Route path="/newticket-opr" element={<MyTicketOpr />}></Route>
        <Route path="/operatorprofile" element={<OperatorProfile />}></Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
