import React, { useState } from 'react'
import "./candidateFile.css"
import { Email, Phone } from '@mui/icons-material';
import { Email_received_Empty, Email_sent_Empty, Email_white, Incoming_call_Empty, LinkedIn_message_received_Empty, LinkedIn_message_sent_Empty, Outgoing_call_Empty, SMS_received_Empty, SMS_sent_Empty, tick_box_empty } from '../../data/icons';
import message from "../../data/messageHistory.json"
const CandidateFile = () => {
    const [emailContent, setEmailContent] = useState('');

  const handleEmailChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
}
const StatusBtn = ({status}) =>{
    return <button className={status} >{status!=="Message"&&<img src={tick_box_empty} alt={status+"Icon"} />}<span>{status}</span></button>
}
  return (
    <div className='candidate-file'>
        <form onSubmit={handleSubmit} className='candidate-file-email-form'>
        <label htmlFor="email"></label>
        <textarea
          id="email"
          className='lines-textarea'
          name="email"
          value={emailContent}
          onChange={handleEmailChange}
        ></textarea>
        <div className='contact-icons-container'>
            <div className='left'>
                <img src={Incoming_call_Empty} alt={"contact-icons-container"} />
                <img src={Outgoing_call_Empty} alt="Outgoing_call_Empty" />
                <img src={Email_received_Empty} alt="Email_received_Empty" />
                <img src={Email_sent_Empty} alt="Email_sent_Empty" />
                <img src={LinkedIn_message_received_Empty} alt="LinkedIn_message_received_Empty" />
                <img src={LinkedIn_message_sent_Empty} alt="LinkedIn_message_sent_Empty" />
                <img src={SMS_received_Empty} alt="SMS_received_Empty" />
                <img src={SMS_sent_Empty} alt="SMS_sent_Empty" />
            </div>
            <div className='right'>
             <img src={Email_white} alt="Email_white" />
            </div>     
        </div>
      </form>
      <div className='candidate-file-message-history'>
        <div className='message-history-buttons'>
            <StatusBtn status={"Open"} />
            <StatusBtn status={"Current"} />
            <StatusBtn status={"Finished"} />
            <StatusBtn status={"Closed"} />
            <StatusBtn status={"Message"} />
        </div>
        {message.messageHistory.map((message, index) => (
        <div className='message-history-content' key={index}>
          <div className={`message-header ${message.header.status}`}>
            <img src={tick_box_empty} alt="" />
            <span className='info'>{message.header.title}</span>
            <span className='month'>{message.header.duration}</span>
          </div>
          {message.body.map((el)=> 
                      <div className='message-body'>
                              <p className='info'>{el.interests}</p>
                              <p className='info'>
                                <span>{el.details.dailyRate}</span>
                                <span>{el.details.availability}</span>
                                <span>{el.details.date}</span>
                                <span>{el.details.reference}</span>
                                <img src={Outgoing_call_Empty} alt="" width={20} />
                              </p>
                     </div>
          )}

        </div>
      ))}
      </div>
    </div>
  )
}

export default CandidateFile