// src/api/fileApi.js

const API_BASE = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE) {
  throw new Error("VITE_API_BASE_URL is missing");
}

// ===================== UPLOAD =====================
export async function getUploadUrl(token, filename) {
  const res = await fetch(`${API_BASE}/upload-url`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ filename }),
  });

  if (!res.ok) {
    throw new Error("Failed to get upload URL");
  }

  return res.json(); // { uploadUrl }
}

// ===================== DOWNLOAD =====================
export async function getDownloadUrl(token, fileKey) {
  const res = await fetch(
    `${API_BASE}/download-url?fileKey=${encodeURIComponent(fileKey)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!res.ok) {
    throw new Error("Failed to get download URL");
  }

  return res.json(); // { downloadUrl }
}


// ===================== LIST FILES =====================
export async function listFiles(token) {
  const res = await fetch(`${API_BASE}/list-files`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error("Failed to list files");
  }

  return res.json(); // 👈 must return object with `.files`
}

