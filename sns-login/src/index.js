import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider
    clientId={process.env.REACT_APP_GO_API_KEY}
    onScriptLoadError={() => console.log("실패")}
    onScriptLoadSuccess={() => console.log("성공")}
  >
    <App />
  </GoogleOAuthProvider>
);
