import { Routes, Route } from "react-router-dom";
import Navs from "./Components/Navs";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
    <div>
      <Navs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
      </Routes>
    </div>
  );
}

export default App;
