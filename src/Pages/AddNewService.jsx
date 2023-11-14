import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react"
import Modal from 'react-modal';
import Sidebar from "../components/Common/Sidebar"
import Header from "../components/Common/Header"
import bike_img from "../images/bike_img.png"
import placeholder_img from "../images/camera_img.svg"
import SurveyForm from "../components/Service/Surveyform"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const SurveyFormContext = createContext()
export const useAddNewServiceSurveyForm = () => useContext(SurveyFormContext)

function AddNewService() {
  const navigate = useNavigate()

  React.useEffect(() => {
    // console.log("data=--_>> ",localStorage.getItem("vinnData"))
    if (!localStorage.getItem("vinnData")) {
      navigate("/vinn")
    } else {
    }
  }, [])

  const data = localStorage.getItem("vinnData")
  const profile_id = localStorage.getItem("profile_id")
  const parsed_data = JSON.parse(data)
  const db_data = parsed_data?.data
  const product_id = db_data?.id
  const dateStr = db_data?.date_of_manufacture;
  const dateObj = new Date(dateStr);
  const year = dateObj.getFullYear();
  // console.log("db_data+++++>> ",db_data)
  const image_url = `https://cfmotoworld.pythonanywhere.com${db_data?.image}`
  const [openSidebar, setOpenSidebar] = useState(false)
  const [selectedMileage, setSelectedMileage] = useState('')
  const [MileageOptions, setMileageOptions] = useState([])
  const [comment, setComment] = useState("")
  const [selectedFile1, setSelectedFile1] = useState(null)
  const [selectedFile2, setSelectedFile2] = useState(null)
  const [selectedFile3, setSelectedFile3] = useState(null)
  const [selectedFile4, setSelectedFile4] = useState(null)
  const [files, setFiles] = useState([null, null, null, null])
  const [elapsedTime, setElapsedTime] = useState(0)
  const [selectedItems, setSelectedItems] = useState([])
  const [mentainence, setMentainance] = useState({})
  const [available, setAvailable] = useState(false)

  const timers = useRef([])
  const [services, setServices] = useState([])
  const [fillvalue, setfillValue] = useState({})
  const [valvalue, setvalValue] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const currentItem = services[currentIndex]
  ///////
  const [isYesChecked, setIsYesChecked] = useState({})
  const [isChecked, setIsChecked] = useState({})
  const [textValue, setTextValue] = useState({})

  const timerRef = useRef([])
  const [spareParts, setSpareParts] = useState([])
  const [timer, setTimer] = useState({})
  const [disabledIndices, setDisabledIndices] = useState([])
  const [timerValue, setTimerValue] = useState(0)
  const [timerRunning, setTimerRunning] = useState(false)

  const fileInputRef1 = useRef(null)
  const fileInputRef2 = useRef(null)
  const fileInputRef3 = useRef(null)
  const fileInputRef4 = useRef(null)
  const [showModal, setShowModal] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  useEffect( ()=>{
      
      const res =  axios.get(
        // "https://api.cfmoto.world/product-service/create/",
        `https://api.cfmoto.world/maintenance-lists/factory/${db_data?.factory_name}/`,
      ).then((res)=>{
        setLoading(false)
        // if("message" in res?.data){
        //   setAvailable(false)
        // }
        // else{
          // setInterval(countUp, 1000);
          getProductImages()
          getSpareParts()
          setMentainance(res?.data[0])
          console.log("86756tjjgtut768",res)
          console.log("86756tjjgtut768000000000",res?.data[0])
          console.log("86756tjjgtut768",mentainence)

          if (res.data && res.data[0].mileage) {
            // Extract mileage data and transform it into option objects
            const mileageOptions = res.data[0].mileage.map(m => ({
              value: m.Mileage,
              label: `${m.Mileage} Km`
            }));
            
            setMileageOptions(mileageOptions); // Update your mileageOptions state
          }
          
          // const options=[]
          // for(let i=0;i<res?.data?.length;i++){
          //   options.push({ value: `${res?.data[i]?.Mileage}`, label: `${res?.data[i]?.Mileage} Km` })
          // }
          // setMileageOptions(options)
          
          setAvailable(true)
        // }
        console.log("res------> ",res);
     })

      
    },[])
  const handleClick = () => {
    setShowModal(true);
    // if (checked) {
    //   saveServicesSingle(index)
    // }
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
  const handleConfirm = () => {
    // Handle confirm logic here
    setShowModal(false);
  };
  const handleCardClick = (cardId,item) => {
    if (selectedCards.includes(cardId)) {
      // If card is already selected, remove it from selectedCards
      setSelectedCards(selectedCards.filter((id) => id !== cardId));
      setSelectedItems(selectedItems.filter((item) => item?.id !== cardId))
    } else {
      // If card is not selected, add it to selectedCards
      setSelectedCards([...selectedCards, cardId]);
      setSelectedItems([...selectedItems,item])
    }
  };

 
  const handleCancel = () => {
    // Handle cancel logic here
    setShowModal(false);
  };
  
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
        "https://api.cfmoto.world/create_product_services/",
        // "https://api.cfmoto.world/product-service/create/",
        data
      )
      var formdata = new FormData()
      formdata.append(
        "description",
        `${services[i].name} history has been created with in ${timers.current[i]} s`
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
        // "https://obaidullah1122.pythonanywhere.com/history/create/",
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
            name: services.data[index].Maintainencepoint_name,
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
        "https://api.cfmoto.world/create_product_services/",
        // "https://api.cfmoto.world/product-service/create/",
        data
      )

      if (res) {
        console.log("response of services ", res)
      }
      var formdata = new FormData()
      formdata.append(
        "description",
        `${data.length} Maintenance Services has been created successfully with in ${time_sum} s`
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
        // "https://obaidullah1122.pythonanywhere.com/history/create/",
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
          // "https://api.cfmoto.world/service-image/",
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
          // "https://obaidullah1122.pythonanywhere.com/history/create/",
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
  const getSpareParts = ()=>{
    const res =  axios.get(
      // "https://api.cfmoto.world/product-service/create/",
      // `https://api.cfmoto.world/api/newspareparts/${db_data?.sku}/`,
      `https://api.cfmoto.world/api/newspareparts/${db_data?.sku}/`,
    ).then((res)=>{
      if(res?.data && res?.data.length>0){
        setSpareParts(res?.data)
      }

   })
  }
  const allAPICall = async () => {
    if(selectedMileage){
      const res = await axios.get(
        // "https://api.cfmoto.world//getallservices/"
        // `https://api.cfmoto.world/getallservices/?sku_name=${db_data?.sku}&mileage=${selectedMileage}`
        `https://api.cfmoto.world/api/maintenance-list-point/factory/${db_data?.factory_name}/`
      )
      // console.log("----------", res)
      setServices(res)
    }

  }
  const dataMileage = async ()=>{
    const res = await axios.get(
      "https://api.cfmoto.world/mileages/",
    )
    const options=[]
    for(let i=0;i<res?.data?.length;i++){
      options.push({ value: `${res?.data[i]?.Mileage}`, label: `${res?.data[i]?.Mileage} Km` })
    }
    setMileageOptions(options)
    
  }
  useEffect(() => {
    dataMileage()
    getProductImages()
    getSpareParts()
    
  }, [])
  console.log("------->>>>>>>>>>>>>>.--", services)

  const handleConfirmService = async (name, instruction) => {
    const res = await axios.post(
      "https://obaidullah1122.pythonanywhere.com/services/create/",
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


  return (

     !loading?(
      <>
    <SurveyFormContext.Provider value={surveyFormContextValues}>
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
                    {mentainence?.Maintenance_list_name}
                    </h1>
                  </div>

                  {/* SERVICE DESCRIPTION */}
                  <div>
                        <h4 className="text-f_16_l_20 md:text-f_18_l_23 xl:text-f_22_l_28 font-supremeBold text-white-100 mb-3 md:mb-1.5 xl:mb-4">
        Mileage of Maintenance <span>

        {/* <Dropdown options={MileageOptions} onChange={(value)=>setSelectedMileage(value && value?.value?value.value:"")} placeholder="Select the mileage" /> */}

        <Dropdown className="custom-dropdown mt-5" options={MileageOptions} onChange={(value)=>setSelectedMileage(value && value?.value?value.value:"")} placeholder="Select the mileage" />
      </span>
      </h4>
                          
                        </div>
                  <div>
                    <h4 className="text-f_16_l_20 md:text-f_18_l_23 xl:text-f_22_l_28 font-supremeBold text-white-100 mb-3 md:mb-1.5 xl:mb-4">
                    Maintenance description:
                    </h4>
                    <p className="text-f_14_l_22 md:text-f_16_l_25 xl:text-f_18_l_28 text-white-100">
                    {mentainence?.Maintainence_description}
                    </p>
                  </div>
                  <button
                    className="mt-5 p-4  rounded-[10px] text-f_16_l_20 md:text-f_22_l_28 font-supremeMedium" onClick={allAPICall}
                    style={{ backgroundColor: '#181818' }}
                    >
                    <span style={{ fontSize: '24px', color:'#009bb4' }}>Next</span>
                  </button>
                </div>
              </div>
            </div>

            {/* SPARE PARTS FOR SERVICE */}
            <div className="mb-10 md:mb-8 xl:mb-[51px]">
              {/* TITLE */}
              <div className="mb-6 md:mb-[26px]">
                <h3 className="text-f_20_l_25 xl:text-f_22_l_28 text-white-100 font-supremeBold">
                  Spare parts for Maintenance:
                </h3>
              </div>

              {/* ITEMS LIST */}
             <div className="mb-10 md:mb-8 xl:mb-[51px]">
                    {/* TITLE */}
                 

                    {/* ITEMS LIST */}
                   
                    <div className="space-y-4 md:space-y-[27px] xl:space-y-8">
                      {/* ITEM */}

                      {
                      selectedItems.map((item)=>(
                       <>
                           <div className="bg-black-500 border-[0.5px] border-white-100 rounded-[10px] flex items-center px-4 md:pl-[34px] xl:pl-14 pt-3.5 xl:pt-[17px] pb-5">
                        {/* LEFT */}
                        <div className="w-[45%] md:w-[43.666667%] flex flex-col space-y-2 xl:space-y-4 uppercase">
                          <span className="text-blue text-f_16_l_20 xl:text-f_18_l_23">
                            SKU
                          </span>
                          <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                            {item?.product}
                          </span>
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col space-y-2 xl:space-y-4 uppercase">
                          <span className="text-f_16_l_20 xl:text-f_18_l_23 text-blue">
                            NAME
                          </span>
                          <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                            {item?.part_name}
                          </span>
                        </div>
                      </div>
                       
                       </> 
                      ))
                    }
                  
                      {/* <Sparepartmodal/> */}
                      <button
                    className="p-4  rounded-[10px] text-f_16_l_20 md:text-f_22_l_28 font-supremeMedium" onClick={handleClick}
                    style={{ backgroundColor: '#181818' }}
                    >
                    <span style={{ fontSize: '24px', color:'#009bb4' }}>+</span>
                  </button>

                  <Modal
              isOpen={showModal}
              onRequestClose={() => setShowModal(false)}
              className="fixed inset-0 flex items-center justify-center z-50"
              overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
              <div className="bg-black-500 rounded-lg p-6">
                <h1 className="text-xl font-bold mb-4">Replaced parts</h1>
                <p className="bg-gradient-text mb-6">
                  you have to select replace parts
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {
                    spareParts.map((item,index)=>(
                      <>
                        <div
                        className={`card bg-white rounded-lg p-4 ${
                          selectedCards.includes(item?.id) ? 'selected' : ''
                        }`}
                        onClick={() => handleCardClick(item?.id,item)}
                      >
                        <h2 className="text-lg font-semibold">{item?.part_name}</h2>
                        <p>{item?.product}</p>
                      </div>
                      </>
                    ))
                  }
                
                  {/* Add more cards as needed */}
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mr-2"
                    onClick={handleConfirm}
                  >
                    Confirm
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>
            <style>{`
              .card {
                /* Add your regular card styles here */
                border: 2px solid #ffffff; /* Set the default border color */
              }
              
              .card.selected {
                border-color: #009bb4; /* Set the border color for selected cards */
              }
            `}</style>
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
                    className="w-full h-[156px] md:h-[196px] xl:h-[168px] bg-contain bg-no-repeat bg-center flex justify-center items-center bg-black-500 rounded-[10px]"
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
                    className="w-full h-[156px] md:h-[196px] xl:h-[168px] bg-contain bg-no-repeat bg-center flex justify-center items-center bg-black-500 rounded-[10px]"
                    
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
                    className="w-full h-[156px] md:h-[196px] xl:h-[168px] bg-contain bg-no-repeat bg-center flex justify-center items-center bg-black-500 rounded-[10px]"
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
                    className="w-full h-[156px] md:h-[196px] xl:h-[168px] bg-contain bg-no-repeat bg-center flex justify-center items-center bg-black-500 rounded-[10px]"
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

            {/* Maintenance service */}
            <div className="mb-[53px] md:mb-[61px] xl:mb-10">
              {/* Maintenance service TEXT */}
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-5 md:mb-[21px] xl:mb-8">
                <h3 className="text-f_20_l_25 md:text-f_22_l_28 xl:text-f_26_l_33 text-white-100 font-supremeMedium mb-4 xl:mb-0">
                  Maintenance service checklist for motorcycle
                </h3>
                <div className="text-f_16_l_20 md:text-f_18_l_23 text-blue">
                  Please mark when you finish each section
                </div>
              </div>

              <SurveyForm />
            </div>

            {/* Mechanic comment */}
            <div className="mb-7">
              <h3 className="text-f_22_l_28 md:text-f_27_l_34 font-supremeBold mb-[25px] md:mb-5">
                Mechanic comment:
              </h3>

              <textarea 
              value={comment}
              onChange={(e)=>setComment(e.target.value)}
              className="h-[169px] border border-white-100 rounded-[10px] bg-transparent w-full" />
            </div>

            {/* SAVE SERVICE DATA BUTTON */}
            <button
              className="w-[212px] h-[52px] md:h-[62px] bg-gradient rounded-[10px] text-f_16_l_20 md:text-f_22_l_28 font-supremeMedium"
              onClick={handleSubmit}>
              Save Maintenance Data
            </button>
          </div>
        </main>
      </div>
    </SurveyFormContext.Provider>
    </>
    ):(<>
        <div className="flex">
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

            <Header setOpenSidebar={setOpenSidebar} />

            <main className="md:ml-[16.25rem] xl:ml-[21.125rem] pt-[62px] md:pt-[6.5625rem] w-full">
            <h3 className="bg-gradient-text text-f_19_l_24 md:text-f_22_l_28 xl:text-f_27_l_34 text-left font-supremeBold">
              No Maintainence found
              </h3>

              </main>
              </div>
      </>)
  )
}

export default AddNewService
