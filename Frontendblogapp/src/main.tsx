import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignUp } from "./auth/SignUp.tsx";
import { SignIn } from "./auth/SignIn.tsx";
import { Lockuser } from "./persornalpost/Lockuser.tsx";
import Personnaluser from "./persornalpost/Personnaluser.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
        <Route
          path="/personaluser/:id"
          element={
            <Lockuser>
              <Personnaluser></Personnaluser>
            </Lockuser>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
