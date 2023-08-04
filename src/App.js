import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from './components/navbars';
import Signup from './components/signLogin';
import Login from './components/login';
import First from './components/firstPage';
import AboutUs from './components/aboutUs';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbars />
          <Routes>
            {/*<Route path="/profile/:id/*" element={<Profile />} />
            <Route path="/login" element={<Login setter={setUser} />} />
             <Route path="/signup" element={<Signup/>} />  */}
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/login" element={<Login/>} /> 
            <Route path="/aboutUs" element={<AboutUs/>} /> 
            <Route path="/" exact element={<First />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
