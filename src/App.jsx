import "./App.css";
import Card from "./components/Card";
import Section from "./components/Section";

function App() {
  return (
    <>
      <main className=" min-h-[640px] max-h-0[1080]  min-w-[360px] max-w-[1910] w-[99vw] overflow-x-hidden overflow-y-scroll flex justify-center items-center flex-col gap-3">
        <div className="h-[112px] flex justify-center items-center bg-main w-[93vw] rounded-2xl mt-5 border-[1px] border-[#383838]">samian</div>
        <div>
          <Section>
            <Card>
              samian
              </Card >
          </Section>
        </div>
        <nav className="h-[57.6px] w-[99vw] flex justify-center items-center bg-[#2b2b2cbf] fixed  bottom-0 z-0 backdrop-blur-xl rounded-tr-xl rounded-tl-xl border-[1px] border-[#383838]">
        nav
        </nav>
      </main>
      
    </>
  );
}

export default App;
