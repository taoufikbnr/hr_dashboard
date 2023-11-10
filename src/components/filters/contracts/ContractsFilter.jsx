import { useState } from "react";
import "./contracts.css"
import { Close } from "@mui/icons-material";

const ContractsFilter = () => {

  const [users, setUsers] = useState([
    { column1: "First name", inputs: "", actual: "" },
    { column1: "Last name", inputs: "", actual: "" },
    { column1: "Email 01", inputs: "", actual: "" },
    { column1: "Email 02", inputs: "", actual: "" },
    { column1: "Phone 01", inputs: "", actual: "" },
    { column1: "Phone 02", inputs: "", actual: "" },
    { column1: "LinkedIn link", inputs: "", actual: "" }
  ]);
  const handleInputChange = (index, value) => {
    const updatedUsers = [...users];
    updatedUsers[index].inputs = value;
    setUsers(updatedUsers);
  };

  return (
    <>
    <table>
      <tbody>
        <tr className="contracts-header">
          <th style={{ width: "20%" }}></th>
          <th style={{ width: "40%" }}>New</th>
          <th style={{ width: "40%" }}>Actual</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td style={{ width: "20%" }}>{user.column1}</td>
            <td style={{ width: "40%" }} className="contracts-actual">
              <input className="contracts-input"
                type="text"
                value={user.inputs}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              <div className={`contracts-actual-data ${user.inputs && "filled"}`}>
                <span>{user.inputs}</span>
                <Close className='closeBtn' onClick={() => handleInputChange(index, "")}/>
              </div>
            </td>
            <td style={{ width: "40%" }}>{user.actual}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default ContractsFilter