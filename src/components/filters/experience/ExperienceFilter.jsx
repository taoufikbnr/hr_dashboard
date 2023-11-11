import { ArrowForward, ArrowForwardIosOutlined, ArrowForwardOutlined, ArrowRight, NavigateBefore, Spa } from "@mui/icons-material"
import { Availabilities_Empty, Clients_Empty, Copy_paste, Positions_Empty } from "../../../data/icons"
import "./experience.css"
import { useState } from "react"
import Select from 'react-select';
import clientsOptions from '../../../data/experience.json'

const ExperienceFilter = () => {
  const [lastExperiencePosition, setlastExperiencePosition] = useState("")
  const [lastExperienceClients, setlastExperienceClients] = useState("")
  const [lastExperienceAvailabilityFrom, setlastExperienceAvailabilityFrom] = useState("")
  const [lastExperienceAvailabilityTo, setlastExperienceAvailabilityTo] = useState("")

  const [acutalPosition, setacutalPosition] = useState("")
  const [acutalClients, setacutalClients] = useState("")
  const [acutalAvailabilityFrom, setacutalAvailabilityFrom] = useState("")
  const [acutalAvailabilityTo, setacutalAvailabilityTo] = useState("")

  const [editableItem, setEditableItem] = useState("");

  const handleSelectItem = (itemType) => {
      setEditableItem(itemType);
  };
  const handleValidation = () => {
    setacutalPosition(lastExperiencePosition);
    setacutalClients(lastExperienceClients);
    setacutalAvailabilityFrom(lastExperienceAvailabilityFrom)
    setacutalAvailabilityTo(lastExperienceAvailabilityTo)
    handleSelectItem("");
  }

return (
  <div className="experience-container">
  <div className="experience-block">
  <h4>New</h4>
  <div className="experience-header-container">
     {<div className={`experience-item-icon navigate ${!editableItem&&"placeholder"}`} onClick={handleValidation}>
          <NavigateBefore/>
      </div>}
      <span className={`experience-header`}>
          <span></span>
          Last/current experience
          <img src={Copy_paste} width={15} alt=""/>
      </span>
  </div>
      <div className="experience-item-container">
          <div className={`experience-item-icon ${editableItem==="Positions"&&"selected"}`} onClick={() => handleSelectItem('Positions')} >
              <img src={Positions_Empty} width={25} alt=""/>
          </div>
          <span className={`experience-item`}>
          {editableItem === 'Positions' ? (
                      <input type="text" value={lastExperiencePosition} onChange={(e) => setlastExperiencePosition(e.target.value)} />
                  ) : (
                    <span>{lastExperiencePosition}</span>  
                  )}
          </span>
      </div>
      <div className="experience-item-container">
          <div className={`experience-item-icon ${editableItem==="Clients"&&"selected"}`} onClick={() => handleSelectItem('Clients')}  >
                  <img src={Clients_Empty} width={25} alt="" />
          </div>
          <span className={`experience-item`}>
          {editableItem === 'Clients' ? (
                  <Select
                      options={clientsOptions.clients}
                      defaultInputValue={lastExperienceClients}
                      onChange={(selectedOption) => setlastExperienceClients(selectedOption.value)}
                      menuPlacement="top"
                    />
                  ) : (
                    <span>{lastExperienceClients}</span>  
                  )}
          </span>
      </div>
    <div className="experience-item-date">
           <div className={`experience-item-icon ${editableItem==="Availabilities"&&"selected"}`} onClick={() => handleSelectItem('Availabilities')} >
                  <img src={Availabilities_Empty} width={25} alt="" />
          </div>
          <span className="experience-item">
          {editableItem === 'Availabilities' ? (
                      <input
                          type="text"
                          value={lastExperienceAvailabilityFrom}
                          onChange={(e) => setlastExperienceAvailabilityFrom(e.target.value)}
                      />
                  ) : (
                      lastExperienceAvailabilityFrom
                  )}
          </span>
          <ArrowForwardIosOutlined/>
          <span className="experience-item">
          {editableItem === 'Availabilities' ? (
                      <input
                          type="text"
                          value={lastExperienceAvailabilityTo}
                          onChange={(e) => setlastExperienceAvailabilityTo(e.target.value)}
                      />
                  ) : (
                      lastExperienceAvailabilityTo
                  )}
          </span>
    </div>
  </div>
  <div className="experience-block">
  <h4>Actual</h4>
  <div className="experience-header-container">
      <span className={`experience-header`}>
          <span></span>
          Last/current experience
          <img src={Copy_paste} width={15} alt=""/>
      </span>
  </div>
          <span className={`experience-item ${acutalPosition&&"filled"}` }>
          <span>{acutalPosition}</span>
          </span>
          <span className={`experience-item ${acutalClients&&"filled"}` }>
          <span>{acutalClients}</span>
          </span>
    <div className="experience-item-date">
          <span className={`experience-item ${acutalAvailabilityFrom&&"filled"}` }>
          <span>{acutalAvailabilityFrom}</span>
          </span>
          <ArrowForwardIosOutlined/>
          <span className={`experience-item ${acutalAvailabilityTo&&"filled"}` }>
          <span>{acutalAvailabilityTo}</span>
          </span>
    </div>
  </div>
  </div>
  )
}

export default ExperienceFilter