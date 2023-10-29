import React from "react";
import { useState } from "react";
import drillData from "../../data/residencies.json";
import "./residencies.css";
import { ArrowDropDownCircleRounded } from "@mui/icons-material";
import Country from "./Country";
const ResidenciesFilter = () => {
  const [openMenu, setopenMenu] = useState(false);
  const [activeMenu, setactiveMenu] = useState("");


  const toggleAccordion = (menu) => {
    setopenMenu((prev) => activeMenu !== menu || !prev);
    setactiveMenu(menu);
  };



  return (
    <>
      <div className="residencies-container">-
  {drillData.residencies.map((el)=>
    <div className="residencies-menu">
    <span
      onClick={() => toggleAccordion(el.title)}
      className={`residencies-header ${
        activeMenu === el.title && openMenu && "open"
      }`}
    >
      {el.title}
      {activeMenu === el.title&&openMenu?<ArrowDropDownCircleRounded className='rotate'/> : <ArrowDropDownCircleRounded/>} 
    </span>
    <div
      className={`residencies-items ${
        activeMenu === el.title && openMenu && "open"
      }`}
    >
    <Country data={el.content} />
    </div>
  </div>
  )      
    }
      </div>
    </>
  );
};

export default ResidenciesFilter;
