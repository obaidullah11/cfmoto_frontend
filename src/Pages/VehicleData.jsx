import React, { useState } from "react";
import Sidebar from "../components/Common/Sidebar";
import Header from "../components/Common/Header";
import bike_img from "../images/bike_img.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function VehicleData() {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(false);
  React.useEffect(() => {
    // console.log("data=--_>> ",localStorage.getItem("vinnData"))
    if(!localStorage.getItem("vinnData")){
      navigate("/vinn")
    }
    else{
      getApiData();
    }
  
  }, [])
  const data = localStorage.getItem("vinnData");
  const parsed_data = JSON.parse(data);


 
  function formatTimestamp(timestamp) {
    const dateObj = new Date(timestamp);
    const dateStr = dateObj.toLocaleDateString("en-US");
    const parts = dateStr.split('/');
    const formattedDate = `${parts[1]}/${parts[0]}/${parts[2]}`;
    const timeStr = dateObj.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: false });

    return `${formattedDate} ${timeStr}`;
  }


  const db_data = parsed_data?.data;
  const [db_data_history, setDb_Data] = useState(null);
  const dateStr = db_data?.date_of_manufacture;
  const dateObj = new Date(dateStr);
  const year = dateObj.getFullYear();
  const getApiData = async () => {
    console.log("db_data+++++>> ",db_data)
    const res = await axios.get(
      `https://api.cfmoto.world/products/${db_data?.sku}/history/`
      // `http://localhost:8000/products/15/history/`
    );
    console.log("Response=====> ",res?.data)
    if (res?.data?.length) {
      const reversedData = res?.data;
      setDb_Data(reversedData);
    }
      
  };
  React.useEffect(() => {
    getApiData();
  }, []);
  // HISTORY LIST DATA
  // const items = [
  //   {
  //     length: 1,
  //     timestamp: "2022-01-05 16:00",
  //     description: "A vehicle ordered from the factory",
  //   },
  //   {
  //     length: 2,
  //     timestamp: "2022-03-02 8:30",
  //     description:
  //       "Vehicle registered in the system and sent out from the factory",
  //   },
  //   {
  //     length: 3,
  //     timestamp: "2022-04-11 11:18",
  //     description: "Transport from China - to Estonia",
  //   },
  //   {
  //     length: 4,
  //     timestamp: "2022-04-15 13:45",
  //     description: "Arrived in Motohobi warehouse",
  //   },
  //   {
  //     length: 5,
  //     timestamp: "2022-04-15 16:45",
  //     description: "Motorcycle assembly Ants Käbi, Motohobi",
  //   },
  //   {
  //     length: 6,
  //     timestamp: "2022-04-17 17:00",
  //     description:
  //       "Sales Contract, Motorcycle Awarded to the User Matti Kasela",
  //   },
  //   {
  //     length: 7,
  //     timestamp: "2022-08-20 12:15",
  //     description:
  //       "1000km maintenance reservation, spare parts ordered. Maintenance time 2022-08-27",
  //   },
  // ];
  const handleDownload = () => {
    const fileId = '1mLuFXX6s-_brFA8tCZCCovhO0-vfEKxD'; // Replace with your Google Drive file ID
    const url = `https://drive.google.com/file/d/16ShLrViH0V2ggHjso_ym_yWY6lJWTssu/view`;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.pdf'); // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadone = () => {
    const fileId = '1AZSDXHKkJWcB4W34CIUI5gUne_gfQ1Fu'; // Replace with your Google Drive file ID
    const url = `https://drive.google.com/file/d/1nLsQHMeheszp8UTU2I35BFT9vGhnOWC_/view`;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'my-custom-name.pdf'); // Set your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // // Reverse the order of the items array
  // items.reverse();
  const image_url = `https://api.cfmoto.world/${db_data?.image}`
  return (
    <>
      <div className="flex">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

        <Header setOpenSidebar={setOpenSidebar} />

        <main className="md:ml-[16.25rem] xl:ml-[21.125rem] pt-[62px] md:pt-[6.5625rem] w-full">
          {/* VEHICLE DATA */}
          <div className="px-[26px] md:pl-9 xl:pl-[3.25rem] md:pr-10 pt-[22px] md:pt-[42px] xl:pt-14 pb-11 xl:pb-16">
            <div className="flex flex-col md:flex-row">
              {/* LEFT */}
              <div className="w-full md:w-1/2 md:pt-3 xl:pt-12">
                {/* IMAGE */}
                <div className="mb-10 md:mb-20">
                  <img src={image_url} alt="bike-img" />
                </div>

                {/* BUTTONS DESKTOP */}
                <div className="hidden md:block">
                  <div className="flex flex-col gap-3.5 xl:gap-5 items-center">
                    <div className="w-full grid grid-cols-2 gap-3.5 xl:gap-5">
                      {/* MAINTENANCE */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase"  onClick={() => navigate('/service/addNewService')} >
                        MAINTENANCE
                      </button>

                      {/* REPAIRING */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase"  onClick={() => navigate('/service/maintainence')}>
                        REPAIRING
                      </button>

                      {/* OEM PARTS */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase" onClick={() => window.open('https://cfmoto.motohobi.ee/product/2022-motorcycle-cf800-5eu5', '_blank')}>
                        PARTS
                      </button>

                      {/* OEM ACCESSORIES */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase"onClick={() => window.open('https://cfmoto.motohobi.ee/product/2022-accessory-cf800-5eu5', '_blank')}>
                        ACCESSORIES
                      </button>

                      {/* SERVICE MANUAL */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase"onClick={() => window.open('https://drive.google.com/file/d/16ShLrViH0V2ggHjso_ym_yWY6lJWTssu/view', '_blank')}>
                        SERVICE MANUAL
                      </button>

                      {/* USER MANUAL */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase"onClick={() => window.open('https://drive.google.com/file/d/1nLsQHMeheszp8UTU2I35BFT9vGhnOWC_/view', '_blank')}>
                        USER MANUAL
                      </button>
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercasee"onClick={() => navigate('/service/Waranty')}>
                      WARRANTY
                      </button>

                      {/* USER MANUAL */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase">
                      Bulletin
                      </button>
                    </div>
                    {/* WARRANTY
                    <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase"onClick={() => navigate('/service/Waranty')}>
                      WARRANTY
                    </button> */}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full flex flex-col md:w-1/2">
                {/* LIST */}
                <div className="md:pl-5 xl:pl-[30px]">
                  {/* BIKE NAME */}
                  <div className="mb-5 md:mb-[30px] xl:mb-14">
                    <h3 className="bg-gradient-text text-f_19_l_24 md:text-f_20_l_25 xl:text-f_27_l_34 text-center font-supremeBold">
                    {db_data?.model_name}, {year}, {db_data?.color}
                    </h3>
                  </div>

                  {/* LIST */}
                  <div className="space-y-3.5 xl:space-y-5">
                    {/* SKU */}
                    {
  db_data?.sku?.toString().length > 0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">SKU</span>
                      <span> {db_data?.sku}</span>
                    </div>
                    )}

                    {/* VIN CODE / PRODUCT ID */}
                    {
                    db_data?.vin_code?.toString().length>0 && (
                                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                                      <span className="text-lightWhite uppercase">
                                        VIN CODE / PRODUCT ID
                                      </span>
                                      <span>{db_data?.vin_code}</span>
                                    </div>
                    )}

                    {/* COUNTRY */}
                    {
    db_data?.country?.toString().length>0&& (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">COUNTRY</span>
                      <span>{db_data?.country}</span>
                    </div>)}

                    {/* SERIES */}
                    {
                    db_data?.series?.toString().length>0&& (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">SERIES</span>
                      <span>{db_data?.series}</span>
                    </div>)}

                    {/* MODEL NAME */}
                    {
    db_data?.model_name?.toString().length>0&& (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        MODEL NAME
                      </span>
                      <span>{db_data?.model_name}</span>
                    </div>)}

                    {/* FACTORY NAME */}
                    {
                    db_data?.factory_name?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        FACTORY NAME
                      </span>
                      <span>{db_data?.factory_name}</span>
                    </div>
                    )}

                    {/* COLOR */}
                    {
    db_data?.color?.toString().length>0&& (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">COLOR</span>
                      <span>{db_data?.color}</span>
                    </div>)}

                    {/* EU TYPE APPROVAL */}
                    {
    db_data?.eu_type_approval?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        EU TYPE APPROVAL
                      </span>
                      <span>{db_data?.eu_type_approval}</span>
                    </div>)}

                    {/* BODY TYPE */}
                    { db_data?.body_type?.toString().length>0 &&  (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        BODY TYPE
                      </span>
                      <span>{db_data?.body_type}</span>
                    </div>)}

                    {/* STEERING POWER */}
                    { db_data?.steering_power?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        STEERING POWER
                      </span>
                      <span>{db_data?.steering_power}</span>
                    </div>)}

                    {/* WHEELS */}
                    { db_data?.wheels?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">WHEELS</span>
                      <span>{db_data?.wheels}</span>
                    </div>)}

                    {/* SCREEN */}
                    { db_data?.screen?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">SCREEN</span>
                      <span>{db_data?.screen}</span>
                    </div>)}

                    {/* LIGHTS */}
                    { db_data?.lights?.toString().length>0&& (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">LIGHTS</span>
                      <span>{db_data?.lights}</span>
                    </div>)}

                    {/* CARGO COMPARTMENTS */}
                    { db_data?.cargo_compartments?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        CARGO COMPARTMENTS
                      </span>
                      <span>{db_data?.cargo_compartments}</span>
                    </div>)}

                    {/* COMMUNICATION TERMINAL */}
                    { db_data?.communication_terminal?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        COMMUNICATION TERMINAL
                      </span>
                      <span>{db_data?.communication_terminal}</span>
                    </div>)}

                    {/* DATA OF MANUFACTURE */}
                    { db_data?.date_of_manufacture?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        DATA OF MANUFACTURE
                      </span>
                      <span>{db_data?.date_of_manufacture}</span>
                    </div>)}

                    {/* ORDERER */}
                    { db_data?.orderer?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">ORDERER</span>
                      <span>{db_data?.orderer}</span>
                    </div>)}

                    {/* ORDERER PHONE */}
                    { db_data?.orderer_phone?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        ORDERER PHONE
                      </span>
                      <span>{db_data?.orderer_phone}</span>
                    </div>
                    )}

                    {/* ORDERER EMAIL */}
                    { db_data?.orderer_email?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        ORDERER EMAIL
                      </span>
                      <span>{db_data?.orderer_email}</span>
                    </div>)}

                    {/* IMPORTER */}
                    { db_data?.importer?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        IMPORTER
                      </span>
                      <span>{db_data?.importer}</span>
                    </div>)}

                    {/* DEALER */}
                    { db_data?.dealer?.toString().length>0 && (
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">DEALER</span>
                      <span>{db_data?.dealer}</span>
                    </div>
                    )}
                  </div>
                </div>

                {/* BUTTONS MOBILE */}
                <div className="md:hidden mt-6">
                  <div className="flex flex-col gap-3.5 items-center">
                    <div className="w-full grid grid-cols-2 gap-3.5">
                      {/* MAINTENANCE */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase"onClick={() => navigate('/service/maintainence')}>
                        MAINTENANCE
                      </button>

                      {/* REPAIRING */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase"  onClick={() => navigate('/Service/Addnewservice')}>
                        REPAIRING
                      </button>

                      {/* OEM PARTS */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase" onClick={() => window.open('https://cfmoto.motohobi.ee/product/2022-motorcycle-cf800-5eu5', '_blank')}>
                        OEM PARTS
                      </button>

                      {/* OEM ACCESSORIES */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase"  onClick={() => window.open('https://cfmoto.motohobi.ee/product/2022-accessory-cf800-5eu5', '_blank')}>
                        OEM ACCESSORIES
                      </button>

                      {/* SERVICE MANUAL */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase"onClick={() => window.open('https://drive.google.com/file/d/16ShLrViH0V2ggHjso_ym_yWY6lJWTssu/view', '_blank')}>
                        SERVICE MANUAL
                      </button>

                      {/* USER MANUAL */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase"onClick={() => window.open('https://drive.google.com/file/d/1nLsQHMeheszp8UTU2I35BFT9vGhnOWC_/view', '_blank')}>
                        USER MANUAL
                      </button>






                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase"onClick={() => navigate('/service/Waranty')}>
                      WARRANTY
                      </button>

                      {/* USER MANUAL */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase">
                      Bulletin
                      </button>
























                     
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            {/* HISTORY SECTION */}
            {
              db_data_history && (
                <>
                  <div className="mt-[26px] md:mt-5 xl:mt-14">
              {/* HISTORY TITLE */}
              <div className="mb-5 xl:mb-[30px]">
                <h1 className="text-f_20_l_25 xl:text-f_33_l_42 font-supremeBold">
                  History
                </h1>
              </div>

              {/* HISTORY LIST */}
              <ul>
                {
                  db_data_history?.map((item, index) =>(
                  // db_data_history?.reverse()?.map((item, index) => (
                  <li
                    className={
                      index % 2 === 0
                        ? "flex item-center pl-5 pr-1.5 py-3.5 md:px-[30px] md:py-5 xl:py-[30px] bg-black-400 cursor-pointer"
                        : "flex item-center pl-5 pr-1.5 py-3.5 md:px-[30px] md:py-5 xl:py-[30px] bg-black-500 cursor-pointer"
                    }
                    key={index}
                  >
                    {/* LENGTH */}
                    <div className="flex items-center md:items-baseline justify-start min-w-[32px] md:min-w-[46px] xl:min-w-[52px] text-f_15_l_19 md:text-f_14_l_18 xl:text-f_18_l_23">
                    {db_data_history.length - index}
                    </div>
                    <div className="flex flex-col md:flex-row text-f_11_l_14 md:text-f_14_l_18 xl:text-f_18_l_23">
                      {/* TIMESTAMP */}
                      <div className="mb-3 md:mb-0 min-w-[180px] xl:min-w-[217px]">
                      {formatTimestamp(item.timestamp)}
                      </div>
                      {/* DESCRIPTION */}
                      <div className="ml-5 md:mb-0 min-w-[180px] xl:min-w-[217px]">{item.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
                </>
              )
            }
          
          </div>
        </main>
      </div>
    </>
  );
}

export default VehicleData;
