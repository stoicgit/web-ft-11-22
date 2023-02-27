import React from "react";
import { Route, Routes } from "react-router-dom";
import auth from "./components/auth";
import joesForm from "./components/joesForm";
import error404 from "./components/error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<auth />} />
      <Route path="/contact" element={<joesForm />} />
      <Route path="*" element={<error404 />} />
    </Routes>
  );
}

export default App;
