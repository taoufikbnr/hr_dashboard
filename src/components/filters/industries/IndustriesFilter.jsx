import "./industriesFilter.css"
import indusData from "../../../data/industries.json"
import { useState } from "react"
const IndustriesFilter = () => {
    const [selected, setselected] = useState(false)
    const [currentIndex, setCurrentIndex] = useState([]);

    const handleClick=(i)=>{
        setselected(prev => currentIndex !== i || !prev)
        const newSelectedItems = [...currentIndex];

        const index = newSelectedItems.findIndex((item) => item.i === i);
  
        if (index === -1) {
          newSelectedItems.push({ i});
        } else {
          newSelectedItems.splice(index, 1);
        }
  
        setCurrentIndex(newSelectedItems);
    }
  return (
    <>
    <div className="industries-container">
    {indusData.industries.map((el,i)=>
            <div onClick={()=>handleClick(i)} className={`industries-item ${currentIndex.some((item) => item.i === i)&&selected&&"selected"}`}>
                {el}
            </div>)}
    </div>
    </>
  )
}

export default IndustriesFilter