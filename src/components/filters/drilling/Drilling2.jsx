import React from "react";
import { useState } from "react";
import drillData from "../../../data/drilling.json";
import "./drilling.css";
import { ArrowDropDownCircleRounded } from "@mui/icons-material";
const Drilling = () => {
  const [selectedDrillingRigs, setselectedDrillingRigs] = useState([]);
  const [selectedDrillingPositions, setselectedDrillingPositions] = useState(
    []
  );
  const [selectedRigPositions, setselectedRigPositions] = useState([]);
  const [openMenu, setopenMenu] = useState(
    drillData.drillingPositions.title ? true : false
  );
  const [activeMenu, setactiveMenu] = useState(
    drillData.drillingPositions.title
  );
  const toggleAccordion = (menu) => {
    setopenMenu((prev) => activeMenu !== menu || !prev);
    setactiveMenu(menu);
  };
  const handleDrillingRigs = (DrillRig) => {
    if (selectedDrillingRigs.includes(DrillRig)) {
      setselectedDrillingRigs(
        selectedDrillingRigs.filter((item) => item !== DrillRig)
      );
    } else {
      setselectedDrillingRigs((prev) => [...prev, DrillRig]);
    }
  };
  const handleDrillingPositions = (RigPos) => {
    if (selectedDrillingPositions.includes(RigPos)) {
      setselectedDrillingPositions(
        selectedDrillingPositions.filter((item) => item !== RigPos)
      );
    } else {
      setselectedDrillingPositions((prev) => [...prev, RigPos]);
    }
  };
  const handleRigPositions = (RigPost) => {
    if (selectedRigPositions.includes(RigPost)) {
      setselectedRigPositions(
        selectedRigPositions.filter((item) => item !== RigPost)
      );
    } else {
      setselectedRigPositions((prev) => [...prev, RigPost]);
    }
  };
  return (
    <div>
      <div className="drilling-container">
        <div className="drilling-menu">
          <span className="drilling-header">
            <span></span>
            {drillData.drillingRigs.title}
            <span></span>
          </span>
          <div className={`drilling-items open`}>
            {drillData.drillingRigs.content.map((el, i) => (
              <div
                key={i}
                onClick={() => handleDrillingRigs(el)}
                className={`drilling-item ${
                  selectedDrillingRigs.includes(el) && "selected"
                }`}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className="drilling-menu">
          <span
            onClick={() => toggleAccordion(drillData.drillingPositions.title)}
            className={`drilling-header ${
              activeMenu === "Drilling positions" && openMenu && "open"
            }`}
          >
            <span></span>
            {drillData.drillingPositions.title}
            {activeMenu === "Drilling positions"&&openMenu?<ArrowDropDownCircleRounded className='rotate'/> : <ArrowDropDownCircleRounded/>} 
          </span>
          <div
            className={`drilling-items ${
              activeMenu === "Drilling positions" && openMenu && "open"
            }`}
          >
            {drillData.drillingPositions.content.map((el, i) => (
              <div
                key={i}
                onClick={() => handleDrillingPositions(el)}
                className={`drilling-item ${
                  selectedDrillingPositions.includes(el) && "selected"
                }`}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className="drilling-menu">
          <span
            onClick={() => toggleAccordion(drillData.rigPositions.title)}
            className={`drilling-header ${
              activeMenu === "Rig positions" && openMenu && "open"
            }`}
          >
            <span></span>
            {drillData.rigPositions.title}
            {activeMenu === "Rig positions"&&openMenu?<ArrowDropDownCircleRounded className='rotate'/> : <ArrowDropDownCircleRounded/>} 
          </span>
          <div
            className={`drilling-items ${
              activeMenu === "Rig positions" && openMenu && "open"
            }`}
          >
            {drillData.rigPositions.content.map((el, i) => (
              <div
                key={i}
                onClick={() => handleRigPositions(el)}
                className={`drilling-item ${
                  selectedRigPositions.includes(el) && "selected"
                }`}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drilling;
