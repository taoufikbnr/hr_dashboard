import React from "react";
import { useState } from "react";
import residenciesData from "../../data/residencies.json";
import "./residencies.css";
import { ArrowDropDownCircleRounded, Close } from "@mui/icons-material";

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
  const [filtredData, setfiltredData] = useState(residenciesData.countries.content);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [seach, setseach] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(residenciesData.countries.content);

  const handleCountrySelect = (index) => {
    const selectedCountry = filteredCountries[index];
    const updatedSelectedCountries = [...selectedCountries, selectedCountry];
    setSelectedCountries(updatedSelectedCountries);
    setFilteredCountries((prevFilteredCountries) =>
      prevFilteredCountries.filter((country, i) => i !== index)
    );
  };
  const handleCountryDeselect = (index) => {
    const deselectedCountry = selectedCountries[index];
    const updatedFilteredCountries = [...filteredCountries, deselectedCountry];
    setFilteredCountries(updatedFilteredCountries);
    setSelectedCountries((prevSelectedCountries) =>
      prevSelectedCountries.filter((country, i) => i !== index)
    );
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
      <div className="residencies-menu">

        <div className="country-filter">
          <div className="country-left">
          <span className={`residencies-header`}>
          {residenciesData.countries.title}
        </span>
          {selectedCountries.map((el, i) => (
              <div className='selected-countries' key={i}>
                {el.country}
                <Close className='closeBtn' onClick={() => handleCountryDeselect(i)}/>
              </div>
            ))}
            <div className='country-item country-search'>
            <input type="text" onChange={(e)=>setseach(e.target.value)} placeholder='________________________' />
            </div>
        {filteredCountries.filter(word=>word.country.toLocaleLowerCase().includes(seach.toLocaleLowerCase())).slice(0,1).map((el,i)=>
          <div className={`country-item ${!seach && 'hide'}`} key={i} onClick={()=>handleCountrySelect(i)}>
              {el.country}
          </div>  
          )}
        </div>
        <div className='country-right'>
        <span className={`residencies-header`}>
          {residenciesData.globalRegions.title}
        </span>
        {selectedCountries.map((el, i) => (
          <div className='selected-countries' key={i}>
              {el.location}
            </div>
          ))}
          <div className="country-item"><span style={{visibility:'hidden'}} >placeholder</span></div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default ResidenciesFilter;
