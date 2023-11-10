import { AttachFile } from "@mui/icons-material"
import "./cvs.css"
import { useDrag,useDrop } from 'react-dnd'
import { useState } from "react";
const CVs = () => {

  return (
    <div className='cv-container'>
        <h4 className="title">Add new a CV</h4>
        <label htmlFor="file" className='cv-upload' >
            <span className="label-content">
                <span>Browse files</span>
                <AttachFile className="attach-icon" />
            </span>
             <input id="file" type="file" style={{display:"none"}} />
        </label>
        <div className="drag-drop-cv">
            Drag and drop
        </div>
    </div>
  )
}

export default CVs