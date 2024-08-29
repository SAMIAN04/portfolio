import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";
import Section from "./components/Section";
import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <main className="min-h-[640px] max-h-0[1080] min-w-[360px] max-w-[1910] w-[99vw] overflow-x-hidden overflow-y-scroll flex items-center flex-col gap-4 text-white">
        <div
          className={`flex  bg-[#1e1e1f] w-[93vw] rounded-[1.4rem] mt-4 border-[1px] border-[#383838] relative duration-700 ${
            isExpanded ? "h-[322px]" : "h-[110px]"
          } `}
        >
          {/*down arrow */}
          <span
            className={`${
              isExpanded ? "rotate-180" : "rotate-0"
            } absolute top-2 right-3 duration-300`}
          >
            {!isExpanded ? (
              <FontAwesomeIcon
                className={`text-gray-400  text-[1rem] transform duration-900 `}
                onClick={toggleExpand}
                icon={faAngleDown}
                bounce
              />
            ) : (
              <FontAwesomeIcon
                className={`text-gray-400  text-[1.2rem] transform duration-300 `}
                onClick={toggleExpand}
                icon={faAngleDown}
              />
            )}
          </span>
          {/* image */}
          <img src="src/assets/me1.jpg" alt="my pic" className="w-[85px] rounded-2xl left-3 top-3 absolute" />
          <p className="flex absolute top-5 left-28 font-semibold text-lg">SAMIAN SIKDAR 🙂</p>
          <div className="top-14 left-28 w-[fit-content] bg-[#44594d77] font-light  px-4 py-1 text-[12px] rounded-[5px] absolute">&lt; webDeveloper/&gt;</div>
      </div>
        <div>
          <Section>
            <Card>
              my name is samian and i am a programmer and i love to code on my
              laptop
            </Card>
          </Section>
        </div>
        <Nav/>
      </main>
    </>
  );
}

export default App;
