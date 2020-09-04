import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import LeftNavBar from "./components/LeftNavbar/LeftNavBar.jsx";
import Body from "./components/Body/Body.jsx";
import RightPannel from "./components/RightPannel/RightPannel.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  const [selectedNav, setSelectedNav] = useState("INTRO");
  const selectNav = (value) => {
    setSelectedNav(value);
  };
  return (
    <div className="App">
      <Header selectedNav={selectedNav} selectNav={selectNav} />
      <div className="main-container">
        <LeftNavBar selectedNav={selectedNav} selectNav={selectNav} />
        <Body selectedNav={selectedNav} selectNav={selectNav} />
        <RightPannel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
