import React, { useState } from 'react'

const Contact = () => {

  const[email,setEmail]=useState();
  const[phonenumber,setPhonenumber]=useState();
  const[sender,setSender]=useState();
  const[message,setMessage]=useState();
  const[recipient,setRecipient]=useState();

  const send_message = (e) => {

    e.preventDefault();

    var formdata = new FormData();
    formdata.append("Sender","Test")
    formdata.append("message",message)
    formdata.append("recipient","0785283918")
    formdata.append("username","benitha")
    formdata.append("password","benitha")

    var requestOptions={
      method:"POST",
      mode:"cors",
      body:formdata,
      follow:"redirect"
    }

    fetch("https://intouchsms.co.rw/sendsms.json", requestOptions)
    .then(response => response.json)
    .then(result => console.log(result))
    .catch(error=>console.log('error',error))
  }
  return (
    <div><div className="container">
    <div className="card90">
      <a className="singup">Get In Touch</a>
      <form className='m-2 gap-2' onSubmit={send_message}>
      <div className="inputBox1 mb-2">
        <input type="text" onChange={(e)=>setEmail(e.target.value)} required />
        <span className="user">Email</span>
      </div>

      <div className="inputBox mb-2">
        <input type="text" onChange={(e)=>setPhonenumber(e.target.value)} required />
        <span>Phone Number</span>
      </div>

      <div className="inputBox mb-2">
        <input type="text" onChange={(e)=>setMessage(e.target.value)} required />
        <span>Message</span>
      </div>

      <button className="enter m-2">Send</button>

      </form>
    </div>
  </div></div>
  )
}

export default Contact