import { useEffect, useState } from "react";
import { listFiles, getDownloadUrl } from "../api/fileApi";
import { useAuth } from "react-oidc-context";

export default function ListFiles({ canDownload }) {
  const auth = useAuth();
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFiles() {
      try {
        const token = auth.user?.access_token;
        if (!token) return;

        const data = await listFiles(token);
        setFiles(Array.isArray(data.files) ? data.files : []);
      } catch (err) {
        console.error("LIST FILES ERROR:", err);
        setError("Failed to list files");
      }
    }

    if (auth.isAuthenticated) loadFiles();
  }, [auth.isAuthenticated]);

  async function handleDownload(fileKey) {
    try {
      const token = auth.user.access_token;
      const { downloadUrl } = await getDownloadUrl(token, fileKey);
      window.location.href = downloadUrl;
    } catch (err) {
      alert("Download failed");
    }
  }

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="section">
      <h3>Files</h3>

      {files.length === 0 && <p>No files found</p>}

      {files.length > 0 && (
        <div className="table-wrapper">
          <table className="file-table">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Owner</th>
                <th>Uploaded At</th>
                {canDownload && <th>Action</th>}
              </tr>
            </thead>

            <tbody>
              {files.map((file) => {
                const uploadedDate =
                  file.uploadedAt && !isNaN(new Date(file.uploadedAt))
                    ? new Date(file.uploadedAt).toLocaleString()
                    : "N/A";

                return (
                  <tr key={file.fileId}>
                    <td className="file-name">{file.fileId}</td>
                    <td>{file.owner || "Unknown"}</td>
                    <td>{uploadedDate}</td>

                    {canDownload && (
                      <td>
                        <button
                          className="small-btn"
                          onClick={() => handleDownload(file.fileId)}
                        >
                          Download
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
