import React from "react";
import Navbar from "../components/Navbar";
import SideNav from "@/components/SideNav";
import Profile from "../components/Profile";

function ProfilePage() {
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
        <Profile />
      </div>
    </>
  );
}

export default ProfilePage;