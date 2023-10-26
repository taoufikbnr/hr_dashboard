import React, { useEffect, useRef, useState } from "react";
import "./globalCandidateArea.css";
import { ImperativePanelHandle, Panel, PanelGroup, PanelResizeHandle, resize } from "react-resizable-panels";
import ResizeHandle from "./ResizeHandle";
import CandidateInfoCard from "../candidate-info/CandidateInfoCard";
import TabCV from "../TabCV/TabCV";
import CandidatePersonalinformations from "../candidate-info/CandidatePersonalinformations";
import styles from "./styles.module.css";
import candidates from "../../data/candidates";
import ReactPaginate from "react-paginate";

const GlobalCandidateArea = props => {
  const ref = useRef(null);
  const [isItemFocused, setIsItemFocused] = useState(0);
  const [countCvs, setCountCvs] = useState(0);

  const collapsePanel = () => {
    const panel = ref.current;
    if (panel) {
      panel.resize(50, "percentages");
    }
  };

  useEffect(
    () => {
      props.selectedItem(countCvs);
    },
    [countCvs]
  );

  const selectedItemIndex = index => {
    setIsItemFocused(index);
  };
  const countSelectionDirect = count => {
    if (count === 1) {
      setCountCvs(countCvs + 1);
    } else {
      setCountCvs(countCvs - 1);
    }
  };

  const itemsPerPage = 5; 
  const [currentPage, setCurrentPage] = useState(0); 
  const indexOfFirstItem = currentPage * itemsPerPage;
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  const currentCandidates = candidates.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
console.log(candidates[isItemFocused+indexOfFirstItem]);
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.TopRow} />
        <div className={styles.BottomRow}>
          <PanelGroup autoSaveId="example" direction="horizontal">
            <Panel className={styles.Panel} collapsible={true} order={1} defaultSize={50} ref={ref}>
              <CandidatePersonalinformations selectedItemInfos={isItemFocused} />
              <div className="listCandidates">
                {currentCandidates.map((item, index) => (
                  <CandidateInfoCard
                    data={item}
                    index={index}
                    focused={isItemFocused == index+indexOfFirstItem ? true : false}
                    selectedItem={() => selectedItemIndex(index+indexOfFirstItem)}
                    countSelection={count => countSelectionDirect(count)}
                  />
                ))}
              </div>
              <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(candidates.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active current"}
      />
            </Panel>
            <ResizeHandle resizeAction={collapsePanel} />
            <Panel className={styles.Panel} collapsible={false} order={2} minSize={50}>
              <TabCV />
              <div className="listCandidates">
                {candidates[isItemFocused].resume1.map((item, index) => (
                  <>
                    <img src={item} style={{ width: "100%" }} />
                    <br />
                  </>
                ))}

                {/* <embed src="https://www.africau.edu/images/default/sample.pdf" style={{ width: "100%", height: "92vh" }} /> */}
              </div>
            </Panel>
          </PanelGroup>
        </div>
      </div>
    </>
  );
};

export default GlobalCandidateArea;
