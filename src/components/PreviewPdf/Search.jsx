import { useState, useEffect } from "react";
import { pdfjs } from "react-pdf";

export const usePdfTextSearch = (file, searchString) => {
  const [pages, setPages] = useState([]);
  const [resultsList, setResultsList] = useState([]);

  useEffect(() => {
    pdfjs.getDocument(file).promise.then((docData) => {
      const pageCount = docData._pdfInfo.numPages;

      const pagePromises = Array.from(
        { length: pageCount },
        (_, pageNumber) => {
          return docData.getPage(pageNumber + 1).then((pageData) => {
            return pageData.getTextContent().then((textContent) => {
              return textContent.items.map(({ str }) => str).join(" ");
            });
          });
        }
      );

      return Promise.all(pagePromises).then((pages) => {
        setPages(pages);
      });
    });
  }, [file]);

  useEffect(() => {
    if (!searchString || !searchString.length) {
      setResultsList([]);
      return;
    }

    /* 
      Currently this regex is case-insensitive. This could be extended to be configurable. 
      Or could be extended to be a fuzzy search. Fuzzy search would need a more 
      complex return from the hook to be able to highlight the found term(s) in the view.
      EX: resultsList = Array<{ pageNumber: number, matchedTerms: Array<string> }>
    */
    const regex = new RegExp(`${searchString}*`, "i");
    const updatedResults = [];

    pages.forEach((text, index) => {
      if (regex.test(text)) {
        updatedResults.push(index + 1);
      }
    });

    setResultsList(updatedResults);
  }, [pages, searchString]);

  return resultsList;
};
