import { useAuth } from "react-oidc-context";

export default function Logout() {
  const auth = useAuth();

  const handleLogout = async () => {
    // Clear OIDC state
    await auth.removeUser();

    // Hard reset browser state
    sessionStorage.clear();
    localStorage.clear();

    // Force reload to clean auth state
    window.location.replace("/");
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
}
