import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import authSlice from "../store/slices/auth";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authSlice.actions.setLogout()); // eslint-disable-next-line
  }, []);

  return <Navigate to="/user/login" />;
};

export default Logout;
