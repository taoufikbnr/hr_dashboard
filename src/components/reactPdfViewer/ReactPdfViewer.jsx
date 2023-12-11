import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';
import { NextIcon, PreviousIcon } from '@react-pdf-viewer/page-navigation';

const ReactPdfViewer = ({ resume,toolbarPluginInstance }) => {

    return (
        <div>
                <Viewer fileUrl={resume} plugins={[toolbarPluginInstance]} />
        </div>
    );
};

export default ReactPdfViewer;