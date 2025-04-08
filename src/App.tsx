import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
//import Consultation05 from "./consultations/Consultation05/Consultation05";
//import Lesson14 from "./lessons/Lesson14/Lesson14";
//import Homework15 from "./homeworks/Homework15/Homework15";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/course" element={<Course/>}/>
        </Routes>
      </Layout>
      {/* <Homework15 /> */}
      {/* <Lesson14 /> */}
      {/* <Consultation05/> */}
    </BrowserRouter>
  );
}

export default App;
