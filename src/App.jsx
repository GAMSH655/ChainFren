import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsPage from "../src/Pages/SettingsPage";
import Monetization from "../src/Pages/Monetization";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SettingsPage />} />
      <Route path="/monetization" element={<Monetization  />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
