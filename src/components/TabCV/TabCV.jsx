import { useState } from "react";
import { Keyword_empty, LinkedIn, Linkedin_in, Linkedin_in_white, PFS_CV_Empty } from "../../data/icons";
import "./tabcv.css";
import ReactSearch from "../reactPdfViewer/ReactSearch";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";

const TabCV = ({Toolbar}) => {

  const [selectedTab, setSelectedTab] = useState("CV 1");

  const handleTabClick = tabName => {
    setSelectedTab(tabName);
  };
  return (
    <div className="tabCv-wrapper">
      <div className="tabCv-left">
        <span onClick={() => handleTabClick("CV 1")} className={selectedTab === "CV 1" ? "selected" : ""}>
          CV 1
        </span>
        <span onClick={() => handleTabClick("CV 2")} className={selectedTab === "CV 2" ? "selected" : ""}>
          CV 2
        </span>
        <span onClick={() => handleTabClick("linkedIn")} className={selectedTab === "linkedIn" ? "selected" : ""}>
          <img width={25} src={selectedTab === "linkedIn" ? Linkedin_in_white : Linkedin_in} alt="" />
        </span>
        <span onClick={() => handleTabClick("PFS")} className={selectedTab === "PFS" ? "selected" : ""}>
          PFS
        </span>
      </div>
      <div className="tabCv-right">
        {/* <img width={25} src={Keyword_empty} alt="" /> */}
        <Toolbar/>
      </div>
    </div>
  );
};

export default TabCV;
