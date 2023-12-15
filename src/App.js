import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Thread3d from "./Components/Thread3d";
import HomePage2 from "./Pages/HomePage2";
import HomePage3 from "./Pages/HomePage3";
import HomePage4 from "./Pages/Homepage4";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Homepage4 from "./Pages/Homepage4";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage3 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
