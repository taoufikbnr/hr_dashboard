import * as React from 'react';
import { Icon, MinimalButton, Position, Tooltip, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

import { searchPlugin } from '@react-pdf-viewer/search';
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