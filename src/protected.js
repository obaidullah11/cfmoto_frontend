import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, Children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <Children/>;
};
export default Protected;