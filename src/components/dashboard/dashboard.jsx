import React from "react";
import { Routes, Route } from "react-router-dom";
import Board from "./board";
import Technical from "./technical";
import Fundamental from "./fundamental";
import SideNavbar from "./sideNavbar";
import Predict from "./predict";

function Dashboard() {
  return (
    <div className="dashApp">
      <SideNavbar />
      <div className="container justify-content-center content">
        <Routes>
          <Route path="board" element={<Board />} />
          <Route path="predict" element={<Predict />} />
          <Route path="technical" element={<Technical />} />
          <Route path="fundamental" element={<Fundamental />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
