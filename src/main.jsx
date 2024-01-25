// Import the necessary modules
import React from "react";
import { createRoot } from "react-dom/client";

// Import the App component from App.jsx
import App from "./App.jsx";
// Import the CSS file for styling
import "./index.css";

// Call the createRoot function provided by react-dom to create a root for rendering your React app
createRoot(document.getElementById("root")).render(
    // Render the App component inside the BrowserRouter
    <App />
);
