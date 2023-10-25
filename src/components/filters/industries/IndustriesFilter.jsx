import "./industriesFilter.css"
import indusData from "../../../data/industries.json"
import { useState } from "react"
const IndustriesFilter = () => {
    const [selected, setselected] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick=(i)=>{
        setselected(prev => currentIndex !== i || !prev)
        setCurrentIndex(i)
    }
  return (
    <>
    <div className="industries-container">
    {indusData.industries.map((el,i)=>
            <div onClick={()=>handleClick(i)} className={`industries-item ${currentIndex===i&&selected&&"selected"}`}>
                {el}
            </div>)}
    </div>
    </>
  )
}

export default IndustriesFilter