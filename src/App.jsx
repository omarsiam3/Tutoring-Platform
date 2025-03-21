import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student";
import TutorJoin from "./pages/TutorJoin";
import "./App.css";
import SignIn from "./pages/SignIn";
import Testimonies from "./pages/Testimonies";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="student" element={<Student />} />
          <Route path="tutor" element={<TutorJoin />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="testimonies" element={<Testimonies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
