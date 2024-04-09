import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "./variables";

export const Protect = ({ children, path }) => {
    const token = localStorage.getItem("token");
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));

  useEffect(() => {
    axios
      .get(`${BASE_URL}/valid`, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        setIsAuth(true);
      })
      .catch(() => {
        setIsAuth(false);
      });
  }, []);

  return isAuth ? children : <Navigate to="/login" />;
};
