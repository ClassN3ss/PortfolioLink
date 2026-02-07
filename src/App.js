import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FaceAttendance from "./pages/FaceAttendance";
import SorSorStore from "./pages/SorSorStore";
import IotPlants from "./pages/Iot-plants";

function App() {
  return (
    <BrowserRouter>
      <div className="bg">
        <Navbar />

        <Routes>
          {/* หน้าเดียว (scroll) */}
          <Route
            path="/"
            element={
              <>
                <section id="home" className="section">
                  <Home />
                </section>

                <section id="summary" className="section">
                  <Summary />
                </section>

                <section id="projects" className="section">
                  <Projects />
                </section>

                <section id="contact" className="section">
                  <Contact />
                </section>
              </>
            }
          />
          <Route
            path="/projects/face-attendance"
            element={<FaceAttendance />}
          />
          <Route
            path="/projects/sor-sor-store"
            element={<SorSorStore />}
          />
          <Route
            path="/projects/iot-plants"
            element={<IotPlants />}
          />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;