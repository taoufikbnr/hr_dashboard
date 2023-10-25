import React from 'react'
import { useState } from 'react';
import drillData from "../../../data/drilling.json"
import "./drilling.css"
import { Accordion } from '@chakra-ui/react';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ArrowCircleUpRounded, ArrowDropDown, ArrowDropDownCircleRounded, ExpandMore } from '@mui/icons-material';
const Drilling = () => {
    const [selected, setselected] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setselected(prev => activeIndex !== index || !prev)
      setActiveIndex(index)
    };

  return (
    <div>
    <div className="drilling-container">
    {drillData.drilling.map((el,i)=>
            <div className='drilling-menu'>
                <span className='drilling-header'><span></span>{el.title}<span></span></span>
                <div className={`drilling-items open`}>
                  {el.content.map((el,i)=> 
                <div className='drilling-item'>
                  {el}
                </div> )}
                </div>
            </div>)}
    {drillData.second.map((el,i)=>
            <div className='drilling-menu'>
                <span onClick={() => toggleAccordion(i)} className={`drilling-header ${activeIndex === i && 'open'}`}>  
                  <span></span> <span>{el.title}</span>
                  {selected?<ArrowCircleUpRounded/> : <ArrowDropDownCircleRounded/>} 
                  </span>
                <div className={`drilling-items ${selected&&activeIndex === i && 'open'}`}>
                  {el.content.map((el,i)=> 
                <div className="drilling-item">
                  {el}
                </div> )}
                </div>
            </div>)}
    </div>
    </div>
    
  )
}

export default Drilling