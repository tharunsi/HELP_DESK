import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { FaPaperclip } from 'react-icons/fa';
import './NewTicket.css';
import ReCAPTCHA from 'react-google-recaptcha';
const SITE_KEY = '6Lc013crAAAAAFl6FlcBEOoGw5qnQFU_POjO8Qrq';

const NewTicket = () => {
  return (
    <div className="ticket-layout">
      <Header />
      <Sidebar />
      <main className="main-content">
        <h2>Create New Ticket</h2>
        <form className="ticket-form">
          <div className="row">
            <label>Ticket No.<input type="text" /></label>
            <label>Date<input type="date" /></label>
          </div>
          <div className="row">
            <label>Name<input type="text" /></label>
            <label>Department<input type="text" /></label>
          </div>
          <label className="full">Subject<input type="text" /></label>
          <div className="row">
            <label>Category<input type="text" /></label>
            <label className="description">
              Description
              <textarea />
              <FaPaperclip className="attach-icon" />
            </label>
          </div>
          <div className="row">
            <label>Type<input type="text" /></label>
            <label>Priority<input type="text" /></label>
          </div>
          <div className="captcha-submit">
            <ReCAPTCHA sitekey={SITE_KEY}  />
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default NewTicket;
