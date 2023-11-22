import React, { useState } from 'react'
import { Document, Page,pdfjs } from 'react-pdf'
import "./previewPdf.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PreviewPdf = ({pdf}) => {
    const [numPages, setNumPages] = useState(null);

    const onFileLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
  return (
    <div className="preview-pdf">
    <Document
            file={pdf}
            onLoadSuccess={onFileLoadSuccess}

                >
            {Array.from(new Array(numPages), (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                    renderTextLayer={false}
                                    renderInteractiveForms={false}
                                    renderMode="canvas"
                                />
                            ))}
                </Document>  
    </div>
  )
}

export default PreviewPdf