import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageOnePage from "./pages/HomePageOne/index";
import ClassbookOnePage from "./pages/ClassbookOne/index";
import SprintGameOnePage from "./pages/SprintGameOne/index";
import SprintGameFourPage from "./pages/SprintGameFour/index";
import LoginPage from "./pages/Login/login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageOnePage />} />
        <Route path="/ClassbookOne" element={<ClassbookOnePage />} />
        <Route path="/SprintGameOne" element={<SprintGameOnePage />} />
        <Route path="/SprintGameFour" element={<SprintGameFourPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
