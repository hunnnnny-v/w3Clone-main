import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
// import App from "./App";
import BelowNavbar from "./components/BelowNavbar";
import SecondHero from "./components/SecondHero";
import ThirdHero from "./components/ThirdHero";
import JavaScriptHero from "./components/JavaScriptHero";
import PythonHero from "./components/PythonHero";
import SqlHero from "./components/SqlHero";
import LanguageGrid from "./components/LanguageGrid";
import LearningHero from "./components/LearningHero";
import ProHero from "./components/ProHero";
import ColorHero from "./components/ColorHero";
import CodeGame from "./components/CodeGame";
import Web from "./components/Web";
import Kickstart from "./components/Kickstart";
import Howto from "./components/Howto";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HtmlPage from "./components/pages/HtmlPage.jsx";
import LogIn from "./components/Login.jsx";
import CssPage from "./components/pages/CssPage.jsx";
import JsPage from "./components/pages/JsPage.jsx";
import { useState } from "react";
import SqlPage from "./components/pages/SqlPage.jsx";
import JavaPage from "./components/pages/JavaPage.jsx";
import CPage from "./components/pages/CPage.jsx";
import PythonPage from "./components/pages/PythonPage.jsx";
import Spaces from "./components/pages/Spaces.jsx";
import Jobs from "./components/pages/Jobs.jsx";
import CPlusPage from "./components/pages/CPlusPage.jsx";
import CHashPage from "./components/pages/CHashPage.jsx";
import ReactPage from "./components/pages/ReactPage.jsx";
import PHPPage from "./components/pages/PHPPage.jsx";
import Button from "./codeeditor/Button.jsx";
import { MainPage } from "./codeeditor/MainPage.jsx";
import BootstrapPage from "./components/pages/BootstrapPage.jsx";
import GitPage from "./components/pages/GitPage.jsx";
import MYsqlPage from "./components/pages/MYsqlPage.jsx";
import NodeJsPage from "./components/pages/NodeJsPage.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LogIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/html"
          element={
            <>
              <Navbar />
              <BelowNavbar />
              <HtmlPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/css"
          element={
            <>
              <Navbar />
              <BelowNavbar />
              <CssPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/js"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <JsPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/sql"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <SqlPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/python"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <PythonPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/java"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <JavaPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/c"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <CPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/c++"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <CPlusPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/chash"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <CHashPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/bootstrap"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <BootstrapPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/react"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <ReactPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/git"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <GitPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/php"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <PHPPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/mysql"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <MYsqlPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/nodejs"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <NodeJsPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/spaces"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <Spaces />
              <Footer />
            </>
          }
        />
        <Route
          path="/jobs"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <Jobs />
              <Footer />
            </>
          }
        />
        <Route
          path="/codeeditor"
          element={
            <>
              <Button />
              <MainPage />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <BelowNavbar />
              <Hero />
              <SecondHero />
              <ThirdHero />
              <JavaScriptHero />
              <PythonHero />
              <SqlHero />
              <LanguageGrid />
              <LearningHero />
              <ProHero />
              <ColorHero />
              <CodeGame />
              <Web />
              <Kickstart />
              <Howto />
              <Footer />
            </>
          }
        />
      </Routes>
      <></>
    </Router>
  );
}
