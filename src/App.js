import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from './components/navbars';
import Login from './components/signLogin';
import First from './components/firstPage';
import AboutUs from './components/aboutUs';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbars />
          <Routes>
            {/* <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/profile/:id/*" element={<Profile />} />
            <Route path="/login" element={<Login setter={setUser} />} />*/}
            <Route path="/login" element={<Login/>} /> 
            <Route path="/signup" element={<Login/>} /> 
            <Route path="/aboutUs" element={<AboutUs/>} /> 
            <Route path="/" exact element={<First />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
