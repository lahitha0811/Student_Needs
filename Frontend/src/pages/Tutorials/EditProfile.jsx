import React from "react";
import EditProfile from "../components/EditProfile";
import Navbar from "../components/Navbar";
import SideNav from "@/components/SideNav";

function EditProfilePage() {
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
        <EditProfile />
      </div>
    </>
  );
}

export default EditProfilePage;