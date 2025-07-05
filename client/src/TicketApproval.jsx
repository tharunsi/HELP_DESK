import React from 'react';

import Footer from './components/Footer';
import './TicketApproval.css';
import { FaCheck, FaTimes } from 'react-icons/fa';
import SidebarOperationTeam from './components/SidebarOprTeam';
import HeaderOpr from './components/HeaderOpr';


const tickets = [
  { id: 1234, subject: 'Login issue', category: 'Access issue', priority: 'High', date: '13/08/21' },
  { id: 1124, subject: 'New ticket issue', category: 'Access issue', priority: 'Medium', date: '14/08/21' },
  { id: 1224, subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21' },
  { id: 1244, subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21' },
  { id: 1114, subject: 'Login issue', category: 'Access issue', priority: 'High', date: '3/08/21' },
];

const TicketApproval = () => {
  return (
    <div className="ticket-approval-container">
      <HeaderOpr />
      <SidebarOperationTeam />
      <main className="ticket-approval-content">
        <h2>Ticket Approval</h2>

        <div className="ticket-controls">
          <input placeholder="Find ticket" className="search-box" />
          <select className="entries-dropdown">
            <option>Show: 10</option>
            <option>Show: 25</option>
          </select>
        </div>

        <table className="ticket-table">
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Subject</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Action</th>
              <th>Assign to</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.id}>
                <td><a href="#">{ticket.id}</a></td>
                <td>{ticket.subject}</td>
                <td>{ticket.category}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.date}</td>
                <td>
                  <button className="approve"><FaCheck /></button>
                  <button className="reject"><FaTimes /></button>
                </td>
                <td>
                  <select className="assign-dropdown">
                    <option value="">Select</option>
                    <option value="tech">Tech</option>
                    <option value="operation">Operation</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <span>«</span> <span className="active">1</span> <span>»</span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TicketApproval;
