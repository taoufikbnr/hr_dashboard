import { useEffect, useRef, useState } from "react";
import "./sidebar.css";
import { Info, NotificationsNone, Search, Spa } from "@mui/icons-material";
import sidebarData from "../../data/sidebarData";
import PopUp from "../pop-up/PopUp";
import candidates from "../../data/candidates";
import IndustriesFilter from "../filters/industries/IndustriesFilter";
import TableLayout from "../table/Table";
import ClientsFilter from "../filters/clients/ClientsFilter";
import Drilling from "../filters/drilling/Drilling";
import AgeFilter from "../filters/age/Age";
import AvailabilitiesFilter from "../filters/availabilities/Availabilities";
import NationalitiesFilter from "../filters/nationalities/NationalitiesFilter";
import ResidenciesFilter from "../residencies/ResidenciesFilter";
import KeywordFilter from "../filters/keyword/KeywordFilter";
import CVs from "../filters/CVs/CVs";
import ContractsFilter from "../filters/contracts/ContractsFilter";
import ExperienceFilter from "../filters/experience/ExperienceFilter";

const Sidebar = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const [currentIndex, setCurrentIndex] = useState(null);
  const title = useRef();

  const handleClick = (newPlacement, i) => event => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setOpen(prev => currentIndex !== i || !prev);
    setPlacement(newPlacement);
    setCurrentIndex(i);
  };

  const sidebarContainerRef = useRef(null);
  const getPopupContent = (index) => {
    switch (index) {
      case 0:
        return <KeywordFilter />;
      case 1:
        return <IndustriesFilter />;
      case 4:
        return <Drilling />;
      case 5:
        return <ClientsFilter />;
      case 7:
        return <ResidenciesFilter />;
      case 9:
        return <NationalitiesFilter />;
      case 10:
        return <AgeFilter />;
      case 11:
        return <AvailabilitiesFilter />;
      case 15:
        return <ContractsFilter />;
      case 16:
        return <ExperienceFilter />;
      case 17:
          return <CVs />;
      default:
        return <TableLayout  title={title} />; 
    }
  };
  return (
    <div className={`sidebar ${open && "active"}`}>
      <div className="sidebarWrapper" ref={sidebarContainerRef} id="sidebar">
        <ul className="sidebarItems">
          {sidebarData.map((item, i) => (
            <a key={i} onClick={handleClick("left", i)} className={`link ${currentIndex === i && open && "active"}`} href={item?.path}>
              <li key={i} className={`sidebarItem ${open && "active"}`}>
                <img className="icons" width={item.size} src={currentIndex === i && open ? item.icon : item.iconEmpty} alt="" />{" "}
                <span className={`${currentIndex === i && open && "active"}`} ref={title}>
                  {item.title}
                </span>
              </li>
            </a>
          ))}
          <li key={"keyCvsCount"} className={`sidebarItem active"`}>
            {/* <img className="icons" width={25} alt="" />{" "} */}
            <span
              className={`${currentIndex === 1 && open && "active"}`}
              ref={title}
              style={{ color: "#000", marginTop: 45, marginLeft: 25 }}
            >
              {candidates.length + " CVs"}
              <br />
              {props.selectedCandidates !== 0 ? props.selectedCandidates + " CVs sélectionnés" : null}
            </span>
          </li>
        </ul>
        <PopUp  content={getPopupContent(currentIndex)} title={title} setOpen={setOpen} open={open} anchorEl={anchorEl} placement={placement} index={currentIndex} />
      </div>
    </div>
  );
};

export default Sidebar;
