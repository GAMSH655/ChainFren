import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsPage from "./SettingsPage"; // Adjust the import path if needed

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
