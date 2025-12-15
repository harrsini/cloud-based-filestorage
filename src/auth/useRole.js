export function getUserRole(user) {
  const groups = user?.profile?.["cognito:groups"] || [];
  if (groups.includes("Uploader")) return "uploader";
  if (groups.includes("Downloader")) return "downloader";
  return "unknown";
}
