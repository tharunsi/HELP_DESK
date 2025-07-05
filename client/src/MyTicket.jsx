import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './MyTicket.css';

const ticketData = [
  {
    ticketNo: '1234',
    subject: 'Login issue',
    status: 'In Progress',
    support: 'Tech support',
    date: '13/08/21',
    rate: '☆☆☆☆☆',
    title: 'Login Issue',
    description: 'User unable to log in with correct credentials.',
    category: 'Authentication',
    type: 'Bug',
    priority: 'High',
    attachment: 'screenshot.png'
  },
  {
    ticketNo: '1124',
    subject: 'New ticket issue',
    status: 'On hold',
    support: 'Operation Team',
    date: '14/08/21',
    rate: '☆☆☆☆☆',
    title: 'Ticket not creating',
    description: 'Ticket form not submitting.',
    category: 'UI',
    type: 'Bug',
    priority: 'Medium',
    attachment: 'form-error.png'
  },
  
];

const MyTicket = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const openModal = (ticket) => setSelectedTicket(ticket);
  const closeModal = () => setSelectedTicket(null);

  return (
    <div className="myticket-container">
      <Header />
      <Sidebar />

      <main className="ticket-content">
        <h2 className="ticket-heading">List of Ticket</h2>

        <div className="ticket-controls">
          <input className="search-box" placeholder="Find ticket" />
          <select className="entries-dropdown">
            <option value="10">Show: 10 Entries</option>
            <option value="25">Show: 25 Entries</option>
          </select>
        </div>

        <table className="ticket-table">
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Support by</th>
              <th>Date</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {ticketData.map(ticket => (
              <tr key={ticket.ticketNo}>
                <td>
                  <button className="ticket-link" onClick={() => openModal(ticket)}>
                    {ticket.ticketNo}
                  </button>
                </td>
                <td>{ticket.subject}</td>
                <td>
                  <span className={`badge ${ticket.status === 'Closed' ? 'dark' : ticket.status === 'On hold' ? 'navy' : 'green'}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.support}</td>
                <td>{ticket.date}</td>
                <td>{ticket.rate}</td>
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
            <p><strong>Ticket No:</strong> {selectedTicket.ticketNo}</p>
            <p><strong>Date:</strong> {selectedTicket.date}</p>
            <p><strong>Name:</strong> {selectedTicket.name || 'N/A'}</p>
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

export default MyTicket;
