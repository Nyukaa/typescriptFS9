// export default defineConfig({
//   plugins: [react()],
//   server: {
//     fs: {
//       allow: ["."],
//     },
//   },
// });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    fs: { allow: ["."] },
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});
