import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import { useScrollEffects } from "./hooks/useScrollEffects";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  useScrollEffects();
  const { dir } = useLanguage();

  useEffect(() => {
    AOS.init({
      anchorPlacement: "top-bottom",
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: "mobile",
    });
  }, []);

  // refresh AOS when language content changes
  useEffect(() => {
    AOS.refresh();
  }, [dir]);

  return (
    <div className={dir === "rtl" ? "dir-rtl" : "dir-ltr"}>
      <Header />
      <div className="page-content">
        <div id="content">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Portfolio />
          <Experience />
          <Contact />
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
}
