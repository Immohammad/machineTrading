import React from "react";
import { Routes, Route } from "react-router-dom";
import Board from "./board";
import Technical from "./technical";
import Fundamental from "./fundamental";
import SideNavbar from "./sideNavbar";
import Predict from "./predict";
import InitialDashboard from "./initialDashboard";
import Didehban from "./didehban";

function Dashboard() {
  return (
    <div className="dashApp">
      <SideNavbar />
      <div className="container justify-content-center content">
        <Routes>
          <Route path="" exact element={<InitialDashboard />} />
          <Route path="predict" element={<Predict />} />
          <Route path="board" element={<Board />} />
          <Route path="fundamental" element={<Fundamental />} />
          <Route path="didehban/*" element={<Didehban />} />
          <Route path="technical" element={<Technical />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
