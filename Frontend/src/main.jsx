import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

// Quiet a specific non-fatal React Router future-flag warning in development
// that can be noisy. This filters only the v7_startTransition message while
// allowing other warnings to appear. Remove this when you no longer need it.
if (import.meta.env.DEV) {
  const _warn = console.warn.bind(console);
  console.warn = (...args) => {
    try {
      const msg = args[0];
      if (typeof msg === "string" && msg.includes("v7_startTransition")) {
        return;
      }
    } catch (e) {
      // fallthrough to original
    }
    _warn(...args);
  };
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
