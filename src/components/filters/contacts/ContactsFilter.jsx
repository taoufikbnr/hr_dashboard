import { useEffect, useRef, useState } from "react";
import "./contacts.css"
import { Close } from "@mui/icons-material";
import countryCodes from "../../../data/CountryCodes.json"
import { Box, Modal } from "@mui/material";

const ContactsFilter = () => {

  const [users, setUsers] = useState([
    { column1: "First name", inputs: "", actual: "",type:"text" },
    { column1: "Last name", inputs: "", actual: "",type:"text" },
    { column1: "Email 01", inputs: "", actual: "",type:"email" },
    { column1: "Email 02", inputs: "", actual: "",type:"email" },
    { column1: "Phone 01",countryCode: "+33",  inputs: "", actual: "",type:"number" },
    { column1: "Phone 02",countryCode: "+33",  inputs: "", actual: "",type:"number" },
    { column1: "LinkedIn link", inputs: "", actual: "",type:"url" }
  ]);
  const handleInputChange = (index, value) => {
    const updatedUsers = [...users];
    updatedUsers[index].inputs = value;
    setUsers(updatedUsers);
  };
  const handleCountryCodeChange = (index, value) => {
    const updatedUsers = [...users];
    updatedUsers[index].countryCode = value;
    setUsers(updatedUsers);
  };
  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (componentRef.current && !componentRef.current.contains(e.target)) {
        if (users[0].inputs === "" || users[1].inputs === "") {
          setOpen(true)
        } else {
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [users]);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '1px solid lightgrey',
    boxShadow: 24,
    borderRadius:3,
    p: 4,
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    gap:3
    
  };
  return (
    <div  ref={componentRef} className="contacts-container">
          <Modal
      open={open}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={handleClose}
    >
      <Box sx={style}>
        <h5 id="modal-title">Validate First Name and LAST NAME to create the candidate file.</h5>
        <p id="modal-description">
          <button className="modal-btn" onClick={handleClose}>OK</button>
        </p>
      </Box>
    </Modal>
    <table>
      <tbody>
        <tr className="contacts-header">
          <th style={{ width: "20%" }}></th>
          <th style={{ width: "40%" }}>New</th>
          <th style={{ width: "40%" }}>Actual</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td style={{ width: "20%" }}>{user.column1}</td>
            <td style={{ width: "40%" }} className="contacts-actual">
              <div style={{display:"flex"}}>
              {user.column1==="Phone 01" || user.column1==="Phone 02"
              ?
              <>
                 <select
                    style={{width:"40%"}}
                    className="contacts-input"
                    onChange={(e) => handleCountryCodeChange(index, e.target.value)}
                    value={user.countryCode}
                  >
                    {countryCodes.map(country=>
                      (<option value={country.dial_code}>{country.dial_code}</option>)
                      )}
     
                    
                  </select>
            <input className="contacts-input"
              type={user.type}
              value={user.inputs}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
              </>
      :
        <input className="contacts-input"
        type={user.type}
        value={user.inputs}
        onChange={(e) => handleInputChange(index, e.target.value)}
        />
      }
</div>
              <div className={`contacts-actual-data ${user.inputs && "filled"}`}>
                <span>{user.countryCode}{user.inputs}</span>
                <Close className='closeBtn' onClick={() => handleInputChange(index, "")}/>
              </div>
            </td>
            <td style={{ width: "40%" }}>{user.actual}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default ContactsFilter