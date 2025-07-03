import React from 'react'

const ForgotPassword = () => {
  return (
     <div className="login-container">
      <div className="forgot-box">
        <span className='fg-span'>Don't worry, Enter your email below and we will send you a link to change password</span>
        <input type="email" placeholder="Email" className="login-input" />
        <button className="login-button">Submit</button><br></br>
        <button className="signup-button">Sign In</button>
        
      </div>
    </div>
  )
}

export default ForgotPassword
