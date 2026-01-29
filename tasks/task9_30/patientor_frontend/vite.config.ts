export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ["."],
    },
  },
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
