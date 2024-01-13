import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./components/navbars";
import Login from "./components/login";
import First from "./components/first/firstPage";
import AboutUs from "./components/aboutUs";
import Dashboard from "./components/dashboard/dashboard";
import NotFound from "./components/notFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Protect } from "./components/protect";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbars />
        <Routes>
          {/*<Route path="/login" element={<Login setter={setUser} />} />*/}
          <Route
            path="/dashboard/*"
            element={
              <Protect>
                <Dashboard />
              </Protect>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/" exact element={<First />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer position="top-left" autoClose={3000} />
      </Router>
    </div>
  );
}

export default App;
