import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LOCAL_STORAGE } from "../constants";

function AuthGuard({ children }) {
  const authDetails = { authenticated: true };
  const location = useLocation();

  if (authDetails.authenticated === false) {
    localStorage.setItem(LOCAL_STORAGE.POST_LOGIN_REDIRECTION, location.pathname);
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default AuthGuard;
