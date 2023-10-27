import React, { useState } from 'react'
import "./clients.css"
import { Close } from '@mui/icons-material'
import clientsDATA from "../../../data/clients.json"
const ClientsFilter = () => {
    const [filtredData, setfiltredData] = useState(clientsDATA.clients);
    const [selectedItems, setSelectedItems] = useState([]);
    const [seach, setseach] = useState("");
    console.log(clientsDATA.clients);
    const handleClick = (index)=>{
      const selectedItem = filtredData[index];
      setfiltredData(prevData => prevData.filter((el,i) => i !== index))
      setSelectedItems((prevItems) => [...prevItems, selectedItem]);
    }
    const handleDeselect = (index) => {
      const deselectedItem = selectedItems[index];
;   setSelectedItems(prev=>prev.filter((el,i)=>i !==index));
    setfiltredData(prev=>[...prev,deselectedItem])
      };
  return (
    <div className='clients-container'>
      <div className="clients-left">
        <div className='clients-item'>
         <input className='clients-search' type="text" onChange={(e)=>setseach(e.target.value)} placeholder='________________________' />
        </div>
      {filtredData.filter(word=>word.toLocaleLowerCase().includes(seach.toLocaleLowerCase())).map((el,i)=>
        <div className='clients-item' key={i} onClick={()=>handleClick(i)}>
            {el}
        </div>  
        )}
      </div>
        <div className='clients-right'>
        {selectedItems.map((el, i) => (
            <div className='selected-items' key={i}>
              {el}
              <Close className='closeBtn' onClick={() => handleDeselect(i)}/>
            </div>
          ))}
          <div className="clients-item"><span style={{visibility:'hidden'}} >placeholder</span></div>
        </div>
    </div>
  )
}

export default ClientsFilter