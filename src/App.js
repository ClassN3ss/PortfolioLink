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
      <Navbar />

      <Routes>
        {/* หน้าเดียว (scroll) */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>

              <section id="summary">
                <Summary />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="contact">
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
    </BrowserRouter>
  );
}

export default App;