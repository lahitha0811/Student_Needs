import React from "react";
import AccountSetting from "../components/AccountSetting";
import Navbar from "../components/Navbar";
import SideNav from "@/components/SideNav";

function AccountSettingPage() {
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
        <AccountSetting />
      </div>
    </>
  );
}

export default AccountSettingPage;