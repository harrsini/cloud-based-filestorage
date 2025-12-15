import { useAuth } from "react-oidc-context";
import Upload from "./components/Upload";
import ListFiles from "./components/ListFiles";
import Logout from "./components/logout";
import { getUserRole } from "./auth/useRole";
import "./styles/app.css";

export default function App() {
  const auth = useAuth();

  // Loading state
  if (auth.isLoading) {
    return (
      <div className="app-container">
        <div className="card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // 🔴 NOT AUTHENTICATED → LOGIN PAGE
  if (!auth.isAuthenticated) {
    return (
      <div className="app-container">
        <div className="card">
          <h2>Cloud File Storage</h2>
          <p>Please login to continue</p>

          {/* ✅ FORCE LOGIN SCREEN EVERY TIME */}
          <button
            onClick={() =>
              auth.signinRedirect({
                prompt: "login", // 👈 THIS FIXES AUTO-LOGIN ISSUE
              })
            }
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // Authenticated → get role
  const role = getUserRole(auth.user);

  return (
    <div className="app-container">
      <div className="card">
        <div className="header">
          <h2>{auth.user.profile.email}</h2>
          <Logout />
        </div>

        {/* ✅ UPLOADER */}
        {role === "uploader" && (
          <div className="section">
            <Upload />
            <ListFiles canDownload={false} />
          </div>
        )}

        {/* ✅ DOWNLOADER */}
        {role === "downloader" && (
          <div className="section">
            <ListFiles canDownload={true} />
          </div>
        )}
      </div>
    </div>
  );
}
