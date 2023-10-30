import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';

function SideNavbar() {
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    // window.location = "/";
  }
  return (
    <CDBSidebar id="profileSidebar" toggled>
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>} />
      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink
            exact
            to="/dashboard/board"
            className={(navData) =>
              navData.isActive ? "activeClicked" : ""
            }
          // style={({ isActive, isPending }) => {
          //   return {
          //     fontWeight: isActive ? "bold" : "",
          //     color: isPending ? "blue" : "white",
          //   };
          // }}
          >
            <CDBSidebarMenuItem icon="clipboard-list">تابلوخوانی</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/predict"
            className={(navData) => (navData.isActive ? "activeClicked" : "")}
          >
            <CDBSidebarMenuItem icon="chart-line">پیش‌بینی نمودار</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/technical"
            // className={(navData) => (navData.isActive ? "activeClicked" : "")}
            className='disabled-item'
            >
            <CDBSidebarMenuItem icon="ruler">تکنیکال</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/fundamental"
            // className={(navData) => (navData.isActive ? "activeClicked" : "")}
            className='disabled-item'
          >
            <CDBSidebarMenuItem icon="book">بنیادی</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact
            to="/"
            // className={(navData) => (navData.isActive ? "activeClicked" : "")}
            // className='activeClicked'
            onClick={handleLogout}
          >
            <CDBSidebarMenuItem icon="power-off">خروج</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
}

export default SideNavbar;
