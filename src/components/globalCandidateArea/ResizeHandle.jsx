import React, { useRef } from "react";
import { PanelResizeHandle } from "react-resizable-panels";

import styles from "./styles.module.css";
import divise from "../../icons/divise.png";

const ResizeHandle = ({ resizeAction }) => {
  return (
    <PanelResizeHandle className={[styles.ResizeHandleOuter, "className"].join(" ")} id={"id"}>
      <div className={styles.ResizeHandleInner}>
        <svg className={styles.Icon} viewBox="0 0 24 24">
          <path fill="currentColor" d="M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z" />
        </svg>
      </div>
      <input type="button" onClick={resizeAction} className={styles.resizeBtn} />
    </PanelResizeHandle>
  );
};

export default ResizeHandle;
