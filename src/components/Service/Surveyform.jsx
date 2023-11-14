// import React, { useState,useEffect } from "react";
// import info_icon from "../../images/info_icon.svg";
// import bike_img from "../../images/bike_img.png";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";

// export default function SurveyForm(props) {
//   const {data} = props;
//   console.log("------>>>>>>>>>>>>>===========6666===========--", data);
//   const previtemes=null
//   const {
//     data,
//   setServices,
//   valvalue,
//   setfillValue,
//   fillvalue,
//   setvalValue,
//   currentIndex,
//   setCurrentIndex,
//   isYesChecked,
//   setIsYesChecked,
//   isChecked,
//   setIsChecked,
//   textValue,
//   setTextValue,
//   disabledIndices,
//   setDisabledIndices,
//   timer,
//   setTimer,
//   timerRef
//   } =props;
//   const currentItem = data[currentIndex];
//   useEffect(() => {
//     if (timer) {
//       const interval = setInterval(() => {
//         // Do something here
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [timer]);
//   let server="https://cfmotoworld.pythonanywhere.com";
//   // let server="http://127.0.0.1:8000/";

//   const handleCheckitemChange = (itemId, checkitemType) => {
//     let newitemes = [...itemes];

//     if (checkitemType === "yes") {
//       newitemes[itemId - 1].yes = true;
//       newitemes[itemId - 1].no = false;
//       newitemes[itemId - 1].executed = true;

//       if (itemId < itemes.length) {
//         newitemes[itemId].pointerEvents = "unset";
//         newitemes[itemId].backgroundColor = "#2B2A2A";
//       }
//     } else if (checkitemType === "no") {
//       newitemes[itemId - 1].yes = false;
//       newitemes[itemId - 1].no = true;
//       newitemes[itemId - 1].executed = false;
//     }

//     setitemes(newitemes);
//   };

//   const handleChange = (event,index) => {
//     isYesChecked[index]=event.target.value

//     // console.log("isYesChecked============",event.target.value)
//     setIsYesChecked([...isYesChecked]);

//       const index_=index
//       timerRef.current[index_] =setInterval(() => {
//         timer.current[index_] = timer.current[index_]+1
//         // timer[index_]+=1
//         // setTimer([...timer]);
//       }, 1000);

//     // else{
//     //   const index_=index
//     //   // timer[index_] = 0
//     //   // setTimer([...timer]);
//     //   clearInterval(timerRef.current[index_])
//     //   // cancelInter
//     // }
//   };
//   const handleTextChange = (event,index) => {
//     textValue[index]=event.target.value
//     setTextValue([...textValue]);
//   };
//   const handleTextChange2 = (event,index) => {
//     fillvalue[index]=event.target.value
//     setfillValue([...fillvalue]);
//   };
//   const handleTextChange3 = (event,index) => {
//     valvalue[index]=event.target.value
//     setvalValue([...valvalue]);
//   };

//   useEffect(() => {
//     if (data && data.length > 0) {
//       const newState = new Array(data.length).fill(false);
//       const strState = new Array(data.length).fill("");
//       const nbrState = new Array(data.length).fill(0);
//       console.log("str==+>> ",strState,[...strState])
//       setIsChecked(newState);
//       setIsYesChecked([...newState]);
//       setTextValue([...strState]);
//       setfillValue([...strState]);
//       setvalValue([...nbrState]);
//       setDisabledIndices([...newState]);
//       setTimer((prevState) => ({
//         ...prevState,
//         current: new Array(data.length).fill(0),
//         total: new Array(data.length).fill(0),
//         intervalId: new Array(data.length),
//       }));
//     }
//   }, [data]);
// console.log("data--------------------",data)
// const [itemes, setitemes] = useState([data]);
//   // FOR MODAL
//   const [open, setOpen] = useState(false);

//   const onOpenModal = () => setOpen(true);
//   const onCloseModal = () => setOpen(false);

//   const closeIcon = (
//     <svg
//       width="24px"
//       height="24px"
//       viewitem="0 0 24 24"
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
//         {data?.map((item, index) => (
//           <div
//             key={item.id}
//             style={{
//               pointerEvents: item.pointerEvents,
//               backgroundColor: item.backgroundColor,
//             }}
//             className=" bg-black-600 rounded-[10px] pt-[21px] md:pt-[19px] xl:pt-3 pl-8 md:pl-[42px] xl:pl-[22px] pb-5 md:pb-[25px] xl:pb-[34px] pr-4 md:pr-[49px] xl:pr-11"
//           >
//             {/* TITLE */}
//             <div
//               className="relative w-fit mb-5 md:mb-1 xl:mb-5"
//               onMouseEnter={() =>
//                 setitemes((previtemes) => {
//                   const newitemes = [...previtemes];
//                   newitemes[index].openTooltip = true;
//                   return newitemes;
//                 })
//               }
//               onMouseLeave={() =>
//                 setitemes((previtemes) => {
//                   const newitemes = [...previtemes];
//                   newitemes[index].openTooltip = false;
//                   return newitemes;
//                 })
//               }
//             >
//               <div className="flex items-start justify-start">
//                 <h4 className="text-f_18_l_23 text-white-100">
//                 {item?.name}
//                 </h4>

//                 {/* INFO ICON */}
//                 <div className="flex items-start justify-start relative ml-[9px]">
//                 {item?.instruction_active && item?.instructions?.length > 0 ? (
//                   <img src={info_icon} alt="info-icon" />
//                   ) : null}
//                   <div
//                     style={{ display: item.openTooltip ? "block" : "none" }}
//                     className=" absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[180%] w-2 h-2 bg-white-500 rotate-45"
//                   ></div>
//                 </div>
//               </div>

//               {/* TOOLTIP CONTENT */}
//               <div
//                 className="absolute top-[1.8rem] bg-white-500 w-max max-w-xs md:max-w-md xl:max-w-2xl rounded-[4px] p-4 z-10"
//                 style={{ display: item.openTooltip ? "block" : "none" }}
//               >
//                 {/* TEXT */}
//                 <div className="mb-7">
//                   <h3 className="text-f_20_l_25 leading-6 text-black-500">
//                   {item?.instructions}
//                   </h3>
//                 </div>

//                 {/* IMAGES */}
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-5">
//                 {item.images.map((image, index) => (
//       <img
//         key={index}
//         className="relative z-10 cursor-pointer"
//         src={image}
//         alt="img"
//         onClick={onOpenModal}
//       />
//     ))}
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
//                     {/* YES CHECKitem */}
//                     <div className="flex items-center">
//                       <input
//                         id={`yes-${item.id}`}
//                         checked={item.yes}
//                         type="checkitem"
//                         value=""
//                         className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
//                         onChange={() => handleCheckitemChange(item.id, "yes")}
//                       />
//                       <label
//                         htmlFor={`yes-${item.id}`}
//                         className="ml-[9px]  text-f_14_l_22 xl:text-f_18_l_28 text-success"
//                       >
//                         Yes
//                       </label>
//                     </div>

//                     {/* NO CHECKitem */}
//                     <div className="flex items-center">
//                       <input
//                         id={`no-${item.id}`}
//                         checked={item.no}
//                         type="checkitem"
//                         value=""
//                         className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
//                         onChange={() => handleCheckitemChange(item.id, "no")}
//                       />
//                       <label
//                         htmlFor={`no-${item.id}`}
//                         className="ml-[9px]  text-f_14_l_22 xl:text-f_18_l_28 text-error"
//                       >
//                         No
//                       </label>
//                     </div>
//                   </div>

//                   {/* FILL AND VALUE */}
//                   {item.no && (
//                     <div className="flex gap-x-7">
//                       {/* FILL INPUT */}
//                       <input
//                         className="w-[83px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
//                         placeholder="Fill"
//                         type="text"
//                         id={`input1-${item.id}`}
//                       />

//                       {/* VALUE INPUT */}
//                       <input
//                         className="w-[83px] xl:w-[95px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
//                         placeholder="Value"
//                         type="text"
//                         id={`input2-${item.id}`}
//                       />
//                     </div>
//                   )}
//                 </div>

//                 {/* RIGHT COMMENT */}
//                 {item.no && (
//                   <div className="w-full">
//                     {/* COMMENT INPUT */}
//                     <input
//                       className="w-full h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
//                       placeholder="Comment"
//                       type="text"
//                       id={`input3-${item.id}`}
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* RIGHT EXECUTED CHECKitem */}
//               <div className="flex flex-row-reverse md:flex-col items-center gap-x-2 md:gap-x-0 md:gap-y-3 ml-auto md:ml-0">
//                 <label
//                   htmlFor={`executed-${item.id}`}
//                   className=" text-f_14_l_22 xl:text-f_18_l_28 text-white-100"
//                 >
//                   Executed
//                 </label>
//                 <input
//                   id={`executed-${item.id}`}
//                   checked={item.executed}
//                   type="checkitem"
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

import React, { useEffect, useState } from "react"
import info_icon from "../../images/info_icon.svg"
import bike_img from "../../images/bike_img.png"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import { useAddNewServiceSurveyForm } from "../../Pages/AddNewService"

export default function SurveyForm() {
  const [boxes, setBoxes] = useState([])

  const { data, handleSetIsCheckedChange } = useAddNewServiceSurveyForm()

  console.log("survey form data data data", data)

  const handleCheckboxChange = (boxId, boxIndex, checkboxType) => {
    let newBoxes = [...boxes]

    handleSetIsCheckedChange(true, boxIndex)

    if (checkboxType === "yes") {
      newBoxes[boxIndex].yes = true
      newBoxes[boxIndex].no = false
      // newBoxes[boxIndex].executed = true

    
    } else if (checkboxType === "no") {
      newBoxes[boxIndex].yes = false
      newBoxes[boxIndex].no = true
      newBoxes[boxIndex].executed = false
    } else if (checkboxType === "executed") {
      newBoxes[boxIndex].executed = true
      newBoxes[boxIndex].pointerEvents = "none"
      newBoxes[boxIndex].backgroundColor = "#181818"
      if (boxIndex < (boxes.length-1)) {
        newBoxes[boxIndex+1].pointerEvents = "unset"
        newBoxes[boxIndex+1].backgroundColor = "#2B2A2A"
      }
    }

    setBoxes(newBoxes)
  }

  console.log("checkingHaDev boxes", boxes)

  // FOR MODAL
  const [open, setOpen] = useState(false)
  const [imagesrc, setImagesrc] = useState("")

  const onOpenModal = (src) => {
    setImagesrc(src);
    setOpen(true);
  }
  const onCloseModal = () => setOpen(false)

  const closeIcon = (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Menu / Close_LG">
        <path
          id="Vector"
          d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
  // FOR MODAL

  useEffect(() => {
    if (Array.isArray(data)) {
      const formattedData = data.map((el,index) => ({
        yes: false,
        no: false,
        executed: false,
        pointerEvents: index==0?"unset":"none",
        backgroundColor: index==0?"#2B2A2A":"#181818",
        openTooltip: false,
        ...el,
      }))
      setBoxes(formattedData)
    }
  }, [data])

  return (
    <>
      <div className="space-y-6">
        {boxes.map((box, index) => (
          <Card
            box={box}
            index={index}
            key={index}
            handleCheckboxChange={handleCheckboxChange}
            onOpenModal={onOpenModal}
            setBoxes={setBoxes}
          />
        ))}
      </div>

      {/* MODAL */}
      <div>
        <Modal
          open={open}
          onClose={onCloseModal}
          classNames={{
            modal: "!bg-black-800",
          }}
          closeIcon={closeIcon}
          center>
          <div>
            <img className="w-full h-full" src={imagesrc} alt="bike-img" />
          </div>
        </Modal>
      </div>
    </>
  )
}

const Card = (props) => {
  const { index, box, handleCheckboxChange, onOpenModal, setBoxes } = props
  console.log("box in card ",box)
  const {
    handleYesCheckboxToggle,
    startTimerController,
    endTimerController,
    textValue,
    handleTextChange,
    handleFillChange,
    fillvalue,
    valvalue,
    handleValvalueChange,
  } = useAddNewServiceSurveyForm()

  const handleOpenTooltip = () => {
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes]
      newBoxes[index].openTooltip = true
      return newBoxes
    })
  }
  const handleCloseTooltip = () => {
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes]
      newBoxes[index].openTooltip = false
      return newBoxes
    })
  }

  const handleYesToggle = () => {
    console.log("checkingHaDev handleYesToggle called")
    startTimerController(index)
    handleCheckboxChange(box.id, index, "yes")
    handleYesCheckboxToggle(true, index)

    endTimerController(index)
  }
  const handleNoToggle = () => {
    startTimerController(index)
    handleCheckboxChange(box.id, index, "no")
  }
  const handleExecutedToggle = () => {
    console.log("checkingHaDev handle executed toggle", box.id, index)
    if(box.executed===false){

    
      if (box.no && box.fill_active && fillvalue[index]) {
        endTimerController(index)

        handleCheckboxChange(box.id, index, "executed")
      } else if (box.no && box.value_active && valvalue[index]) {
        endTimerController(index)

        handleCheckboxChange(box.id, index, "executed")
      } else if(box.no 
                && !box.value_active && !box.fill_active){
                  endTimerController(index)

                  handleCheckboxChange(box.id, index, "executed")
      }
      else if (box.yes) {
        endTimerController(index)

        handleCheckboxChange(box.id, index, "executed")
      }
    }
  }

  return (
    <>
      <div
        style={{
          pointerEvents: box?.pointerEvents??"none",
          backgroundColor: box?.backgroundColor??"#181818",
        }}
        className=" bg-black-600 rounded-[10px] pt-[21px] md:pt-[19px] xl:pt-3 pl-8 md:pl-[42px] xl:pl-[22px] pb-5 md:pb-[25px] xl:pb-[34px] pr-4 md:pr-[49px] xl:pr-11">
        {/* TITLE */}
        <div
          className="relative w-fit mb-5 md:mb-1 xl:mb-5"
          onMouseEnter={handleOpenTooltip}
          onMouseLeave={handleCloseTooltip}>
          <div className="flex items-start justify-start">
            <h4 className="text-f_18_l_23 text-white-100">{box?.Maintainencepoint_name || ""}</h4>

            {/* INFO ICON */}
            {(box?.instructions || "").length > 0 && (
              <div className="flex items-start justify-start relative ml-[9px]">
                <img src={info_icon} alt="info-icon" />
                <div
                  style={{ display: box.openTooltip ? "block" : "none" }}
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[180%] w-2 h-2 bg-white-500 rotate-45"></div>
              </div>
            )}
          </div>

          {/* TOOLTIP CONTENT */}
          <div
            className="absolute top-[1.8rem] bg-white-500 w-max max-w-xs md:max-w-md xl:max-w-2xl rounded-[4px] p-4 z-10"
            style={{ display: box.openTooltip ? "block" : "none" }}>
            {/* TEXT */}
            <div className="mb-7">
              {/* <h3 className="text-f_20_l_25 leading-6 text-black-500">
                {box?.instructions || ""}
              </h3> */}
               <h3 className="text-f_20_l_25 leading-6 text-black-500" style={{ whiteSpace: "pre-line" }}>
                {box?.instructions || ""}
              </h3>
            </div>

            {/* IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-5">
              {(box?.images || []).map((url) => (
                <img
                  className="relative z-10 cursor-pointer"
                  src={url}
                  alt="img"
                  onClick={()=>{onOpenModal(url)}}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between pr-4 md:pr-0 gap-y-4 md:gap-y-0">
          {/* LEFT */}
          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-y-4 md:gap-y-3.5 xl:gap-y-0 xl:gap-x-6 w-full md:w-4/5 xl:w-[87%]">
            {/* LEFT */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-y-0 md:gap-x-6">
              {/* YES AND NO */}
              <div className="flex gap-x-6">
                {/* YES CHECKBOX */}
                <div className="flex items-center">
                  <input
                    id={`yes-${box.id}`}
                    checked={box.yes}
                    type="checkbox"
                    value=""
                    className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
                    onChange={() => handleYesToggle()}
                  />
                  <label
                    htmlFor={`yes-${box.id}`}
                    className="ml-[9px]  text-f_14_l_22 xl:text-f_18_l_28 text-success">
                    Yes
                  </label>
                </div>

                {/* NO CHECKBOX */}
                <div className="flex items-center">
                  <input
                    id={`no-${box.id}`}
                    checked={box.no}
                    type="checkbox"
                    value=""
                    className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
                    onChange={handleNoToggle}
                  />
                  <label
                    htmlFor={`no-${box.id}`}
                    className="ml-[9px]  text-f_14_l_22 xl:text-f_18_l_28 text-error">
                    No
                  </label>
                </div>
              </div>

              {/* FILL AND VALUE */}
              
                <div className="flex gap-x-7">
                  {/* FILL INPUT */}
                  {box.no && box.fill_active&&(
                  <input
                    className="w-[83px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
                    placeholder="Fill"
                    type="text"
                    id={`input1-${box.id}`}
                    value={fillvalue[index] || ""}
                    onChange={(e) => handleFillChange(e, index)}
                  />
                  )}
                  {/* VALUE INPUT */}
                  {box.no && box.value_active&&(
                  <input
                    className="w-[83px] xl:w-[95px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
                    placeholder="Value"
                    type="text"
                    id={`input2-${box.id}`}
                    value={valvalue[index] || ""}
                    onChange={(e) => handleValvalueChange(e, index)}
                  />
                  )}
                </div>
            
            </div>

            {/* RIGHT COMMENT */}
            {/* {box.no && ( */}
              <div className="w-full">
                {/* COMMENT INPUT */}
                <input
                  className="w-full h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
                  placeholder="Comment"
                  type="text"
                  id={`input3-${box.id}`}
                  value={textValue[index] || ""}
                  onChange={(e) => handleTextChange(e, index)}
                />
              </div>
            {/* )} */}
          </div>

          {/* RIGHT EXECUTED CHECKBOX */}
          <div className="flex flex-row-reverse md:flex-col items-center gap-x-2 md:gap-x-0 md:gap-y-3 ml-auto md:ml-0">
            <label
              htmlFor={`executed-${box.id}`}
              className=" text-f_14_l_22 xl:text-f_18_l_28 text-white-100">
              Executed
            </label>
            <input
              id={`executed-${box.id}`}
              checked={box.executed}
              type="checkbox"
              value=""
              className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
              onChange={handleExecutedToggle}
            />
          </div>
        </div>
      </div>
    </>
  )
}
