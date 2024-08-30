import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={"home"} />
          <Route path="/about" element={"about"} />
          <Route path="/projects" element={"projects"} />
          <Route path="/contact" element={"contact"} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
