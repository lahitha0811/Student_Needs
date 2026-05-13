import React from "react";
import Navbar from "../components/Navbar";
import SideNav from "@/components/SideNav";
import ClassHistory from "../components/ClassHistory";

function ClassHistoryPage() {
  return (
    <>
      <Navbar />

      <div
        className="flex"
        style={{
          paddingTop: "100px",
          minHeight: "100vh",
        }}
      >
        <SideNav />
        <ClassHistory />
      </div>
    </>
  );
}

export default ClassHistoryPage;