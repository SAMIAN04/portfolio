import "./App.css";

import Card from "./components/Card";
import Section from "./components/Section";
import { useState } from "react";
import Nav from "./components/Nav";
import MobileContactside from "./components/MobileContactside";
import Deskcontactside from "./components/DeskContactside";

function App() {
  
  return (
    <>
      <main className="min-h-[640px] max-h-0[1080] min-w-[360px] max-w-[1910] w-[99vw] overflow-x-hidden overflow-y-scroll flex items-center flex-col gap-4 text-white  lg:flex-row lg:justify-center lg:content-center lg:items-center relative mt-[5%]">
{/* Mobile only */}
    <div className="block md:hidden">
    <MobileContactside/>
    </div>

 
    <div className="hidden md:block lg:hidden">
      <MobileContactside/>
    </div>

    {/* Desktop only */}
    <div className="hidden lg:block">
      <Deskcontactside/>
    </div>
        <div>
          <Section>
            <Card>
              my name is samian and i am a programmer and i love to code on my
              laptop lore
            </Card>
          </Section>
        </div>
        <Nav/>
      </main>
    </>
  );
}

export default App;
