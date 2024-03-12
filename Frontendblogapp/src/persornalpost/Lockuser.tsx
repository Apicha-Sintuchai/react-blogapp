import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Lockuser = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const _id = localStorage.getItem("_id");

  useEffect(() => {
    if (token && username && password && _id) {
      navigate("/personaluser/" + _id);
    }
    else {
        navigate("/SignIn");
      }
  }, [navigate]);

  return token !== null&& username !== null&& password !== null&& _id  !== null? children : <h1>login first</h1>;
};
