import "./candidateInfo.css";
import React, { useState } from "react";

const CandidateInfoCard = props => {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const selectItem = () => {
    setIsItemSelected(!isItemSelected);
  };

  const handleChange = event => {
    if (event.target.checked) {
      setIsItemSelected(true);
      props.countSelection(1);
    } else {
      setIsItemSelected(false);
      props.countSelection(0);
    }
  };
  // const focusOnItem = () => {
  //   setIsItemFocused(!isItemFocused);
  // };

  return (
    <div
      className={props.focused ? "card-container  shadowStyle" : "card-container "}
      onClick={() => props.selectedItem(props.index)}
    >
      <div>
        <b>{props.data.fullName}</b>
        <p>
          Position : <span>{props.data.position}</span>
        </p>
        <p>
          Ingénieur Structure:
          <span>
            {props.data.structureIng1}
            <span />
          </span>
        </p>
        <p>
          Structural Engineer:
          <span>
            <span>{props.data.structureIng2}</span>
          </span>
        </p>
      </div>
      <div>
        {props.focused || isItemSelected ? (
          <input type="checkbox" name="" id="" style={{ cursor: "pointer" }} onChange={handleChange} />
        ) : null}
      </div>
    </div>
  );
};

export default CandidateInfoCard;
