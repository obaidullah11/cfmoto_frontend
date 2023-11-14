import React, { useState } from "react";
import Select from "react-tailwindcss-select";

function SelectService() {
  const options = [
    { value: "1000 km", label: "1000 km" },
    { value: "2000 km", label: "2000 km" },
    { value: "3000 km", label: "3000 km" },
    { value: "4000 km", label: "4000 km" },
  ];

  const [service, setService] = useState(null);

  const handleChange = (value) => {
    console.log("value:", value);
    setService(value); // set to an empty array if value is null or undefined
  };

  return (
    <>
      {/* LEFT */}
      <div className="flex flex-col items-start space-y-8">
        {/* TITLE */}
        <h3 className="pl-3 text-f_22_l_28 md:text-f_27_l_34 font-supremeBold bg-gradient-text">
          Service
        </h3>
        {/* SELECT */}

        <div className="min-w-[235px] h-[45px] bg-black-500 select">
          <Select
            value={service}
            onChange={handleChange}
            options={options}
            placeholder=""
            classNames={{
              menuButton: ({ isDisabled }) =>
                `flex w-full min-h-[45px] text-f_18_l_23 text-white border-[0.5px] border-white-100 rounded-[10px] transition-all duration-300 focus:ring-0 focus:outline-none ${
                  isDisabled
                    ? "bg-gray-200"
                    : "bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                }`,
              menu: "absolute z-10 w-full bg-black-500 shadow-lg border rounded-[10px] py-1 mt-1.5 text-f_18_l_23",
              listItem: ({ isSelected }) =>
                `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                  isSelected
                    ? `text-white-100 bg-blue-500`
                    : `text-white-100 hover:bg-blue-100 hover:text-blue-500`
                }`,
              tagItem: () =>
                "bg-black-600 text-white-100 text-[12px] border rounded-sm flex space-x-1 pl-1",
              tagItemText: () => "text-transparent",
            }}
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className="pl-12 xl:pl-24">
        <h2 className="text-f_27_l_34 text-white">1000 km</h2>
      </div>
    </>
  );
}

export default SelectService;
