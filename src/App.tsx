import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "@/components/Navigation";
import RoutingSheet from "@/components/RoutingSheet";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<RoutingSheet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
