import { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectUser } from "../../store/slices/authSlice";

function RequireAuth({ children }) {
  // const state = useSelector((state) => state);
  // console.log("State", state);
  const currentUser = useSelector(selectUser);
  let location = useLocation();

  if (!currentUser) {
    return (
      <Navigate to="/musicart/signin" state={{ from: location }} replace />
    );
  } else {
    console.log("user is present");
  }
  return <Navigate to="/musicart/home" state={{ from: location }} replace />;
}

export default RequireAuth;
