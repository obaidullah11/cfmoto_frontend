import { Navigate } from "react-router-dom";
const LoginProtected = ({ isLoggedIn, Children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Children/>;
};
export default LoginProtected;