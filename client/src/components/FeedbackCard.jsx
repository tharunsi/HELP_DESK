import React from 'react';
import './FeedbackCard.css';
import { FaStar } from 'react-icons/fa';

const FeedbackCard = () => {
  return (
    <div className="feedback-card">
      <h4>Give Your Feedback</h4>
      <textarea placeholder="[Lorem Ipsum]" className="feedback-text" />
      <div className="star-rating" style={{ opacity: 0.5 }}><FaStar /><FaStar /> <FaStar /> <FaStar /> <FaStar  /></div>
      
      <button className="submit-feedback">Submit Feedback</button>
    </div>
  );
};

export default FeedbackCard;
