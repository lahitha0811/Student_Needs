import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// ======================================================
//                    PROVIDERS
// ======================================================

// Attendance Auth
import { AuthProvider } from "./contexts/Attendance/AuthContext";

// Tutorials Theme
import { ThemeProvider } from "./utils/Tutorials/ThemeContext";

// ======================================================
//                    COMPONENTS
// ======================================================

import ErrorBoundary from "./components/Tutorials/ErrorBoundary";

// ======================================================
//                    GLOBAL STYLES
// ======================================================

// Tutorials Styles
import "./styles/Tutorials/LoginRegister.css";
import "./styles/Tutorials/Login.css";

// Attendance Styles
import "./styles/Attendance/main.css";

// Global Styles
import "./index.css";

// ======================================================
//                    ROOT
// ======================================================

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <StrictMode>
    <ThemeProvider>
      <ErrorBoundary>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);