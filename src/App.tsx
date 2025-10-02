import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
