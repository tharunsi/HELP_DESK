import React from 'react'

const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Helpdesk System</h2>
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <input type="email" placeholder="Email" className="login-input" />
        <button className="signup-button">Sign Up</button>
        <div className="login-footer">
         <span>Already have an account?</span>
          <span className="signup">Sign In</span>
        </div>
      </div>
    </div>
  )
}

export default Signup
