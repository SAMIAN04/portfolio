import "./App.css";
import { useState, useRef } from "react";
import Card from "./components/Card";
import Section from "./components/Section";
import Nav from "./components/Nav";
import MobileContactside from "./components/MobileContactside";
import Deskcontactside from "./components/DeskContactside";

import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Goals from "./components/pages/Goals";

import { AnimatePresence, motion } from "framer-motion";

// Your page sequence
const pageOrder = ["About", "Skills", "Goals", "Projects", "Resume"];

function App() {
  const [activePage, setActivePage] = useState("About");
  const prevIndex = useRef(0);

  const currentIndex = pageOrder.indexOf(activePage);
  const direction = currentIndex > prevIndex.current ? 1 : -1;

  const handlePageChange = (newPage) => {
    prevIndex.current = pageOrder.indexOf(activePage);
    setActivePage(newPage);
  };

  const pageVariants = {
    initial: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute",
    }),
    animate: {
      x: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.4 },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      position: "absolute",
      transition: { duration: 0.4 },
    }),
  };

  const renderPage = () => {
    switch (activePage) {
      case "About":
        return <About />;
      case "Goals":
        return <Goals />;
      case "Resume":
        return <Resume />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <main className="min-h-[640px] max-h-0[1080] min-w-[360px] max-w-[1910] w-[99vw] overflow-x-hidden overflow-y-scroll flex items-center flex-col gap-4 text-white lg:flex-row lg:justify-center lg:content-center lg:items-center relative mt-[5%]">

      {/* Contact Panels */}
      <div className="block md:hidden">
        <MobileContactside />
      </div>
      <div className="hidden md:block lg:hidden">
        <MobileContactside />
      </div>
      <div className="hidden lg:block">
        <Deskcontactside />
      </div>

      {/* Section stays fixed */}
      <div className="relative w-full lg:w-auto min-h-[400px] flex justify-center items-center ">
        <Section>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activePage}
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full flex items-center justify-center"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </Section>
      </div>

      {/* Bottom Nav */}
      <Nav activeItem={activePage} onItemClick={handlePageChange} />
    </main>
  );
}

export default App;
