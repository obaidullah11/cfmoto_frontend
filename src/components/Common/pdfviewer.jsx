// import React, { useState } from 'react';
// // import { Document, Page,pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// // import url from '../pdf/sample.pdf'
// import Sidebar from "../Common/Sidebar";
// import Header from "../Common/Header";

// import PDFViewer from "tailwind-pdf-viewer";
// import "tailwind-pdf-viewer/style.css";
// // import pdf from "./resume.pdf";
// import pdf from '../pdf/sample.pdf'
// // // const url =
// // // "../"

// export default function Test() {
      
//   // pdfjs.GlobalWorkerOptions.workerSrc = 
//   // `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//   // const [numPages, setNumPages] = useState(null);
//   // const [pageNumber, setPageNumber] = useState(1);
  
//   // /*To Prevent right click on screen*/
//   // document.addEventListener("contextmenu", (event) => {
//   //   event.preventDefault();
//   // });
    
//   // /*When document gets loaded successfully*/
//   // function onDocumentLoadSuccess({ numPages }) {
//   //   setNumPages(numPages);
//   //   setPageNumber(1);
//   // }
  
//   // function changePage(offset) {
//   //   setPageNumber(prevPageNumber => prevPageNumber + offset);
//   // }
  
//   // function previousPage() {
//   //   changePage(-1);
//   // }
  
//   // function nextPage() {
//   //   changePage(1);
//   // }
//   const [openSidebar, setOpenSidebar] = useState(false);
//   return (
//     <>





// <div className="flex">
//         <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

//         <Header setOpenSidebar={setOpenSidebar} />

//         <main className="md:ml-[16.25rem] xl:ml-[21.125rem] pt-[62px] md:pt-[6.5625rem] w-full">
//           {/* VEHICLE DATA */}
//           <PDFViewer pdfURL={pdf} />
//         </main>
//       </div>
   
//     </>
//   );
// }
