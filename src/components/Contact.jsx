import React from 'react'

const Contact = () => {
  return (
    <div><div className="container">
    <div className="card90">
      <a className="singup">Get In Touch</a>
      <div className="inputBox1">
        <input type="text" required />
        <span className="user">Email</span>
      </div>

      <div className="inputBox">
        <input type="text" required />
        <span>Phone Number</span>
      </div>

      <div className="inputBox">
        <input type="password" required />
        <span>Message</span>
      </div>

      <button className="enter">Send</button>
    </div>
  </div></div>
  )
}

export default Contact