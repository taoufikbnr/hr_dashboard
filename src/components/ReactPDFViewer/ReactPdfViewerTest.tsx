import React, { useRef, useState } from 'react'
import { resume } from '../../data/icons'
import { NextIcon, PreviousIcon, RenderSearchProps, searchPlugin } from '@react-pdf-viewer/search';
import { Icon, MinimalButton, Position, Tooltip, Viewer,Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
const ReactPdfViewerTest = () => {
  const searchPluginInstance = searchPlugin();
  const toolbarPluginInstance = toolbarPlugin();
  const {Search,ShowSearchPopover} = searchPluginInstance
    const {Toolbar} = toolbarPluginInstance
  const [readyToSearch, setReadyToSearch] = useState(false);

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
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
                <Search>
                    {(renderSearchProps:RenderSearchProps) => {
                        return (
                            <>
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        padding: '0 2px',
                                    }}
                                >
                                    <input
                                        style={{
                                            border: 'none',
                                            padding: '8px',
                                            width: '200px',
                                        }}
                                        placeholder="Enter to search"
                                        type="text"
                                        value={renderSearchProps.keyword}
                                        onChange={(e) => {
                                            renderSearchProps.setKeyword(e.target.value);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.keyCode === 13 && renderSearchProps.keyword) {
                                                renderSearchProps.search();
                                                renderSearchProps.jumpToNextMatch();
                                            }
                                        }}
                                    />
                                    <Tooltip
                                        position={Position.BottomCenter}
                                        target={
                                            <button
                                                style={{
                                                    background: '#fff',
                                                    border: 'none',
                                                    borderBottom: `2px solid ${
                                                        renderSearchProps.matchCase ? 'blue' : 'transparent'
                                                    }`,
                                                    height: '100%',
                                                    padding: '0 2px',
                                                }}
                                                onClick={() =>
                                                    renderSearchProps.changeMatchCase(!renderSearchProps.matchCase)
                                                }
                                            >
                                                <Icon>
                                                    <path d="M15.979,21.725,9.453,2.612a.5.5,0,0,0-.946,0L2,21.725" />
                                                    <path d="M4.383 14.725L13.59 14.725" />
                                                    <path d="M0.5 21.725L3.52 21.725" />
                                                    <path d="M14.479 21.725L17.5 21.725" />
                                                    <path d="M22.5,21.725,18.377,9.647a.5.5,0,0,0-.946,0l-1.888,5.543" />
                                                    <path d="M16.92 16.725L20.794 16.725" />
                                                    <path d="M21.516 21.725L23.5 21.725" />
                                                </Icon>
                                            </button>
                                        }
                                        content={() => 'Match case'}
                                        offset={{ left: 0, top: 8 }}
                                    />
                                    <Tooltip
                                        position={Position.BottomCenter}
                                        target={
                                            <button
                                                style={{
                                                    background: '#fff',
                                                    border: 'none',
                                                    borderBottom: `2px solid ${
                                                        renderSearchProps.wholeWords ? 'blue' : 'transparent'
                                                    }`,
                                                    height: '100%',
                                                    padding: '0 2px',
                                                }}
                                                onClick={() =>
                                                    renderSearchProps.changeWholeWords(!renderSearchProps.wholeWords)
                                                }
                                            >
                                                <Icon>
                                                    <path d="M0.500 7.498 L23.500 7.498 L23.500 16.498 L0.500 16.498 Z" />
                                                    <path d="M3.5 9.498L3.5 14.498" />
                                                </Icon>
                                            </button>
                                        }
                                        content={() => 'Match whole word'}
                                        offset={{ left: 0, top: 8 }}
                                    />
                                </div>
                                <div style={{ padding: '0 2px' }}>
                                    <Tooltip
                                        position={Position.BottomCenter}
                                        target={
                                            <MinimalButton onClick={renderSearchProps.jumpToPreviousMatch}>
                                                <PreviousIcon />
                                            </MinimalButton>
                                        }
                                        content={() => 'Previous match'}
                                        offset={{ left: 0, top: 8 }}
                                    />
                                </div>
                                <div style={{ padding: '0 2px' }}>
                                    <Tooltip
                                        position={Position.BottomCenter}
                                        target={
                                            <MinimalButton onClick={renderSearchProps.jumpToNextMatch}>
                                                <NextIcon />
                                            </MinimalButton>
                                        }
                                        content={() => 'Next match'}
                                        offset={{ left: 0, top: 8 }}
                                    />
                                </div>
                            </>
                        );
                    }}
                </Search>
                
            </div>
            <div
               style={{ height: '700px' }}
            >
                <Viewer fileUrl={resume} plugins={[searchPluginInstance]} />
            </div>
        </div>
      </Worker>
    </>

  )
}

export default ReactPdfViewerTest