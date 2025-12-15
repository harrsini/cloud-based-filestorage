import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import App from "./App";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_HPuEuh0MW",
  client_id: "28ki4ifpflrutnm48jirmpn58c",

  redirect_uri: window.location.origin,
  post_logout_redirect_uri: window.location.origin,

  response_type: "code",
  scope: "openid email",

  // ✅ optional but safe
  automaticSilentRenew: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
