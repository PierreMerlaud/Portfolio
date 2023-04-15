import React, { useEffect } from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Xp from "./components/XP/Xp";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'sans-serif']
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Xp />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
