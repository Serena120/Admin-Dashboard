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
import AccSettings from "./Components/SettingsComponents/AccSettings";
import Preferences from "./Components/SettingsComponents/Preferences";
import NotificationSettings from "./Components/SettingsComponents/NotificationSettings";
import SecuritySettings from "./Components/SettingsComponents/SecuritySettings";
import PrivacySettings from "./Components/SettingsComponents/PrivacySettings";
import Help from "./Components/SettingsComponents/Help";

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
              path="/settings"
              element={<Settings isMenuOpen={isMenuOpen} />}
            >
              <Route path="account" element={<AccSettings />} />
              <Route path="preferences" element={<Preferences />} />
              <Route path="notifSettings" element={<NotificationSettings />} />
              <Route path="security" element={<SecuritySettings />} />
              <Route path="privacy" element={<PrivacySettings />} />
              <Route path="help" element={<Help />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
