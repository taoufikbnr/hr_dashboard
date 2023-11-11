import { ArrowForward, ArrowForwardIosOutlined, ArrowForwardOutlined, ArrowRight, NavigateBefore, Spa } from "@mui/icons-material"
import { Availabilities_Empty, Clients_Empty, Copy_paste, Positions_Empty } from "../../../data/icons"
import "./experience.css"
import { useState } from "react"
import Select from 'react-select';
import clientsOptions from '../../../data/experience.json'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import { DatePicker, MonthCalendar, PickersDay } from "@mui/x-date-pickers";

const Experience3Filter = ({title}) => {
  const [experience2Position, setexperience2Position] = useState("")
  const [experience2Clients, setexperience2Clients] = useState("")
  const [experience2AvailabilityFrom, setexperience2AvailabilityFrom] = useState(dayjs(new Date()))
  const [experience2AvailabilityTo, setexperience2AvailabilityTo] = useState(dayjs(new Date()))

  const [Experience2Position, setExperience2Position] = useState("")
  const [Experience2Clients, setExperience2Clients] = useState("")
  const [Experience2AvailabilityFrom, setExperience2AvailabilityFrom] = useState(dayjs(new Date()))
  const [Experience2AvailabilityTo, setExperience2AvailabilityTo] = useState(dayjs(new Date()))

  const [editableItemExperience2, setEditableItemExperience2] = useState("");
  const [showFromCalendarExperience2, setShowFromCalendarExperience2] = useState(null);

  const handleSelectItemExperience2 = (itemType) => {
      setEditableItemExperience2(itemType);
  };
  const handleValidationExperience2 = () => {
    setExperience2Position(experience2Position);
    setExperience2Clients(experience2Clients);
    setExperience2AvailabilityFrom(experience2AvailabilityFrom)
    setExperience2AvailabilityTo(experience2AvailabilityTo)
    handleSelectItemExperience2("");
  }
  const handleDateChangeExperience2 = (field, newValue) => {  
    if (field === 'from-experience2') {
        setexperience2AvailabilityFrom(newValue);
    } else if (field === 'to-experience2') {
        setexperience2AvailabilityTo(newValue);
    }
  };
  const toggleCalendar = (field) => {
        if (field === 'from-experience2') {
        setShowFromCalendarExperience2(field);
    } else if (field === 'to-experience2') {
        setShowFromCalendarExperience2(field);
    }
  };
return (
  <div className="experience-container">
  <div className="experience-block">
  <>
  <div className="experience-header-container">
     {<div className={`experience-item-icon navigate ${!editableItemExperience2&&"placeholder"}`} onClick={handleValidationExperience2}>
          <NavigateBefore/>
      </div>}
      <span className={`experience-header`}>
          <span></span>
          {title}
          <img src={Copy_paste} width={15} alt=""/>
      </span>
  </div>
      <div className="experience-item-container">
          <div className={`experience-item-icon ${editableItemExperience2==="Positions"&&"selected"}`} onClick={() => handleSelectItemExperience2('Positions')} >
              <img src={Positions_Empty} width={25} alt=""/>
          </div>
          <span className={`experience-item`}  >
          {editableItemExperience2 === 'Positions' ? (
                      <input type="text" value={experience2Position} onChange={(e) => setexperience2Position(e.target.value)} />
                  ) : (
                    <span>{experience2Position}</span>  
                  )}
          </span>
      </div>
      <div className="experience-item-container">
          <div className={`experience-item-icon ${editableItemExperience2==="Clients"&&"selected"}`} onClick={() => handleSelectItemExperience2('Clients')}  >
                  <img src={Clients_Empty} width={25} alt="" />
          </div>
          <span className={`experience-item`} >
          {editableItemExperience2 === 'Clients' ? (
                  <Select
                      options={clientsOptions.clients}
                      defaultInputValue={experience2Clients}
                      onChange={(selectedOption) => setexperience2Clients(selectedOption.value)}
                      menuPlacement="top"
                      menuIsOpen={true} 
                    />
                  ) : (
                    <span>{experience2Clients}</span>  
                  )}
          </span>
      </div>
    <div className="experience-item-date">
           <div className={`experience-item-icon ${editableItemExperience2==="Availabilities"&&"selected"}`} onClick={() => handleSelectItemExperience2('Availabilities')} >
                  <img src={Availabilities_Empty} width={25} alt="" />
          </div>
          <span className={`experience-item ${editableItemExperience2==="Availabilities"&&"fill"}`} id="from-calendar-portal" onClick={()=>toggleCalendar("from")}>
          {editableItemExperience2 === 'Availabilities'? (
        <>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    views={['year', 'month']}
                    maxDate={experience2AvailabilityTo}
                    menuPlacement="top"
                    menuPortalTarget={document.getElementById('from-calendar-portal')}
                    className="experience-calendar"  value={experience2AvailabilityFrom}
                    onChange={(newValue) => handleDateChangeExperience2('from-experience2', newValue)} />
            </LocalizationProvider>
        </>
                  ) : (
                    dayjs(experience2AvailabilityFrom).format('MMMM YYYY')
                  )}
          </span>
          <ArrowForwardIosOutlined/>
          <span className={`experience-item ${editableItemExperience2==="Availabilities"&&"fill"}`} id="to-calendar-portal" onClick={()=>toggleCalendar("to")}>
          {editableItemExperience2 === 'Availabilities' ? (
            <>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={['year', 'month']}
                    menuPlacement="top"
                    minDate={experience2AvailabilityFrom}
                    className="experience-calendar"  value={experience2AvailabilityTo}
                    onChange={(newValue) => handleDateChangeExperience2('to-experience2', newValue)} />
            </LocalizationProvider>
            </>
                  ) : (
                    dayjs(experience2AvailabilityTo).format('MMMM YYYY')
                  )}
          </span>
    </div>
  </>
  </div>
    <div className="experience-block">
    <>
    <div className="experience-header-container">
        <span className={`experience-header`}>
            <span></span>
            {title}
            <img src={Copy_paste} width={15} alt=""/>
        </span>
    </div>
            <span className={`experience-item ${Experience2Position&&"filled"}` }>
            <span>{Experience2Position}</span>
            </span>
            <span className={`experience-item ${Experience2Clients&&"filled"}` }>
            <span>{Experience2Clients}</span>
            </span>
        <div className="experience-item-date">
            <span className={`experience-item ${Experience2AvailabilityFrom&&"filled"}` }>
            <span>{dayjs(Experience2AvailabilityFrom).format('MMMM YYYY')}</span>
            </span>
            <ArrowForwardIosOutlined/>
            <span className={`experience-item ${Experience2AvailabilityTo&&"filled"}` }>
            <span>{dayjs(Experience2AvailabilityTo).format('MMMM YYYY')}</span>
            </span>
        </div>
    </>
    </div>
  </div>
  )
}
export default Experience3Filter