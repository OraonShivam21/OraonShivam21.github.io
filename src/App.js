import React from "react";
import "./index.css";
import {
  Navbar,
  Home,
  About,
  Skills,
  Project,
  Contact,
  Footer,
} from "./components/index";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
