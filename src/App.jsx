import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ChairConfigurator from "@/pages/chair/ChairConfigurator";
import DoorConfigurator from "@/pages/door/DoorConfigurator";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chair" element={<ChairConfigurator />} />
        <Route path="/door" element={<DoorConfigurator />} />
      </Routes>
    </div>
  );
}

export default App;
