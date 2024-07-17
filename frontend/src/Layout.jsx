import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Card from "./Components/Card";

function Layout() {
  return (
    <>
      <Header />
      <div className="bg-customBlue h-[70vh]">
        <Outlet />
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="cards w-1/2 grid grid-cols-3 gap-4">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>

    </>
  )
}

export default Layout
