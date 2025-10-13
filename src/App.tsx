import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Careerspage from "./components/Careerspage";
import Securitypage from "./components/Securitypage";
import Signup from "./components/auth/Signup";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/careers" element={<Careerspage />} />
          <Route path="/security" element={<Securitypage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
