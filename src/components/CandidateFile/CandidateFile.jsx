import React, { useState } from 'react'
import "./candidateFile.css"
import { ArrowDropDownCircleRounded, Email, Phone, TaskAlt } from '@mui/icons-material';
import { Arrow_Empty, Arrow_Filled, Availabilities_Filled, Availabilities_Full_green, Availabilities_Green_border, Cross, Email_received_Empty, Email_sent_Empty, Email_white, Incoming_call_Empty, LinkedIn_message_received_Empty, LinkedIn_message_sent_Empty, Outgoing_call_Empty, Physical_meeting_Empty, Physical_meeting_Filled, SMS_received_Empty, SMS_sent_Empty, Salaries_Filled, Salaries_Full_green, Salaries_Green_border, Star_Empty, Star_Filled, Star_Green_border, Voicemail_Empty, tick_box_empty } from '../../data/icons';
import message from "../../data/messageHistory.json"
const CandidateFile = () => {
    const [emailContent, setEmailContent] = useState('');
    const [selectedIcon, setSelectedIcon] = useState(null);

    const [readMore, setReadMore] = useState(false);
    const [activeMenu, setactiveMenu] = useState(null);

    const [fetchedIcon, setfetchedIcon] = useState(null);

    const [isSelected, setIsSelected] = useState(false);
    const [selectedAvailibility, setSelectedcdAvailibility] = useState(false);
    const [selectedSalary, setSelectedcdSalary] = useState(false);
    const [selectedStar, setSelectedcdStar] = useState(false);
    const [messageHistory, setMessageHistory] = useState(message.messageHistory);

  const handleReadMore = (index) =>{
    setReadMore(prev => activeMenu !== index || !prev);
    setactiveMenu(index)
  }
  const handleEmailChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      content:emailContent,
      important: selectedStar,
      showAvailability:selectedAvailibility,
      showSalary:selectedSalary
    };
    setMessageHistory((prevMessages) => [...prevMessages, newMessage]);
}
const [selectedStatus, setSelectedStatus] = useState([])
const handleCheckboxChange = (status) => {
  if(selectedStatus.includes(status)){
    setSelectedStatus(selectedStatus.filter((s) => s !== status));
  }else{
    setSelectedStatus(prev=>[...prev,status])
  }
};
const StatusBtn = ({status}) =>{
    return <label className={`${status} ${selectedStatus.includes(status)&&'checked'}`}><input type="checkbox" 
    checked={selectedStatus.includes(status)}
       onChange={()=>handleCheckboxChange(status)}  />{status!=="Message"&& <TaskAlt className='icon' /> }<span>{status}</span></label>
}
console.log(selectedStatus);

const handleSelectIcon = (e) =>{
  setIsSelected(prev=>!prev);
  setSelectedIcon(e.target.src);
}
const handleClose = (e) =>{
  setIsSelected(prev=>!prev);
  setSelectedIcon(null);
  setSelectedcdAvailibility(false);
  setSelectedcdSalary(false);
  setSelectedcdStar(false);

}
const handleSelectAvailibility = (e) =>{
  setSelectedcdAvailibility(prev=>!prev);
}
const handleSelectSalary = (e) =>{
  setSelectedcdSalary(prev=>!prev);
}
const handleSelectStar= (e) =>{
  setSelectedcdStar(prev=>!prev);
}

const oppo = [{
  "status": "Open",
  "image": "path/to/tick_box_empty",
  "title": "Senior electrical engineer - Perenco - Congo - MAGRY",
  "date":"17 Feb 2023",
  "duration": "6 months"
},{
  "status": "Current",
  "image": "path/to/tick_box_empty",
  "title": "Senior electrical engineer - Perenco - Congo - MAGRY",
  "date":"18 Feb 2023",
  "duration": "6 months"
}
,{
  "status": "Finished",
  "image": "path/to/tick_box_empty",
  "title": "Senior electrical engineer - Perenco - Congo - MAGRY",
  "date":"18 Feb 2023",
  "duration": "6 months"
}
]
  return (
    <div className='candidate-file'>
        <form className='candidate-file-email-form'>
        <label htmlFor="email"></label>
        <textarea
          id="email"
          className='lines-textarea'
          name="email"
          value={emailContent}
          onChange={handleEmailChange}
        ></textarea>
        <div className='contact-icons-container'>
            {isSelected?
            <div className='selected'>
              <img  className='contact-selected-img' src={Cross} alt="" onClick={handleClose} />
              <div>
                {selectedAvailibility===false?
                <img  className='contact-selected-img' src={Availabilities_Green_border} alt="" onClick={handleSelectAvailibility} />
                :<img  className='contact-selected-img' src={Availabilities_Full_green} alt="" onClick={handleSelectAvailibility} />}
                {selectedSalary===false?
                <img  className='contact-selected-img' src={Salaries_Green_border} alt="" onClick={handleSelectSalary} />
                :<img  className='contact-selected-img' src={Salaries_Full_green} alt="" onClick={handleSelectSalary} />}
                {selectedStar===false?
                <img  className='contact-selected-img' src={Star_Green_border} alt="" onClick={handleSelectStar} />
                :<img  className='contact-selected-img' src={Star_Filled} alt="" onClick={handleSelectStar} />}
              </div>
              <img  className='contact-selected-img' src={selectedIcon} width={25} alt="selected-img" onClick={handleSubmit}  />
            </div>
            :
            <>
             <div className='left'>
                <img src={Incoming_call_Empty} alt={"Incoming_call_Empty"} onClick={(e)=>handleSelectIcon(e)} />
                <img src={Voicemail_Empty} alt={"Voicemail_Empty"} />
                <img src={Outgoing_call_Empty} alt="Outgoing_call_Empty" onClick={(e)=>handleSelectIcon(e)} />
                <img src={Email_received_Empty} alt="Email_received_Empty" onClick={(e)=>handleSelectIcon(e)} />
                <img src={Email_sent_Empty} alt="Email_sent_Empty" />
                <img src={LinkedIn_message_received_Empty} alt="LinkedIn_message_received_Empty" onClick={(e)=>handleSelectIcon(e)} />
                <img src={LinkedIn_message_sent_Empty} alt="LinkedIn_message_sent_Empty" />
                <img src={SMS_received_Empty} alt="SMS_received_Empty" onClick={(e)=>handleSelectIcon(e)} />
                <img src={SMS_sent_Empty} alt="SMS_sent_Empty" />
                <img src={Physical_meeting_Empty} alt="Physical_meeting_Empty" onClick={(e)=>handleSelectIcon(e)} />
            </div>
            <div className='right'>
             <img src={Email_white} alt="Email_white" />
            </div>  
            </>
              
            }   
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
        <div className='message-history-content'>
            {oppo.filter(el=>!selectedStatus.includes(el.status)).map(el=>
            <div className={`message-header ${el.status}`}>
                <img src={tick_box_empty} alt="" />
                <span className='info'>{el.title}</span>
                <span className='info'>{el.date}</span>
                <span className='month'>{el.duration}</span>
              </div>)}
              {messageHistory.map((message, index) => (
                          <div className='message-body'>
                                  <p className={`info1 ${activeMenu===index&&readMore&& 'read-more'}`} onClick={()=>handleReadMore(index)}>
                                    {message.content}
                                  <span className='icon'>{activeMenu === index&&readMore?
                                  <img src={Arrow_Filled} width={20} alt="" className='rotate' />: <img width={20} src={Arrow_Empty} alt="" />} 
                                  </span>
                                  </p>
                                  <p className='info2'>
                                    <span className='img'>
                                     {message.important&&<img src={Star_Empty} alt="" />}
                                    </span>
                                    <span>{message.showSalary&&message.salary}</span>
                                    <span>{message.showAvailability&& message.availability}</span>
                                    <span>{message.date}</span>
                                    <span>{message.reference}</span>
                                    <img className='img' src={LinkedIn_message_received_Empty} alt={""} />
                                  </p>
                        </div>
        ))}
    </div>
      </div>
    </div>
  )
}

export default CandidateFile