import React, { useState } from "react";
import logo from "../images/logo_big.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { vinnActions } from "../state/actions";
import { useNavigate } from "react-router-dom";

function VINcode({ vinnnoInRequest }) {
  const navigate = useNavigate();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showVehicleMessage, setShowVehicleMessage] = useState(false);
  const [numb, setNumb] = useState("");
  const handleSubmit = async (e) => {
    console.log("record===> ",numb)
    e.preventDefault();
    if (!numb) return;
    const number = { numb };
    await vinnnoInRequest({ number: number, navigate: navigate });
  }
  return (
    <>
      <div className="h-screen md:h-auto flex flex-col w-full justify-center items-center px-[26px] md:px-[6.25rem] py-[5.625rem] md:py-[6.625rem]">
        <div className="max-w-[77.5rem] mx-auto w-full bg-black-200 flex flex-col items-center justify-center py-[4.8125rem] md:pt-[10.8125rem] md:pb-[11.875rem] rounded-2xl md:rounded-[25px]">
          {/* LOGO */}
          <div className="w-[226px] md:w-[400px] xl:w-auto mb-14 md:mb-[68px]">
            <img src={logo} alt="logo" />
          </div>

          {/* FORM */}
          <form className="w-full max-w-[22.1875rem] flex flex-col px-[26px] md:px-0 space-y-[30px]">
            {/* Enter VIN number TEXT */}
            <h3 className="text-center text-f_19_l_24 md:text-f_22_l_28 font-supremeMedium">
              Enter VIN number
            </h3>

            {/* VIN NUMBER INPUT */}
            <input
             value={numb}
             onChange={
               (e)=>
               setNumb(e.target.value)
             
             }
              className="w-full h-[53px] rounded-[10px] border border-white bg-transparent text-center text-white text-f_16_l_20 md:text-f_20_l_25 font-supremeMedium px-3 placeholder:text-white"
              placeholder="VIN number"
              type="text"
            />

            {/* SUBMIT BUTTON */}
          
              <button 
              onClick={handleSubmit}
                className="bg-gradient w-full h-[53px] text-f_19_l_24 md:text-f_22_l_28 font-supremeMedium rounded-[10px] uppercase">
                Submit
              </button>
     
          </form>

          {/* MESSAGES */}
          <div className="flex flex-col justify-center items-center mt-[30px]">
            {/* ERROR MESSAGE TEXT */}
            <div
              className="flex-col justify-center items-center space-y-[30px]"
              style={{ display: showErrorMessage ? "flex" : "none" }}
            >
              <span className="text-center text-f_19_l_24 md:text-f_22_l_28 font-supremeMedium text-red">
                The system did not detect the VIN code!
              </span>
              <span className="text-center text-f_19_l_24 md:text-f_22_l_28 font-supremeMedium">
                Please check the VIN code you entered!
              </span>
            </div>

            {/* ENTER VEHICLE DETAILS TEXT*/}
            <div
              className="flex-col justify-center items-center space-y-[30px]"
              style={{ display: showVehicleMessage ? "flex" : "none" }}
            >
              <span className="text-center text-f_19_l_24 md:text-f_22_l_28 font-supremeMedium">
                Enter the vehicle details.
              </span>
              <span className="text-center text-f_19_l_24 md:text-f_22_l_28 font-supremeMedium">
                The vehicle data is checked by the system administrator.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    vinnnoInRequest: (number) => dispatch(vinnActions.vinnInRequest(number)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "VINcode" })(VINcode));