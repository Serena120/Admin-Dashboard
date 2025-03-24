import React, { useState } from "react";
import HamburgerMenu from "./Components/HamburgerMenu";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Statistics from "./Components/Statistics";
import Settings from "./Components/Settings";
import Inbox from "./Components/Inbox";
import Notifications from "./Components/Notifications";
import { ThemeProvider } from "./Components/Context/ThemeContext";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div>
        <BrowserRouter>
          <HamburgerMenu
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
          />

          <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

          <Routes>
            <Route path="/" element={<Home isMenuOpen={isMenuOpen} />} />
            <Route
              path="/statistics"
              element={<Statistics isMenuOpen={isMenuOpen} />}
            />
            <Route path="/inbox" element={<Inbox isMenuOpen={isMenuOpen} />} />
            <Route
              path="/notifications"
              element={<Notifications isMenuOpen={isMenuOpen} />}
            />
            <Route
              path="/settings/*"
              element={<Settings isMenuOpen={isMenuOpen} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
