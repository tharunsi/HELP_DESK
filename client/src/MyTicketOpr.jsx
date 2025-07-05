import React from 'react';
import Header from './components/Header';

import Footer from './components/Footer';
import { FaDownload, FaUsers, FaEye } from 'react-icons/fa';
import './MyTicket.css';
import SidebarOperationTeam from './components/SidebarOprTeam';
import { useState } from 'react';

const tickets = [
  { id: '1234', subject: 'Login issue', category: 'Access issue', priority: 'High', date: '13/08/21', status: 'In Progress', description: 'User unable to log in with correct credentials.',
    support: 'Tech Support',
    title: 'Login Issue',
    type: 'Bug',
    attachment: 'screenshot.png', },
  { id: '1124', subject: 'New ticket issue', category: 'Access issue', priority: 'Medium', date: '14/08/21', status: 'On hold' , description: 'User unable to log in with correct credentials.',
    support: 'Tech Support',
    title: 'Login Issue',
    type: 'Bug',
    attachment: 'screenshot.png',},
  { id: '1224', subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21', status: 'Closed', description: 'User unable to log in with correct credentials.',
    support: 'Tech Support',
    title: 'Login Issue',
    type: 'Bug',
    attachment: 'screenshot.png', },
  { id: '1244', subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21', status: 'In Progress', description: 'User unable to log in with correct credentials.',
    support: 'Tech Support',
    title: 'Login Issue',
    type: 'Bug',
    attachment: 'screenshot.png', },
  { id: '1114', subject: 'Login issue', category: 'Access issue', priority: 'High', date: '3/08/21', status: 'In Progress', description: 'User unable to log in with correct credentials.',
    support: 'Tech Support',
    title: 'Login Issue',
    type: 'Bug',
    attachment: 'screenshot.png', },
];

const getStatusClass = (status) => {
  switch (status) {
    case 'In Progress': return 'green';
    case 'On hold': return 'blue';
    case 'Closed': return 'black';
    default: return 'badge';
  }
};

const MyTicketOpr = () => {
     const [selectedTicket, setSelectedTicket] = useState(null);

  const openModal = (ticket) => setSelectedTicket(ticket);
  const closeModal = () => setSelectedTicket(null);

  return (
    <div className="myticket-container">
      <Header />
      <SidebarOperationTeam />

      <main className="ticket-content">
        <h2 className="ticket-heading">My Ticket</h2>

        <div className="ticket-controls">
          <input className="search-box" placeholder="Find ticket" />
          <select className="entries-dropdown">
            <option value="10">Show: 10</option>
            <option value="25">Show: 25</option>
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
              <th>Status</th>
              <th>Person in charge</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>
                  <button className="ticket-link" onClick={() => openModal(ticket)}>
                    {ticket.id}
                  </button>
                </td>
                <td>{ticket.subject}</td>
                <td>{ticket.category}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.date}</td>
                <td><span className={getStatusClass(ticket.status)}>{ticket.status}</span></td>
                <td>{ticket.support}</td>
                <td className="action-icons">
                  <FaEye title="View" />
                  <FaUsers title="Assign" />
                  <FaDownload title="Download" />
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

      {selectedTicket && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h3>Ticket Details</h3>
            <p><strong>Ticket No:</strong> {selectedTicket.id}</p>
            <p><strong>Date:</strong> {selectedTicket.date}</p>
            <p><strong>Dept:</strong> {selectedTicket.support}</p>
            <p><strong>Title:</strong> {selectedTicket.title}</p>
            <p><strong>Description:</strong> {selectedTicket.description}</p>
            <p><strong>Category:</strong> {selectedTicket.category}</p>
            <p><strong>Type:</strong> {selectedTicket.type}</p>
            <p><strong>Priority:</strong> {selectedTicket.priority}</p>
            <p><strong>Status:</strong> {selectedTicket.status}</p>
            <p><strong>Attachment:</strong> {selectedTicket.attachment}</p>

            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTicketOpr;
