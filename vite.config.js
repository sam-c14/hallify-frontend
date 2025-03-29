import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://hallbackend.onrender.com", // 🔹 Must be HTTPS if backend is
  //       changeOrigin: true, // ✅ Prevent CORS mismatches
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""), // ✅ Remove `/api` from requests
  //     },
  //   },
  // },
});
