import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // ! мы говорим TypeScript: «root точно существует, не переживай»

  <StrictMode>
    <App />
  </StrictMode>
);
