import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import BookAppoinment from "./pages/BookAppoinment";
import ClinicNearby from "./pages/ClinicNearby";
import Firstaid from "./pages/FirstAid";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SOS from "./pages/SOS";

// ⭐ NEW IMPORTS
import Articles from "./extrapages/Arctiles";
import Blogs from "./extrapages/Blog";
import Newsletter from "./extrapages/Newsletter";
import Consultation from "./pages/Consultation";
import VideoCall from "./pages/VideoCall";
import AudioCall from "./pages/AudioCall";
import WellBeingCards from "./components/WellBeingCards";
import EmotionalHealth from "./pages/EmotionalHealth";
import MentalDeepTest from "./pages/MentalDeepTest";
import TestResults from "./pages/TestResults";
import PhysicalHealth from "./pages/PhysicalHealth";
import MentalHealth from "./pages/MentalHealth";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Existing Pages */}
        <Route path="/bookappoinment" element={<BookAppoinment />} />
        <Route path="/clinicnearby" element={<ClinicNearby />} />
        <Route path="/firstaid" element={<Firstaid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sos" element={<SOS />} />

        {/* ⭐ NEW ROUTES FOR CONSULTATION ARTICLES / BLOGS / NEWSLETTER */}
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/videocall" element={<VideoCall />} />
        <Route path="/audiocall" element={<AudioCall />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/newsletter" element={<Newsletter />} />

        {/* WELL-BEING SECTION */}
<Route path="/wellbeing" element={<WellBeingCards />} />

{/* Sub Pages */}
<Route path="/wellbeing/physical" element={<PhysicalHealth/>} />
<Route path="/wellbeing/mental" element={<MentalHealth />} />
<Route path="/wellbeing/emotional" element={<EmotionalHealth />} />

{/* Deep Mental Test (GAD-7 + PHQ-9) */}
<Route path="/wellbeing/mental/deep-test" element={<MentalDeepTest />} />

{/* Universal test result page */}
<Route path="/wellbeing/results" element={<TestResults />} />
      </Routes>
    </>
  );
}

export default App;
