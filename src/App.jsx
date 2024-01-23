import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student";
import TutorJoin from "./pages/TutorJoin";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="student" element={<Student />} />
          <Route path="tutor" element={<TutorJoin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
