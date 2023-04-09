import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, useState } from "react";
// components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [mode, setMode] = useState(
    String(localStorage.getItem("mode")).toLowerCase() === "true"
  );
  {
    const body = document.querySelector("body");
    if (mode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }

  localStorage.setItem("mode", mode);
  return (
    <div className="App">
      <Router>
        <Header setMode={setMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
