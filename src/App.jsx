import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsPage from "../src/Pages/SettingsPage";
import Monetization from "../src/Pages/Monetization";
import AddProd from "../src/Pages/AddProd";
import Header from "./Components/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SettingsPage />} />
      <Route path="/monetization" element={<Monetization  />} />
      <Route path="/AddProd" element={< AddProd />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
