import React from "react";
import { useState } from "react";
import residenciesData from "../../data/residencies.json";
import "./residencies.css";
import { ArrowDropDownCircleRounded } from "@mui/icons-material";

const ResidenciesFilter = () => {
  const [selectedfrenchRegions, setselectedfrenchRegions] = useState([]);
  const [selectedglobalRegions, setselectedglobalRegions] = useState([]);
  const [openMenu, setopenMenu] = useState(
    residenciesData.frenchRegions.title ? true : false
  );
  const [activeMenu, setactiveMenu] = useState(residenciesData.frenchRegions.key);
  const toggleAccordion = (menu) => {
    setopenMenu((prev) => activeMenu !== menu || !prev);
    setactiveMenu(menu);
  };

  const handlefrenchRegions = (RigPos) => {
    if (selectedfrenchRegions.includes(RigPos)) {
      setselectedfrenchRegions(
        selectedfrenchRegions.filter((item) => item !== RigPos)
      );
    } else {
      setselectedfrenchRegions((prev) => [...prev, RigPos]);
    }
  };
  const handleglobalRegions = (RigPost) => {
    if (selectedglobalRegions.includes(RigPost)) {
      setselectedglobalRegions(
        selectedglobalRegions.filter((item) => item !== RigPost)
      );
    } else {
      setselectedglobalRegions((prev) => [...prev, RigPost]);
    }
  };


  return (
    <>
    <div className="residencies-container">
      <div className="residencies-menu">
        <span
          onClick={() => toggleAccordion(residenciesData.frenchRegions.key)}
          className={`residencies-header ${
            activeMenu === "FLR" && openMenu && "open"
          }`}
        >
          {residenciesData.frenchRegions.title}
          {activeMenu === "FLR"&&openMenu?<ArrowDropDownCircleRounded className='rotate'/> : <ArrowDropDownCircleRounded/>} 
        </span>
        <div
          className={`residencies-items ${
            activeMenu === "FLR" && openMenu && "open"
          }`}
        >
          {residenciesData.frenchRegions.content.map((el, i) => (
            <div
              key={i}
              onClick={() => handlefrenchRegions(el)}
              className={`residencies-item ${
                selectedfrenchRegions.includes(el) && "selected"
              }`}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
      <div className="residencies-menu">
        <span
          onClick={() => toggleAccordion(residenciesData.globalRegions.key)}
          className={`residencies-header ${
            activeMenu === "GR" && openMenu && "open"
          }`}
        >
          {residenciesData.globalRegions.title}
          {activeMenu === "GR"&&openMenu?<ArrowDropDownCircleRounded className='rotate'/> : <ArrowDropDownCircleRounded/>} 
        </span>
        <div
          className={`residencies-items ${
            activeMenu === "GR" && openMenu && "open"
          }`}
        >
          {residenciesData.globalRegions.content.map((el, i) => (
            <div
              key={i}
              onClick={() => handleglobalRegions(el)}
              className={`residencies-item ${
                selectedglobalRegions.includes(el) && "selected"
              }`}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default ResidenciesFilter;
