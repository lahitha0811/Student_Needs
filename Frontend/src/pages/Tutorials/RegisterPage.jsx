import React from "react";
import Register from "../components/Register";
import Navbar from "../components/Navbar";
import blackboard from "../assets/images/blackboard.png";
import "../assets/styles/Register.css";

/**
 * Register Page component
 * Renders the sign-up UI with a side banner and the registration form
 */
function RegisterPage() {
  return (
    <div className="registerPage">
      <Navbar />

      <main className="main-container" role="main">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col left" role="banner">
            <div className="leftContent">
              <p className="quote">
                🚀 Sign Up to Find the Perfect Tutor!
              </p>

              <img
                className="blackboard"
                src={blackboard}
                alt="Learning illustration"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col right">
            <Register />
          </div>

        </div>
      </main>
    </div>
  );
}

export default RegisterPage;