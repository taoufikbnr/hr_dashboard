import { useEffect, useRef, useState } from "react";
import "./sidebar.css";
import { Info, NotificationsNone, Search, Spa } from "@mui/icons-material";
import sidebarData from "../../data/sidebarData";
import PopUp from "../pop-up/PopUp";
import candidates from "../../data/candidates";
import IndustriesFilter from "../filters/industries/IndustriesFilter";
import TableLayout from "../table/Table";

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
        return <TableLayout title={title} />;
      case 1:
        return <IndustriesFilter />;
      default:
        return null; 
    }
  };
  return (
    <div className={`sidebar ${open && "active"}`}>
      <div className="sidebarWrapper" ref={sidebarContainerRef} id="sidebar">
        <ul lassName="sidebarItems">
          {sidebarData.map((item, i) => (
            <a onClick={handleClick("left", i)} className={`link ${currentIndex === i && open && "active"}`} href={item?.path}>
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
