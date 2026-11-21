// File: FileChoosing.jsx (React component, browser-safe)
import React, { useState } from "react";
import axios from "axios";

export default function FileChoosing() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return;

    try {
      // If the external API accepts raw file body, you can send file directly.
      // Many APIs expect multipart/form-data; adjust accordingly.
      const resp = await axios.post("https://api.nutrient.io/processor/", file, {
        headers: {
          "Content-Type": file.type || "application/octet-stream",
          // Do NOT embed sensitive tokens in client-side code. Use a backend to sign requests.
          // "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
        responseType: "blob", // browser-friendly binary response
      });

      // Create a download link for the returned PDF blob
      const url = window.URL.createObjectURL(new Blob([resp.data], { type: "application/pdf" }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Upload/processing failed", err);
      // If the server returns JSON/error message as blob, try to parse it:
      if (err.response && err.response.data) {
        try {
          const reader = new FileReader();
          reader.onload = () => console.error("Server error body:", reader.result);
          reader.readAsText(err.response.data);
        } catch (e) { /* ignore */ }
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload & Process</button>
    </div>
  );
}