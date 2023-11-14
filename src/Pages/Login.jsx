import React,{useState} from "react";
import logo from "../images/logo_big.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { userActions } from "../state/actions";
import { useNavigate } from "react-router-dom";
function Login({ signInRequest, user }) {
  // BUTTONS DATA
  const navigate = useNavigate();
  const buttons = [
    {
      id: "idCard",
      name: "ID - card",
    },
    {
      id: "mobilID",
      name: "Mobil - ID",
    },
    {
      id: "smartID",
      name: "Smart - ID",
    },
    {
      id: "bankLogIn",
      name: "Bank log in",
    },
  ];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

      const user = { email, password };
      console.log("Request has been sent.");
      await signInRequest({ user: user, navigate: navigate });
      console.log("Request has been sent.");
  };


  return (
    <>
      <div className="flex flex-col w-full justify-center items-center px-[26px] md:px-[6.25rem] py-[5.625rem] md:py-[6.625rem]">
        <div className="max-w-[77.5rem] mx-auto w-full bg-black-200 flex flex-col items-center justify-center py-[4.8125rem] md:pt-[10.8125rem] md:pb-[11.875rem] rounded-2xl md:rounded-[25px]">
          {/* LOGO */}
          <div className="w-[226px] md:w-[400px] xl:w-auto mb-14 md:mb-[68px]">
            <img src={logo} alt="logo" />
          </div>

          {/* FORM */}
          <form className="w-full max-w-[22.1875rem] flex flex-col px-[26px] md:px-0 space-y-[30px]">
            {/* EMAIL INPUT */}
            <input
              value={email}
              onChange={
                (e)=>
                setEmail(e.target.value)
              
              }
              className="w-full h-[53px] rounded-[10px] border border-white bg-transparent text-center text-white text-f_16_l_20 md:text-f_20_l_25 font-supremeMedium px-3 placeholder:text-white"
              placeholder="username"
              type="email"
            />

            {/* PASSWORD INPUT */}
            <input
             value={password}
             onChange={
               (e)=>
                setPassword(e.target.value)
             
             }
              className="w-full h-[53px] rounded-[10px] border border-white bg-transparent text-center text-white text-f_16_l_20 md:text-f_20_l_25 font-supremeMedium px-3 placeholder:text-white"
              placeholder="password"
              type="password"
            />

            {/* BUTTONS */}
            {/* <div className="grid grid-cols-2 gap-[30px]">
              {buttons.map((link) => (
                <button
                  key={link.id}
                  className="w-full h-[53px] border border-white rounded-[10px] text-f_16_l_20 md:text-f_20_l_25 font-supremeMedium"
                >
                  {link.name}
                </button>
              ))}
            </div> */}

            {/* LOG IN BUTTON */}
            
              <button
              onClick={handleSubmit}
              className="bg-gradient w-full h-[53px] text-f_19_l_24 md:text-f_22_l_28 font-supremeMedium rounded-[10px]">
                log in
              </button>
            
          </form>
        </div>
      </div>
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInRequest: (user) => dispatch(userActions.signInRequest(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "Login" })(Login));