import React, { useState } from 'react';
import { Icon, MinimalButton, Position, Tooltip, Viewer,Worker } from '@react-pdf-viewer/core';
import { NextIcon, PreviousIcon, RenderSearchProps, searchPlugin } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';

const ReactPdfViewer = ({ resume,searchPluginInstance }) => {
    return (
        <div
        className="rpv-core__viewer"
        style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}
    >
        <div
            style={{
                alignItems: 'center',
                backgroundColor: '#eeeeee',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                padding: '4px',
            }}
        >
 
        </div>
        <div
            style={{
                flex: 1,
                overflow: 'hidden',
            }}
        >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                     <Viewer fileUrl={resume} plugins={[searchPluginInstance]} />
            </Worker>

        </div>
    </div>
    );
};

export default ReactPdfViewer;