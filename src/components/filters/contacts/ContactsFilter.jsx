import { useState } from "react";
import "./contacts.css"
import { Close } from "@mui/icons-material";
import countryCodes from "../../../data/CountryCodes.json"

const ContactsFilter = () => {

  const [users, setUsers] = useState([
    { column1: "First name", inputs: "", actual: "",type:"text" },
    { column1: "Last name", inputs: "", actual: "",type:"text" },
    { column1: "Email 01", inputs: "", actual: "",type:"email" },
    { column1: "Email 02", inputs: "", actual: "",type:"email" },
    { column1: "Phone 01",countryCode: "+33",  inputs: "", actual: "",type:"number" },
    { column1: "Phone 02",countryCode: "+33",  inputs: "", actual: "",type:"number" },
    { column1: "Country Code", inputs: "", actual: "", type: "text" },
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
  return (
    <div className="contacts-container">
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
                    className="contacts-input"
                    onChange={(e) => handleCountryCodeChange(index, e.target.value)}
                    value={user.countryCode}
                  >
                    {countryCodes.map(country=>
                      (<option value={country.dial_code}>{country.dial_code} ({country.code})</option>)
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