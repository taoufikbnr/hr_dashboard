import { CopyAllOutlined, Try } from "@mui/icons-material";
import "./personalinformations.css";
import { Copy_paste, LinkedIn, Message_Empty } from "../../data/icons";
import { useState } from "react";
import candidates from "../../data/candidates";

const CandidatePersonalinformations = props => {
  const handleClick = text => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(text);
      })
      .catch(error => {
        console.error("Failed to copy text: ", error);
      });
  };
  const [first, setfirst] = useState("first name");
  const [last, setlast] = useState("last name");

  return (
    <div className="personal-info-wrapper">
      <div className="personal-info-name">
        <p>
          <b> {candidates[props.selectedItemInfos].fullName} </b>{" "}
          <img onClick={() => handleClick(candidates[props.selectedItemInfos].fullName)} width={15} src={Copy_paste} alt="" />
        </p>
        <p>
          {candidates[props.selectedItemInfos].email}{" "}
          <img onClick={() => handleClick(candidates[props.selectedItemInfos].email)} width={15} src={Copy_paste} alt="" />
        </p>
      </div>
      <a href={candidates[props.selectedItemInfos].linkedinURL}>
        <img width={30} src={LinkedIn} alt="LinkedIn" />
      </a>
      <div className="personal-info-phone">
        <p>
          {candidates[props.selectedItemInfos].phone1}
          <img onClick={() => handleClick(candidates[props.selectedItemInfos].phone1)} width={15} src={Copy_paste} alt="" />
        </p>
        <p>
          {candidates[props.selectedItemInfos].phone2}
          <img onClick={() => handleClick(candidates[props.selectedItemInfos].phone2)} width={15} src={Copy_paste} alt="" />
        </p>
      </div>
      <img width={30} src={Message_Empty} alt="" />
    </div>
  );
};

export default CandidatePersonalinformations;
