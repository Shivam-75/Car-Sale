import React from "react";
import Nav from "./header/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import "./css/home.css";
import Service from "./page/Service";
import Login from "./page/Login";
import Register from "./page/Register";
import Logout from "./page/Logout";
import Sales from "./page/Sales";
import Fotter from "./page/foter";
import Error from "./error/Error";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
