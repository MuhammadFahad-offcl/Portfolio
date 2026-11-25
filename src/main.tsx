import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/figtree/wght.css";
import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import App from "./App";
import "./index.css";
import { initSmoothScroll } from "./lib/smooth-scroll";

initSmoothScroll();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
