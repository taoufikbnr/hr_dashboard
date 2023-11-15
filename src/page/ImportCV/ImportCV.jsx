import { Add, AttachFile } from '@mui/icons-material';
import React, { useState } from 'react'
import { NativeTypes } from 'react-dnd-html5-backend';
import { useDrop } from 'react-dnd/dist';
import "./importcv.css"
import TableLayout from '../../components/table/Table';

const ImportCV = () => {

    const [file, setfile] = useState(null)
    const [{ isOver }, drop] = useDrop({
        accept:NativeTypes.FILE,
        drop: (item, monitor) => {
          const droppedFile = item.files;
          setfile(droppedFile)
        },
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      });
        const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
       setfile(selectedFile)
      };
    //
    const [linkedInfile, setlinkedInfile] = useState(null)
    const [{ isOverLinkedin }, dropLinkedin] = useDrop({
        accept:NativeTypes.FILE,
        drop: (item, monitor) => {
          const droppedFile = item.files;
          setlinkedInfile(droppedFile)
        },
        collect: (monitor) => ({
            isOverLinkedin: !!monitor.isOver(),
        }),
      });
        const handleFileChangeLinkedin = (e) => {
        const selectedFile = e.target.files[0];
        setlinkedInfile(selectedFile)
      };
  return (
<div className={`import-cv-container`}>
    <div className='cv-upload-container'>
        <div className='personal-cv-upload'>
            <label htmlFor="file" className='personal-cv-upload-label'>
                <span className="label-content">
                     <span>Browse files  </span>
                     <AttachFile/>
                </span>
                <input id="file" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
            </label>
            <div ref={drop} className={`drag-drop-personal-cv ${isOver ? '' : ''}`}>
                <span>
                {isOver ? <Add/> : 'Drag and drop personal CV here'}
                </span>
            </div>
        </div>
        <div className='linkedin-cv-upload'>
            <label htmlFor="file" className='linkedin-cv-upload-label'>
                <span className="label-content">
                     <span>Browse files  </span>
                     <AttachFile/>
                </span>
                <input id="file" type="file" style={{ display: 'none' }} onChange={handleFileChangeLinkedin} />
            </label>
            <div ref={dropLinkedin} className={`drag-drop-personal-cv ${isOverLinkedin ? '' : ''}`}>
                <span>
                {isOverLinkedin ? <Add/> : 'Drag and drop LinkedIn CV here'}
                </span>
            </div>
        </div>
    </div>
    <TableLayout/>
    </div>
  )
}

export default ImportCV