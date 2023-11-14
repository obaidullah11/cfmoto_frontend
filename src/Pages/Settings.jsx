import React, { useRef, useState } from "react";
import Sidebar from "../components/Common/Sidebar";
import Header from "../components/Common/Header";
import SelectYear from "../components/Settings/SelectYear";
import SelectSeries from "../components/Settings/SelectSeries";
import SelectModel from "../components/Settings/SelectModel";
import SelectService from "../components/Settings/SelectService";
import placeholder_img from "../images/camera_img.svg";
import info_icon from "../images/info_icon.svg";

function Settings() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);
  const [selectedFile4, setSelectedFile4] = useState(null);

  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const fileInputRef4 = useRef(null);

  const handleImageClick = (ref) => {
    console.log("image pciker ", ref);
    ref.current.click();
  };

  const handleFileSelect1 = (event) => {
    setSelectedFile1(URL.createObjectURL(event.target.files[0]));
    files[0] = event.target.files[0];
    setFiles([...files]);
  };

  const handleFileSelect2 = (event) => {
    setSelectedFile2(URL.createObjectURL(event.target.files[0]));
    files[1] = event.target.files[0];
    setFiles([...files]);
  };

  const handleFileSelect3 = (event) => {
    setSelectedFile3(URL.createObjectURL(event.target.files[0]));
    files[2] = event.target.files[0];
    setFiles([...files]);
  };

  const handleFileSelect4 = (event) => {
    setSelectedFile4(URL.createObjectURL(event.target.files[0]));
    files[3] = event.target.files[0];
    setFiles([...files]);
  };

  const [files, setFiles] = useState([null, null, null, null]);

  return (
    <>
      <div className="flex">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

        <Header setOpenSidebar={setOpenSidebar} />

        <main className="md:ml-[16.25rem] xl:ml-[21.125rem] pt-[62px] md:pt-[6.5625rem] w-full">
          {/* SETTINGS */}
          <div className="px-[26px] md:pl-9 xl:pl-[3.25rem] md:pr-10 pt-[22px] md:pt-[42px] xl:pt-14 pb-11 xl:pb-16">
            <div className="space-y-8">
              {/* SERIES */}
              <div className="flex flex-col md:flex-row items-start md:items-end">
                <SelectSeries />
              </div>

              {/* MODEL */}
              <div className="flex items-end">
                <SelectModel />
              </div>

              {/* YEAR */}
              <div className="flex items-end">
                <SelectYear />
              </div>

              {/* SERVICE */}
              <div className="flex items-end">
                <SelectService />
              </div>

              {/* SERVICE DESCRIPTION */}
              <div className="flex w-full">
                {/* LEFT */}
                <div className="flex flex-col items-start space-y-8 w-full">
                  {/* TITLE */}
                  <h3 className="pl-3 text-f_22_l_28 md:text-f_27_l_34 font-supremeBold bg-gradient-text">
                    Service description
                  </h3>

                  {/* TEXTAREA */}
                  <textarea
                    className="w-full h-[98px] text-f_18_l_28 text-white-100 p-5 bg-black-500 border-[0.5px] border-white-100 rounded-[10px] resize-none placeholder:text-white-100"
                    value="Need to change oil, oil filter, fuel filter. Check the air filter, the mechanic will decide if it needs to be changed. Please follow the service plan exactly!"
                  />
                </div>
              </div>

              {/* SPACE PARTS FOR SERVICE */}
              <div className="flex items-end">
                {/* LEFT */}
                <div className="flex flex-col w-[44%] items-start space-y-8">
                  {/* TITLE */}
                  <h3 className="pl-3 text-f_22_l_28 md:text-f_27_l_34 font-supremeBold bg-gradient-text">
                    Spare parts for service
                  </h3>

                  {/* INPUT */}
                  <input
                    className="w-full h-[45px] text-f_18_l_23 text-white-100 px-5 bg-black-500 border-[0.5px] border-white-100 rounded-[10px] placeholder:text-white-100"
                    placeholder="Enter OEM parts code"
                  />
                </div>

                {/* RIGHT */}
                <div className="pl-14">
                  <ul className="flex flex-col items-start text-f_20_l_25 xl:text-f_27_l_34 leading-[35px]">
                    <li>C90038015200</li>
                    <li>GHJ300-100-2000</li>
                  </ul>
                </div>
              </div>

              {/* VEHICLE PHOTOS */}
              <div className="flex flex-col w-full">
                <div className="flex flex-col items-start space-y-8 w-full">
                  {/* TITLE */}
                  <h3 className="pl-3 text-f_22_l_28 md:text-f_27_l_34 font-supremeBold bg-gradient-text">
                    Vehicle photos
                  </h3>

                  {/* TEXTAREA */}
                  <textarea
                    className="w-full h-[98px] text-f_18_l_28 text-white-100 p-5 bg-black-500 border-[0.5px] border-white-100 rounded-[10px] resize-none placeholder:text-white-100"
                    value="Photo of the speedometer (numbers must be legible), VIN code (numbers must be legible), 45° front view ja 45° rear view"
                  />

                  {/* IMAGE SECTION */}
                  <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 md:gap-y-[27px] md:gap-x-[30px] w-full">
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
                        onClick={(e) => handleImageClick(fileInputRef1)}
                      >
                        {!selectedFile1 && (
                          <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img src={placeholder_img} alt="add-img" />
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
                        }}
                        onClick={(e) => handleImageClick(fileInputRef2)}
                      >
                        {!selectedFile2 && (
                          <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img src={placeholder_img} alt="add-img" />
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
                        onClick={(e) => handleImageClick(fileInputRef3)}
                      >
                        {!selectedFile3 && (
                          <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img src={placeholder_img} alt="add-img" />
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
                        onClick={(e) => handleImageClick(fileInputRef4)}
                      >
                        {!selectedFile4 && (
                          <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img src={placeholder_img} alt="add-img" />
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
              </div>

              {/* MAINENANCE SERVICE CHEKCLIST FOR MOTORCYCLE */}
              <div className="flex">
                <div className="flex flex-col items-start space-y-8 w-full">
                  {/* TITLE */}
                  <h3 className="pl-3 text-f_22_l_28 md:text-f_27_l_34 font-supremeBold bg-gradient-text">
                    Maintenance service checklist for motorcycle
                  </h3>

                  {/* BOX */}
                  <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-y-0 items-center justify-between bg-black-500 rounded-[10px] pt-[21px] md:pt-[19px] xl:pt-3 pl-8 md:pl-[42px] xl:pl-[22px] pb-5 md:pb-[25px] xl:pb-[34px] pr-4 md:pr-[49px] xl:pr-11">
                    <div className="w-full">
                      {/* TITLE */}
                      <div className="relative w-full mb-5 md:mb-3.5 xl:mb-5">
                        <div className="flex items-center justify-start">
                          {/* SERVICE JOB INPUT */}
                          <input
                            className="w-3/4 h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
                            placeholder="Name of the service job"
                            type="text"
                            id="service-job"
                          />

                          {/* INFO ICON */}
                          <div className="flex items-start justify-start relative md:ml-8 xl:ml-[54px]">
                            <img src={info_icon} alt="info-icon" />
                          </div>
                        </div>
                      </div>

                      <div className="flex w-full flex-col md:flex-row items-stretch md:items-center justify-between pr-4 md:pr-0 gap-y-4 md:gap-y-0">
                        {/* LEFT */}
                        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-y-4 md:gap-y-3.5 xl:gap-y-0 xl:gap-x-6 w-full md:w-4/5 xl:w-11/12">
                          {/* LEFT */}
                          <div className="flex flex-wrap xl:flex-nowrap flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-y-3.5 md:gap-x-6">
                            {/* YES AND NO */}
                            <div className="flex gap-x-6">
                              {/* YES CHECKBOX */}
                              <div className="flex items-center justify-center w-[83px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700">
                                <input
                                  id="yes"
                                  type="checkbox"
                                  value=""
                                  className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
                                />
                                <label
                                  htmlFor="yes"
                                  className="ml-[9px]  text-f_14_l_22 xl:text-f_18_l_28 text-white-400"
                                >
                                  Yes
                                </label>
                              </div>

                              {/* NO CHECKBOX */}
                              <div className="flex items-center justify-center w-[83px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700">
                                <input
                                  id="no"
                                  type="checkbox"
                                  value=""
                                  className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
                                />
                                <label
                                  htmlFor="no"
                                  className="ml-[9px]  text-f_14_l_22 xl:text-f_18_l_28 text-white-400"
                                >
                                  No
                                </label>
                              </div>
                            </div>

                            {/* FILL AND VALUE */}
                            <div className="flex gap-x-7">
                              {/* FILL INPUT */}
                              <input
                                className="w-[83px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
                                placeholder="Fill"
                                type="text"
                                id="input1"
                              />

                              {/* VALUE INPUT */}
                              <input
                                className="w-[83px] xl:w-[95px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
                                placeholder="Value"
                                type="text"
                                id="input2"
                              />
                            </div>
                          </div>

                          {/* RIGHT COMMENT */}
                          <div className="w-full">
                            {/* COMMENT INPUT */}
                            <input
                              className="w-full h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
                              placeholder="Comment"
                              type="text"
                              id="input3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT EXECUTED CHECKBOX */}
                    <div className="flex flex-row-reverse md:flex-col items-center gap-x-2 md:gap-x-0 md:gap-y-10 ml-auto md:ml-0 rounded-sm bg-black-500 border-[0.5px] border-black-700 p-2.5">
                      <label
                        htmlFor="executed"
                        className=" text-f_14_l_22 xl:text-f_18_l_28 text-white-100"
                      >
                        Executed
                      </label>
                      <input
                        id="executed"
                        type="checkbox"
                        value=""
                        className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
                      />
                    </div>
                  </div>

                  {/* BOX */}
                  <div className="w-full bg-black-600 rounded-[10px] pt-[21px] md:pt-[19px] xl:pt-3 pl-8 md:pl-[42px] xl:pl-[22px] pb-5 md:pb-[25px] xl:pb-[34px] pr-4 md:pr-[49px] xl:pr-11">
                    {/* TITLE */}
                    <div className="relative w-fit mb-5 md:mb-1 xl:mb-5">
                      <div className="flex items-start justify-start">
                        <h4 className="text-f_18_l_23 text-white-100">
                          Clean or replace the air filter
                        </h4>

                        {/* INFO ICON */}
                        <div className="flex items-start justify-start relative ml-[9px]">
                          <img src={info_icon} alt="info-icon" />
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
                                id="yes"
                                type="checkbox"
                                value=""
                                className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
                              />
                              <label
                                htmlFor="yes"
                                className="ml-[9px]  text-f_14_l_22 xl:text-f_18_l_28 text-success"
                              >
                                Yes
                              </label>
                            </div>

                            {/* NO CHECKBOX */}
                            <div className="flex items-center">
                              <input
                                id="no"
                                type="checkbox"
                                value=""
                                className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
                              />
                              <label
                                htmlFor="no"
                                className="ml-[9px]  text-f_14_l_22 xl:text-f_18_l_28 text-error"
                              >
                                No
                              </label>
                            </div>
                          </div>

                          {/* FILL AND VALUE */}

                          <div className="flex gap-x-7">
                            {/* FILL INPUT */}
                            <input
                              className="w-[83px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
                              placeholder="Fill"
                              type="text"
                              id="input1"
                            />

                            {/* VALUE INPUT */}
                            <input
                              className="w-[83px] xl:w-[95px] h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
                              placeholder="Value"
                              type="text"
                              id="input2"
                            />
                          </div>
                        </div>

                        {/* RIGHT COMMENT */}

                        <div className="w-full">
                          {/* COMMENT INPUT */}
                          <input
                            className="w-full h-[33px] xl:h-[39px] rounded-sm bg-black-500 border-[0.5px] border-black-700 py-1.5 px-[9px]  text-f_14_l_22 xl:text-f_18_l_28 placeholder:text-white-400"
                            placeholder="Comment"
                            type="text"
                            id="input3"
                          />
                        </div>
                      </div>

                      {/* RIGHT EXECUTED CHECKBOX */}
                      <div className="flex flex-row-reverse md:flex-col items-center gap-x-2 md:gap-x-0 md:gap-y-3 ml-auto md:ml-0">
                        <label
                          htmlFor="executed"
                          className=" text-f_14_l_22 xl:text-f_18_l_28 text-white-100"
                        >
                          Executed
                        </label>
                        <input
                          id="executed"
                          type="checkbox"
                          value=""
                          className="w-[19px] h-[19px] text-transparent bg-transparent border-[0.5px] border-black-700 rounded-sm checked:border-black-700 focus:ring-transparent focus:ring-offset-0 focus:ring-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mechanic comment */}
              <div className="flex flex-col">
                {/* TITLE */}
                <h3 className="text-f_22_l_28 md:text-f_27_l_34 font-supremeBold mb-[25px] md:mb-5">
                  Mechanic comment:
                </h3>
                {/* TEXTAREA */}
                <textarea className="h-[169px] border border-white-100 rounded-[10px] bg-transparent w-full" />
              </div>

              {/* SAVE SERVICE DATA BUTTON */}
              <button className="w-[212px] h-[52px] md:h-[62px] bg-gradient rounded-[10px] text-f_16_l_20 md:text-f_22_l_28 font-supremeMedium">
                Save Service Data
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Settings;
