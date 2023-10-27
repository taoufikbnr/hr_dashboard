import React from 'react'
import { useState } from 'react';
import drillData from "../../../data/drilling.json"
import "./drilling.css"
import {ArrowDropDownCircleRounded} from '@mui/icons-material';
const Drilling = () => {
    const [selected, setselected] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState({ i: null, j: null });


    const toggleAccordion = (index) => {
      setselected(prev => activeIndex !== index || !prev)
      setActiveIndex(index)
    };
    const handleItemClick = (i, j) => {
      if (selectedIndexes.i === i && selectedIndexes.j === j) {
        setSelectedIndexes({ i: null, j: null });
      } else {
        setSelectedIndexes({ i, j });
      }
    };
    console.log(selectedIndexes);
  return (
    <div>
    <div className="drilling-container">
    {drillData.drilling.map((el,i)=>
            <div className='drilling-menu'>
                <span className='drilling-header'><span></span>{el.title}<span></span></span>
                <div className={`drilling-items open`}>
                  {el.content.map((el,j)=> 
                <div onClick={() => handleItemClick(i+2,j)} className={`drilling-item ${selectedIndexes.i === i+2 && selectedIndexes.j === j ? 'selected' : ''}`}>
                  {el}
                </div> )}
                </div>
            </div>)}
    {drillData.second.map((el,i)=>
            <div className='drilling-menu'>
                <span onClick={() => toggleAccordion(i)} className={`drilling-header ${selected&&activeIndex === i && 'open'}`}>  
                  <span></span> <span>{el.title}</span>
                  {selected&&activeIndex === i ?<ArrowDropDownCircleRounded className='rotate'/> : <ArrowDropDownCircleRounded/>} 
                  </span>
                <div className={`drilling-items ${selected&&activeIndex === i && 'open'}`}>
                  {el.content.map((el,j)=> 
                <div onClick={() => handleItemClick(i, j)} className={`drilling-item ${selectedIndexes.i === i && selectedIndexes.j === j ? 'selected' : ''}`}>
                  {el}
                </div> )}
                </div>
            </div>)}
    </div>
    </div>
    
  )
}

export default Drilling