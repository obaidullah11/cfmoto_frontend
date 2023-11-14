import React, {
    useRef,
    useState,
    useEffect,
    createContext,
    useContext,
  } from "react"
  import Sidebar from "../components/Common/Sidebar"
  import Header from "../components/Common/Header"
  import bike_img from "../images/bike_img.png"
  import placeholder_img from "../images/camera_img.svg"
  import SurveyForm from "../components/Service/Surveyform"
  import { useNavigate } from "react-router-dom"
  import axios from "axios"
  import { ToastContainer, toast } from 'react-toastify';
//   const navigate = useNavigate();
  
//   React.useEffect(() => {
//     // console.log("data=--_>> ",localStorage.getItem("vinnData"))
//     if(!localStorage.getItem("vinnData")){
//       navigate("/vinn")
//     }
//     else{
//       getApiData();
//     }
  
//   }, [])
  const data = localStorage.getItem("vinnData");
  const parsed_data = JSON.parse(data);
function Repairing() {
    const navigate = useNavigate();
    const [openSidebar, setOpenSidebar] = useState(false);
    const data = localStorage.getItem("vinnData")
    const profile_id = localStorage.getItem("profile_id")
    const parsed_data = JSON.parse(data)
    const db_data = parsed_data?.data
    const product_id = db_data?.id
    const dateStr = db_data?.date_of_manufacture;
    const dateObj = new Date(dateStr);
    const year = dateObj.getFullYear();
    // console.log("db_data+++++>> ",db_data)
    const image_url = `https://api.cfmoto.world/${db_data?.image}`
    // const [openSidebar, setOpenSidebar] = useState(false)
    const [comment, setComment] = useState("")
    const [selectedFile1, setSelectedFile1] = useState(null)
    const [selectedFile2, setSelectedFile2] = useState(null)
    const [selectedFile3, setSelectedFile3] = useState(null)
    const [selectedFile4, setSelectedFile4] = useState(null)
    const [files, setFiles] = useState([null, null, null, null])
    const [elapsedTime, setElapsedTime] = useState(0)
  
    const timers = useRef([])
    const [services, setServices] = useState([])
    const [fillvalue, setfillValue] = useState({})
    const [valvalue, setvalValue] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentItem = services[currentIndex]
    ///////
    const [isYesChecked, setIsYesChecked] = useState({})
    const [isChecked, setIsChecked] = useState({})
    const [textValue, setTextValue] = useState({})
  
    const timerRef = useRef([])
    const [timer, setTimer] = useState({})
    const [disabledIndices, setDisabledIndices] = useState([])
    const [timerValue, setTimerValue] = useState(0)
    const [timerRunning, setTimerRunning] = useState(false)
  
    const fileInputRef1 = useRef(null)
    const fileInputRef2 = useRef(null)
    const fileInputRef3 = useRef(null)
    const fileInputRef4 = useRef(null)
  
    const handleImageClick = (ref) => {
      console.log("image pciker ", ref)
      ref.current.click()
    }
  
    const handleFileSelect1 = (event) => {
      setSelectedFile1(URL.createObjectURL(event.target.files[0]))
      files[0] = event.target.files[0]
      setFiles([...files])
    }
  
    const handleFileSelect2 = (event) => {
      setSelectedFile2(URL.createObjectURL(event.target.files[0]))
      files[1] = event.target.files[0]
      setFiles([...files])
    }
  
    const handleFileSelect3 = (event) => {
      setSelectedFile3(URL.createObjectURL(event.target.files[0]))
      files[2] = event.target.files[0]
      setFiles([...files])
    }
  
    const handleFileSelect4 = (event) => {
      setSelectedFile4(URL.createObjectURL(event.target.files[0]))
      files[3] = event.target.files[0]
      setFiles([...files])
    }
  
    const handleSetIsCheckedChange = (checked, index) => {
      isChecked[index] = checked
      // let int;
      setIsChecked((prev) => ({ ...prev, [index]: checked }))
  
      // if (checked) {
      //   saveServicesSingle(index)
      // }
    }
  
    console.log("checkingHaDev timer check", timer)
  
    const handleTextChange = (event, index) => {
      setTextValue((prev) => ({ ...prev, [index]: event.target.value || "" }))
    }
    const handleFillChange = (event, index) => {
      setfillValue((prev) => ({ ...prev, [index]: event.target.value || "" }))
    }
    const handleValvalueChange = (event, index) => {
      setvalValue((prev) => ({ ...prev, [index]: event.target.value || "" }))
    }
  
    const startTimerController = (index) => {
      const alreadyStarted = timerRef.current[index]
      console.log("checkingHaDev startTimerController", index, alreadyStarted)
  
      if (!alreadyStarted) {
        timerRef.current[index] = setInterval(() => {
          timers.current[index] = (timers.current[index] || 0) + 1
  
          setTimer((prev) => ({ ...prev, [index]: (prev[index] || 0) + 1 }))
        }, 1000)
      }
    }
    const endTimerController = (index) => {
      const alreadyStarted = timerRef.current[index]
  
      if (alreadyStarted) {
        const timerValue = timers.current[index]
  
        if (!timerValue) {
          timers.current[index] = 0
        }
  
        clearInterval(timerRef.current[index])
      }
    }
  
    const handleYesCheckboxToggle = (checked = false, index) => {
      setIsYesChecked((prev) => ({ ...prev, [index]: checked }))
      if (checked) startTimerController(index)
      else endTimerController(index)
    }
  
    const saveServicesSingle = async (i) => {
      const data = {
        is_active: isYesChecked[i],
        comment: textValue[i],
        executed: isChecked[i],
        fill: "Some fill value",
        value: 10.0,
        product: product_id,
        name: "Service One",
        time_spent: timerRef.current[i],
      }
  
      try {
        if (!data) {
          alert("Service form is empty!")
          return
        }
        const res = await axios.post(
          "https://api.cfmoto.world/product-service/create/",
          data
        )
        var formdata = new FormData()
        formdata.append(
          "description",
          `${services[i].name} history has been created with in ${timers.current[i]} s`
        )
        formdata.append("product", db_data?.id)
  
        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        }
        fetch(
          "https://api.cfmoto.world/history/create/",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error))
  
        alert("New Service has been created")
        if (res) {
          console.log("response of services ", res)
        }
      } catch (error) {
        console.log("Error uploading file: ", error)
      }
    }
    console.log("checkingHaDev save services isChecked", isChecked)
    const saveServices = async (e) => {
      e.preventDefault()
      const data = []
      console.log("checkingHaDev save services data s_______", isChecked)
      var time_sum = 0
      for (const index in isChecked) {
        if (Object.hasOwnProperty.call(isChecked, index)) {
          console.log(
            "checkingHaDev save services for",
            index,
            isChecked[index],
            isYesChecked
          )
          const value = isChecked[index]
  
          if (value) {
            data.push({
              is_active: isYesChecked[index],
              comment: textValue[index] || "",
              executed: isChecked[index] || "",
              fill: fillvalue[index] || "",
              value: valvalue[index] ? parseInt(valvalue[index]) : "",
              product: product_id,
              name: services.data[index].name,
              time_spent: timerRef.current[index],
              user: profile_id,
            })
            time_sum += timerRef.current[index]
          }
        }
      }
  
      console.log("checkingHaDev save services time data ", time_sum, data)
      if (data.length==0) {
        alert("Services is empty!")
        return
      }else{  try {
        
        const res = await axios.post(
          // "https://api.cfmoto.world/product-service/create/",
          "https://api.cfmoto.world/product-service/create/",
          data
        )
  
        if (res) {
          console.log("response of services ", res)
        }
        var formdata = new FormData()
        formdata.append(
          "description",
          `${data.length} Services has been created successfully with in ${time_sum} s`
          
          
            // "timestamp": "2023-09-21T12:00:00Z",
            // "description": "Description of the historical evffffffffffffffffffffffffffffffffent",
          
        
        )
        formdata.append("historical_note", ``)
          formdata.append("vehicle", db_data?.vehicle_id)
          formdata.append("owner_email", db_data?.orderer_email)
          formdata.append("plate_number", db_data?.plate_number)
          formdata.append("vin_code", db_data?.vin_code)
  
        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        }
        fetch(
          "https://api.cfmoto.world/history/create/",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error))
        alert(" history has been created")
        navigate("/vehicleData")
      } catch (error) {
        console.log("Error uploading file: ", error)
      }}
    
    }
    const postImgs = async (e) => {
      e.preventDefault()
      const data = new FormData()
      data.append("product", product_id)
      for (let i = 0; i < files.length; i++) {
        if (files[i] != null) {
          data.append(`image${i + 1}`, files[i])
        }
      }
      if (files.length==0) {
        alert("Value is empty!")
        return
      }else{
        try {
          const res = await axios.post(
            "https://api.cfmoto.world/service-image/",
            data
          )
          if (res) {
            setSelectedFile1("")
            setSelectedFile2("")
            setSelectedFile3("")
            setSelectedFile4("")
          }
          // alert("service Images  has been saved")
          
        } catch (error) {
          console.log("Error uploading file: ", error)
        }
      }
     
    }
  
    const cardData = async (e) => {
      e.preventDefault()
      if (!isChecked || !textValue || !isYesChecked) return
      const post = {
        is_active: isYesChecked,
        comment: textValue,
        executed: isChecked,
        product: product_id,
      }
  
      const res = await axios.post(
        "https://api.cfmoto.world/create/product-service/",
        post
      )
      if (res.data) {
        setTextValue("")
        setIsYesChecked({})
        setIsChecked({})
      }
    }
  
    const handleSubmit = async (e) => {
      if (comment.length>0 && files.length>0 ) {
  
      try {
        await saveServices(e);
      } catch (error) {
        console.log("Error in saveServices:", error);
        alert("Error: saveServices failed!");
        return;
      }
    
      try {
        await postImgs(e);
      } catch (error) {
        console.log("Error in postImgs:", error);
        alert("Error: postImgs failed!");
        return;
      }
    
     
        await cardData(e);
      
      e.preventDefault()
      const post = { product: product_id, note: comment }
      if (comment.length==0) {
        alert("Mechenical comments is empty!")
        return
      }else{
        try {
          const res = await axios.post(
            "https://api.cfmoto.world/mechanical-notes/create/",
            post
          )
    
          var formdata = new FormData()
          formdata.append("description", "Images and comments has been created")
          formdata.append("product", db_data?.id)
    
          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
          }
          fetch(
            "https://api.cfmoto.world/history/create/",
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error))
    
          alert("Images, comments and history has been created")
          navigate("/vehicleData")
    
          if (res) {
            setComment("")
          }
        } catch (e) {
          alert(e)
        }
      }
    }
    else{
      toast.error(
        `Please fill all Fields`
        , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
      
    }
  
    const allAPICall = async () => {
      const res = await axios.get(
        // "https://api.cfmoto.world//getallservices/"
        "https://api.cfmoto.world/getallservices/"
      )
      console.log("----------", res)
      setServices(res)
    }
    useEffect(() => {
      allAPICall()
    }, [])
    console.log("------->>>>>>>>>>>>>>.--", services)
  
    const handleConfirmService = async (name, instruction) => {
      const res = await axios.post(
        "https://api.cfmoto.world/services/create/",
        {
          name: name,
          instructions: instruction,
          instruction_active: true,
        }
      )
      allAPICall()
    }
  
    console.log("services__services__services__services__", services)
  
    const surveyFormContextValues = {
      data: services?.data || [],
      fillvalue,
      handleFillChange,
      valvalue,
      handleValvalueChange,
      handleYesCheckboxToggle,
      startTimerController,
      endTimerController,
      textValue,
      handleTextChange,
      handleSetIsCheckedChange,
    }
  
    const getProductImages = ()=>{
      const res =  axios.get(
        // "https://api.cfmoto.world/product-service/create/",
        // `https://api.cfmoto.world/api/service_image/${db_data?.id}/`,
        `https://api.cfmoto.world/api/service_image/${db_data?.id}/`,
      ).then((res)=>{
        if (res?.data && res.data.length > 0) {
          const data = res.data[0];
          
          if (data.image1) {
            setSelectedFile1(`https://api.cfmoto.world/${data.image1}`);
          }
          
          if (data.image2) {
            setSelectedFile2(`https://api.cfmoto.world/${data.image2}`);
          }
          
          if (data.image3) {
            setSelectedFile3(`https://api.cfmoto.world/${data.image3}`);
          }
          
          if (data.image4) {
            setSelectedFile4(`https://api.cfmoto.world/${data.image4}`);
          }
        }
  
     })
    }
  return (
    <>
    <div className="flex">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <Header setOpenSidebar={setOpenSidebar} />

      <main className="md:ml-[16.25rem] xl:ml-[21.125rem] pt-[62px] md:pt-[6.5625rem] w-full">
          {/* ADD NEW SERVICE */}
          <div className="px-[26px] md:pl-9 xl:pl-[3.25rem] md:pr-10 pt-[22px] md:pt-[42px] xl:pt-14 pb-11 xl:pb-16">
            <div className="flex flex-col md:flex-row mb-[22px] md:mb-[30px] xl:mb-14">
              {/* LEFT */}
              <div className="w-full mb-10 md:mb-0 md:w-1/2 md:pt-3 xl:pt-12">
                {/* IMAGE */}
                <div>
                  <img className="mx-auto" src={image_url} alt="bike-img" />
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full md:w-1/2 flex flex-col self-center">
                <div className="md:pl-5 xl:pl-[30px]">
                  {/* BIKE NAME */}
                  <div className="mb-3 md:mb-1 xl:mb-[86px]">
                    <h3 className="bg-gradient-text text-f_19_l_24 md:text-f_22_l_28 xl:text-f_27_l_34 text-left font-supremeBold">
                      {db_data?.model_name}, {year},{" "}
                      {db_data?.color}
                    </h3>
                  </div>

                  {/* SERVICE-KM */}
                  <div className="mb-3 md:mb-[30px] xl:mb-[83px]">
                    <h1 className=" text-blue text-f_16_l_20 md:text-f_22_l_28 xl:text-f_35_l_44 font-supremeBold">
                      Maintenance 0000123
                    </h1>
                  </div>

                  {/* SERVICE DESCRIPTION */}
                  <div>
                  <h4 className="text-f_16_l_20 md:text-f_18_l_23 xl:text-f_22_l_28 font-supremeBold text-white-100 mb-3 md:mb-1.5 xl:mb-4">
  Mileage of service <span><input type="text" class="rounded-lg px-4 py-2 bg-gray-900  w-16 h-8 border border-gray-400" /></span> km
</h4>
                    
                  </div>
                </div>
              </div>
            </div>

           

            {/* VEHICLE PHOTOS */}
            <div className="mb-[67px] md:mb-[41px] xl:mb-[90px]">
              {/* TITLE */}
              <div className="mb-6 md:mb-14 xl:mb-[43px]">
                <h3 className="text-f_20_l_25 md:text-f_22_l_28 text-white-100 font-supremeBold mb-3 md:mb-2.5">
                  Vehicle photos:
                </h3>
                <p className=" text-f_14_l_22 md:text-f_16_l_25 xl:text-f_18_l_28 text-white-100">
                  Photo of the speedometer (numbers must be legible), VIN code
                  (numbers must be legible), 45° front view ja 45° rear view
                </p>
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 md:gap-y-[27px] md:gap-x-[30px]">
                {/* IMAGE 1 */}
                <div>
                  {/* IMAGE AREA */}
                  <div
                    className="w-full h-[156px] md:h-[210px] lg:h-[305px] xl:h-[280px] flex items-center justify-center bg-contain bg-no-repeat bg-center bg-black-500 rounded-[10px]"
                    style={{
                      backgroundImage: selectedFile1
                        ? `url(${selectedFile1})`
                        : "none",
                    }}
                    onClick={(e) => handleImageClick(fileInputRef1)}>
                    {!selectedFile1 && (
                      <div className="flex flex-col justify-center items-center cursor-pointer ">
                        <img src={placeholder_img} alt="add-img" />
                        <div className=" text-f_18_l_28 mt-3.5">Add Photo</div>
                      </div>
                    )}
                  </div>

                  {/* INPUT */}
                  <input
                    type="file"
                    ref={fileInputRef1}
                    style={{ visibility: true, display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileSelect1}
                  />
                </div>

                {/* IMAGE 2 */}
                <div>
                  {/* IMAGE AREA */}
                  <div
                    className="w-full h-[156px] md:h-[210px] lg:h-[305px] xl:h-[280px] flex items-center justify-center bg-contain bg-no-repeat bg-center bg-black-500 rounded-[10px]"
                    style={{
                      backgroundImage: selectedFile2
                        ? `url(${selectedFile2})`
                        : "none",
                    }}
                    onClick={(e) => handleImageClick(fileInputRef2)}>
                    {!selectedFile2 && (
                      <div className="flex flex-col justify-center items-center cursor-pointer">
                        <img src={placeholder_img} alt="add-img" />
                        <div className=" text-f_18_l_28 mt-3.5">Add Photo</div>
                      </div>
                    )}
                  </div>

                  {/* INPUT */}
                  <input
                    type="file"
                    ref={fileInputRef2}
                    style={{ visibility: false, display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileSelect2}
                  />
                </div>

                {/* IMAGE 3 */}
                <div>
                  {/* IMAGE AREA */}
                  <div
                    className="w-full h-[156px] md:h-[210px] lg:h-[305px] xl:h-[280px] flex items-center justify-center bg-contain bg-no-repeat bg-center bg-black-500 rounded-[10px]"
                    style={{
                      backgroundImage: selectedFile3
                        ? `url(${selectedFile3})`
                        : "none",
                    }}
                    onClick={(e) => handleImageClick(fileInputRef3)}>
                    {!selectedFile3 && (
                      <div className="flex flex-col justify-center items-center cursor-pointer">
                        <img src={placeholder_img} alt="add-img" />
                        <div className=" text-f_18_l_28 mt-3.5">Add Photo</div>
                      </div>
                    )}
                  </div>

                  {/* INPUT */}
                  <input
                    type="file"
                    ref={fileInputRef3}
                    style={{ visibility: false, display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileSelect3}
                  />
                </div>

                {/* IMAGE 4 */}
                <div>
                  {/* IMAGE AREA */}
                  <div
                    className="w-full h-[156px] md:h-[210px] lg:h-[305px] xl:h-[280px] flex items-center justify-center bg-contain bg-no-repeat bg-center bg-black-500 rounded-[10px]"
                    style={{
                      backgroundImage: selectedFile4
                        ? `url(${selectedFile4})`
                        : "none",
                    }}
                    onClick={(e) => handleImageClick(fileInputRef4)}>
                    {!selectedFile4 && (
                      <div className="flex flex-col justify-center items-center cursor-pointer">
                        <img src={placeholder_img} alt="add-img" />
                        <div className=" text-f_18_l_28 mt-3.5">Add Photo</div>
                      </div>
                    )}
                  </div>

                  {/* INPUT */}
                  <input
                    type="file"
                    ref={fileInputRef4}
                    style={{ visibility: false, display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileSelect4}
                  />
                </div>
              </div>
            </div>

          
            {/* Customer description of errors: */}
            <div className="mb-7">
              <h3 className="text-f_22_l_28 md:text-f_27_l_34 font-supremeBold mb-[25px] md:mb-5">
                Customer description of errors
              </h3>

              <textarea 
              value={comment}
              onChange={(e)=>setComment(e.target.value)}
              className="h-[169px] border border-white-100 rounded-[10px] bg-transparent w-full" />
            </div>
             {/* The reciever of the work description: */}
             <div className="mb-7">
              <h3 className="text-f_22_l_28 md:text-f_27_l_34 font-supremeBold mb-[25px] md:mb-5">
              The reciever of the work description
              </h3>

              <textarea 
              value={comment}
              onChange={(e)=>setComment(e.target.value)}
              className="h-[169px] border border-white-100 rounded-[10px] bg-transparent w-full" />
            </div>
              {/*  Feedback from the mechanic */}
              <div className="mb-7">
              <h3 className="text-f_22_l_28 md:text-f_27_l_34 font-supremeBold mb-[25px] md:mb-5">
              Feedback from the mechanic
              </h3>

              <textarea 
              value={comment}
              onChange={(e)=>setComment(e.target.value)}
              className="h-[169px] border border-white-100 rounded-[10px] bg-transparent w-full" />
            </div>
                 {/* VEHICLE PHOTOS */}
                 <div className="mb-[67px] md:mb-[41px] xl:mb-[90px]">
              {/* TITLE */}
              <div className="mb-6 md:mb-14 xl:mb-[43px]">
                <h3 className="text-f_20_l_25 md:text-f_22_l_28 text-white-100 font-supremeBold mb-3 md:mb-2.5">
                  Uplode photos and videos:
                </h3>
                {/* <p className=" text-f_14_l_22 md:text-f_16_l_25 xl:text-f_18_l_28 text-white-100">
                  Photo of the speedometer (numbers must be legible), VIN code
                  (numbers must be legible), 45° front view ja 45° rear view
                </p> */}
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 md:gap-y-[27px] md:gap-x-[30px]">
                {/* IMAGE 1 */}
                <div>
                  {/* IMAGE AREA */}
                  <div
                    className="w-full h-[156px] md:h-[210px] lg:h-[305px] xl:h-[280px] bg-contain bg-no-repeat bg-center flex justify-center items-center bg-black-500 rounded-[10px]"
                    style={{
                      backgroundImage: selectedFile1
                        ? `url(${selectedFile1})`
                        : "none",
                    }}
                    onClick={(e) => handleImageClick(fileInputRef1)}>
                    {!selectedFile1 && (
                      <div className="flex flex-col justify-center items-center cursor-pointer">
                        <img src={placeholder_img} alt="add-img" />
                        <div className=" text-f_18_l_28 mt-3.5">Add Photo</div>
                      </div>
                    )}
                  </div>

                  {/* INPUT */}
                  <input
                    type="file"
                    ref={fileInputRef1}
                    style={{ visibility: false, display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileSelect1}
                  />
                </div>

                {/* IMAGE 2 */}
                <div>
                  {/* IMAGE AREA */}
                  <div
                    className="w-full h-[156px] md:h-[210px] lg:h-[305px] xl:h-[280px] bg-contain bg-no-repeat bg-center flex justify-center items-center bg-black-500 rounded-[10px]"
                    
                    style={{
                      backgroundImage: selectedFile2
                        ? `url(${selectedFile2})`
                        : "none",
                        backgroundSize: "cover", // Stretch the background image to cover the container
                        backgroundPosition: "center",
                    }}
                    onClick={(e) => handleImageClick(fileInputRef2)}>
                    {!selectedFile2 && (
                      <div className="flex flex-col justify-center items-center cursor-pointer">
                        <img src={placeholder_img} alt="add-img" />
                        <div className=" text-f_18_l_28 mt-3.5">Add Video</div>
                      </div>
                    )}
                  </div>

                  {/* INPUT */}
                  <input
                    type="file"
                    ref={fileInputRef2}
                    style={{ visibility: false, display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileSelect2}
                  />
                </div>

              

               
              </div>
            </div>
              {/* SPARE PARTS FOR SERVICE */}
              <div className="mb-10 md:mb-8 xl:mb-[51px]">
              {/* TITLE */}
              <div className="mb-6 md:mb-[26px]">
                <h3 className="text-f_20_l_25 xl:text-f_22_l_28 text-white-100 font-supremeBold">
                  Replaced parts
                </h3>
              </div>

              {/* ITEMS LIST */}
              <div className="space-y-4 md:space-y-[27px] xl:space-y-8">
                {/* ITEM */}
                <div className="bg-black-500 border-[0.5px] border-white-100 rounded-[10px] flex items-center px-4 md:pl-[34px] xl:pl-14 pt-3.5 xl:pt-[17px] pb-5">
                  {/* LEFT */}
                  <div className="w-[45%] md:w-[43.666667%] flex flex-col space-y-2 xl:space-y-4 uppercase">
                    <span className="text-blue text-f_16_l_20 xl:text-f_18_l_23">
                      SKU
                    </span>
                    <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                      C90038015200
                    </span>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col space-y-2 xl:space-y-4 uppercase">
                    <span className="text-f_16_l_20 xl:text-f_18_l_23 text-blue">
                      NAME
                    </span>
                    <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                      OIL FILTER (WITH BYPASS)
                    </span>
                  </div>
                </div>

              
              </div>
            </div>
            {/* SAVE SERVICE DATA BUTTON */}
            <button
              className="p-4 bg-gradient rounded-[10px] text-f_16_l_20 md:text-f_22_l_28 font-supremeMedium"
              >
              Save Maintenance Data
            </button>
          </div>
        </main>
    </div>
  </>
  )
}

export default Repairing