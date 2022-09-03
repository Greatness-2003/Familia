import React from "react";
import './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import NameList from "./pages/NameList";
import Profile from "./pages/Profile";



function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path ='NameList' element={<NameList />} />
        <Route path="/Profile" element={<Profile />} />
        </Routes>
    </Router>
  );
} 

export default App;