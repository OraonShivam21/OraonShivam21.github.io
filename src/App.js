import React from "react";
import "./index.css";
import {
  Navbar,
  Hero,
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
        <Hero />
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
