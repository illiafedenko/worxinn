// Import the necessary modules from React and react-router-dom
import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// Import the components for different pages
import Register from "./pages/register";
import Term from "./pages/term";
import Survey from "./pages/survey";
// Import the CSS file for styling
import "./App.css";

// Define the App component as a functional component
const App = () => {
  return (
    // Setup the BrowserRouter component for routing
    <BrowserRouter basename="/">
      {/* Define the routes using the Routes component */}
      <Routes>
        {/* Specify the route path and the corresponding component to render */}
        <Route path="/" Component={Register}/>
        <Route path="/terms" Component={Term}/>
        <Route path="/survey" Component={Survey}/>
      </Routes>
    </BrowserRouter>
  );
};

// Export the App component as the default export
export default App;
