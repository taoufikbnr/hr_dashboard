import { ArrowForward, ArrowForwardIosOutlined, ArrowForwardOutlined, ArrowRight, NavigateBefore } from "@mui/icons-material"
import { Availabilities_Empty, Clients_Empty, Copy_paste, Positions_Empty } from "../../../data/icons"
import "./experience.css"
import { useState } from "react"

const ExperienceFilter = () => {
  const [lastExperiencePosition, setlastExperiencePosition] = useState("")
  const [lastExperienceClients, setlastExperienceClients] = useState("")
  const [lastExperienceAvailabilityFrom, setlastExperienceAvailabilityFrom] = useState("")
  const [lastExperienceAvailabilityTo, setlastExperienceAvailabilityTo] = useState("")

  const [editableItem, setEditableItem] = useState("");

  const handleSelectItem = (itemType) => {
      setEditableItem(itemType);
  };

return (
  <div className="experience-container">
  <div className="experience-block">
  <h4>New</h4>
  <div className="experience-header-container">
     {<div className={`experience-item-icon navigate ${!editableItem&&"placeholder"}`} onClick={() => handleSelectItem("")}>
          <NavigateBefore/>
      </div>}
      <span className={`experience-header`}>
          <span></span>
          Last/current experience
          <img src={Copy_paste} width={15} alt=""/>
      </span>
  </div>
      <div className="experience-item-container">
          <div className={`experience-item-icon ${editableItem==="Positions"&&"selected"}`}>
              <img src={Positions_Empty} width={25} alt="" onClick={() => handleSelectItem('Positions')} />
          </div>
          <span className={`experience-item`}>
          {editableItem === 'Positions' ? (
                      <input type="text" value={lastExperiencePosition} onChange={(e) => setlastExperiencePosition(e.target.value)} />
                  ) : (
                      lastExperiencePosition
                  )}
          </span>
      </div>
      <div className="experience-item-container">
          <div className={`experience-item-icon ${editableItem==="Clients"&&"selected"}`}>
                  <img src={Clients_Empty} width={25} alt="" onClick={() => handleSelectItem('Clients')}  />
          </div>
          <span className={`experience-item`}>
          {editableItem === 'Clients' ? (
                      <input type="text" value={lastExperienceClients} onChange={(e) => setlastExperienceClients(e.target.value)} />
                  ) : (
                      lastExperienceClients
                  )}
          </span>
      </div>
    <div className="experience-item-date">
           <div className={`experience-item-icon ${editableItem==="Availabilities"&&"selected"}`}>
                  <img src={Availabilities_Empty} width={25} alt="" onClick={() => handleSelectItem('Availabilities')} />
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
          <span className={`experience-item`}>
          {lastExperiencePosition}
          </span>
          <span className={`experience-item`}>
          {lastExperienceClients}
          </span>
    <div className="experience-item-date">
          <span className="experience-item">
          {lastExperienceAvailabilityFrom}
          </span>
          <ArrowForwardIosOutlined/>
          <span className="experience-item">
          {lastExperienceAvailabilityTo}
          </span>
    </div>
  </div>
  </div>
  )
}

export default ExperienceFilter