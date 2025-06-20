import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

function Logout() {
  const { Logout } = useAuth();
  useEffect(() => {
    Logout();
  }, [Logout]);
  return <Navigate to={"/login"} />;
}

export default Logout;
