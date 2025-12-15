import { useState } from "react";
import { useAuth } from "react-oidc-context";
import { getUploadUrl } from "../api/fileApi";

export default function Upload() {
  const auth = useAuth();
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Choose a file first");
      return;
    }

    try {
      const token = auth.user.access_token;

      const { uploadUrl } = await getUploadUrl(token, file.name);

      await fetch(uploadUrl, {
        method: "PUT",
        body: file
      });

      alert("Upload successful ✅");
    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    }
  };

  return (
    <div>
      <h3>Upload</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
