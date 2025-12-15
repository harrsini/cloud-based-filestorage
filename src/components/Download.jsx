import { useAuth } from "react-oidc-context";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export default function Download({ fileKey }) {
  const auth = useAuth();

  async function handleDownload() {
    const res = await fetch(
      `${API_BASE}/download-url?fileKey=${encodeURIComponent(fileKey)}`,
      {
        headers: {
          Authorization: `Bearer ${auth.user.access_token}`,
        },
      }
    );

    if (!res.ok) {
      alert("Download failed");
      return;
    }

    const { downloadUrl } = await res.json();
    window.location.href = downloadUrl;
  }

  return (
    <button onClick={handleDownload}>
      Download
    </button>
  );
}
