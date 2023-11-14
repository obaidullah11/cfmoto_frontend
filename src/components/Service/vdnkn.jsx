// Skip to content
// Search or jump to…
// Pull requests
// Issues
// Codespaces
// Marketplace
// Explore
 
// @obaidullah11 
// Hassnain-bit
// /
// CFMoto
// Public
// Fork your own copy of Hassnain-bit/CFMoto
// Code
// Issues
// Pull requests
// Actions
// Projects
// Security
// Insights
// Beta Try the new code view
// CFMoto/src/components/Service/SurveyForm.jsx /
// @Hassnain-bit
// Hassnain-bit Service page complete
// Latest commit f164930 2 days ago
//  History
//  1 contributor
// 334 lines (311 sloc)  11 KB
 

// import React, { useState } from "react";
// import info_icon from "../../images/info_icon.svg";
// import bike_img from "../../images/bike_img.png";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";

// export default function SurveyForm() {
//   const [boxes, setBoxes] = useState([
//     {
//       id: 1,
//       yes: false,
//       no: false,
//       executed: false,
//       pointerEvents: "unset",
//       backgroundColor: "#2B2A2A",
//       openTooltip: false,
//     },
//     {
//       id: 2,
//       yes: false,
//       no: false,
//       executed: false,
//       pointerEvents: "none",
//       backgroundColor: "#181818",
//       openTooltip: false,
//     },
//     {
//       id: 3,
//       yes: false,
//       no: false,
//       executed: false,
//       pointerEvents: "none",
//       backgroundColor: "#181818",
//       openTooltip: false,
//     },
//     {
//       id: 4,
//       yes: false,
//       no: false,
//       executed: false,
//       pointerEvents: "none",
//       backgroundColor: "#181818",
//       openTooltip: false,
//     },
//     {
//       id: 5,
//       yes: false,
//       no: false,
//       executed: false,
//       pointerEvents: "none",
//       backgroundColor: "#181818",
//       openTooltip: false,
//     },
//     {
//       id: 6,
//       yes: false,
//       no: false,
//       executed: false,
//       pointerEvents: "none",
//       backgroundColor: "#181818",
//       openTooltip: false,
//     },
//     {
//       id: 7,
//       yes: false,
//       no: false,
//       executed: false,
//       pointerEvents: "none",
//       backgroundColor: "#181818",
//       openTooltip: false,
//     },
//   ]);

//   const handleCheckboxChange = (boxId, checkboxType) => {
//     let newBoxes = [...boxes];

//     if (checkboxType === "yes") {
//       newBoxes[boxId - 1].yes = true;
//       newBoxes[boxId - 1].no = false;
//       newBoxes[boxId - 1].executed = true;

//       if (boxId < 7) {
//         newBoxes[boxId].pointerEvents = "unset";
//         newBoxes[boxId].backgroundColor = "#2B2A2A";
//       }
//     } else if (checkboxType === "no") {
//       newBoxes[boxId - 1].yes = false;
//       newBoxes[boxId - 1].no = true;
//       newBoxes[boxId - 1].executed = false;
//     }

//     setBoxes(newBoxes);
//   };

//   // FOR MODAL
//   const [open, setOpen] = useState(false);

//   const onOpenModal = () => setOpen(true);
//   const onCloseModal = () => setOpen(false);

//   const closeIcon = (
//     <svg
//       width="24px"
//       height="24px"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g id="Menu / Close_LG">
//         <path
//           id="Vector"
//           d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
//           stroke="#ffffff"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </g>
//     </svg>
//   );
//   // FOR MODAL

//   return (
//     <>
//       <div className="space-y-6">
//         {boxes.map((box, index) => (
//           <div
//             key={box.id}
//             style={{
//               pointerEvents: box.pointerEvents,
//               backgroundColor: box.backgroundColor,
//             }}
//             className=" bg-black-600 rounded-[10px] pt-[21px] md:pt-[19px] xl:pt-3 pl-8 md:pl-[42px] xl:pl-[22px] pb-5 md:pb-[25px] xl:pb-[34px] pr-4 md:pr-[49px] xl:pr-11"
//           >
//             {/* TITLE */}
//             <div
//               className="relative w-fit mb-5 md:mb-1 xl:mb-5"
//               onMouseEnter={() =>
//                 setBoxes((prevBoxes) => {
//                   const newBoxes = [...prevBoxes];
//                   newBoxes[index].openTooltip = true;
//                   return newBoxes;
//                 })
//               }
//               onMouseLeave={() =>
//                 setBoxes((prevBoxes) => {
//                   const newBoxes = [...prevBoxes];
//                   newBoxes[index].openTooltip = false;
//                   return newBoxes;
//                 })
//               }
//             >
//               <div className="flex items-start justify-start">
//                 <h4 className="text-f_18_l_23 text-white-100">
//                   Clean or replace the air filter
//                 </h4>

//                 {/* INFO ICON */}
//                 <div className="flex items-start justify-start relative ml-[9px]">
//                   <img src={info_icon} alt="info-icon" />
//                   <div
//                     style={{ display: box.openTooltip ? "block" : "none" }}
//                     className=" absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[180%] w-2 h-2 bg-white-500 rotate-45"
//                   ></div>
//                 </div>
//               </div>

//               {/* TOOLTIP CONTENT */}
//               <div
//                 className="absolute top-[1.8rem] bg-white-500 w-max max-w-xs md:max-w-md xl:max-w-2xl rounded-[4px] p-4 z-10"
//                 style={{ display: box.openTooltip ? "block" : "none" }}
//               >
//                 {/* TEXT */}
//                 <div className="mb-7">
//                   <h3 className="text-f_20_l_25 leading-6 text-black-500">
//                     Explanations of how to perform this service procedure can be
//                     written here.
//                   </h3>
//                 </div>

//                 {/* IMAGES */}
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-5">
//                   <img
//                     className="relative z-10 cursor-pointer"
//                     src={bike_img}
//                     alt="img"
//                     onClick={onOpenModal}
//                   />
//                   <img
//                     className="relative z-10 cursor-pointer"
//                     src={bike_img}
//                     alt="img"
//                     onClick={onOpenModal}
//                   />
//                   <img
//                     className="relative z-10 cursor-pointer"
//                     src={bike_img}
//                     alt="img"
//                     onClick={onOpenModal}
//                   />
//                   <img
//                     className="relative z-10 cursor-pointer"
//                     src={bike_img}
//                     alt="img"
//                     onClick={onOpenModal}
//                   />
//                 </div>
//               </div>
//             </div>

            

//             <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between pr-4 md:pr-0 gap-y-4 md:gap-y-0">
//               {/* LEFT */}
//               <div className="flex flex-col xl:flex-row items-start xl:items-center gap-y-4 md:gap-y-3.5 xl:gap-y-0 xl:gap-x-6 w-full md:w-4/5 xl:w-[87%]">
//                 {/* LEFT */}
//                 <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-y-0 md:gap-x-6">
//                   {/* YES AND NO */}
//                   <div className="flex gap-x-6">
//                     {/* YES CHECKBOX */}
//                     <div className="flex items-center">
//                       <input
//                         id={`yes-${box.id}`}
//                         checked={box.yes}
//                         type="checkbox"
//                         value=""
//                         className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
//                         onChange={() => handleCheckboxChange(box.id, "yes")}
//                       />
//                       <label
//                         htmlFor={`yes-${box.id}`}
//                         className="ml-[9px]  text-f_14_l_22 xl:text-f_18_l_28 text-success"
//                       >
//                         Yes
//                       </label>
//                     </div>

//                     {/* NO CHECKBOX */}
//                     <div className="flex items-center">
//                       <input
//                         id={`no-${box.id}`}
//                         checked={box.no}
//                         type="checkbox"
//                         value=""
//                         className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
//                         onChange={() => handleCheckboxChange(box.id, "no")}
//                       />
//                       <label
//                         htmlFor={`no-${box.id}`}
//                         className="ml-[9px]  text-f_14_l_22 xl:text-f_18_l_28 text-error"
//                       >
//                         No
//                       </label>
//                     </div>
//                   </div>

//                   {/* FILL AND VALUE */}
//                   {box.no && (
//                     <div className="flex gap-x-7">
//                       {/* FILL INPUT */}
//                       <input
//                         className="w-[83px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
//                         placeholder="Fill"
//                         type="text"
//                         id={`input1-${box.id}`}
//                       />

//                       {/* VALUE INPUT */}
//                       <input
//                         className="w-[83px] xl:w-[95px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
//                         placeholder="Value"
//                         type="text"
//                         id={`input2-${box.id}`}
//                       />
//                     </div>
//                   )}
//                 </div>

//                 {/* RIGHT COMMENT */}
//                 {box.no && (
//                   <div className="w-full">
//                     {/* COMMENT INPUT */}
//                     <input
//                       className="w-full h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
//                       placeholder="Comment"
//                       type="text"
//                       id={`input3-${box.id}`}
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* RIGHT EXECUTED CHECKBOX */}
//               <div className="flex flex-row-reverse md:flex-col items-center gap-x-2 md:gap-x-0 md:gap-y-3 ml-auto md:ml-0">
//                 <label
//                   htmlFor={`executed-${box.id}`}
//                   className=" text-f_14_l_22 xl:text-f_18_l_28 text-white-100"
//                 >
//                   Executed
//                 </label>
//                 <input
//                   id={`executed-${box.id}`}
//                   checked={box.executed}
//                   type="checkbox"
//                   value=""
//                   className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       <div>
//         <Modal
//           open={open}
//           onClose={onCloseModal}
//           classNames={{
//             modal: "!bg-black-800",
//           }}
//           closeIcon={closeIcon}
//           center
//         >
//           <div>
//             <img className="w-full h-full" src={bike_img} alt="bike-img" />
//           </div>
//         </Modal>
//       </div>

      
//     </>
//   );
// }
