import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
//import Consultation05 from "./consultations/Consultation05/Consultation05";
//import Lesson14 from "./lessons/Lesson14/Lesson14";
//import Homework15 from "./homeworks/Homework15/Homework15";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Users from "./pages/Users/Users";
import Designer from './pages/Users/components/Designer/Designer'
import Manager from './pages/Users/components/Manager/Manager'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Clients from "./pages/Clients/Clients";
import Twitter from './pages/Clients/components/Twitter/Twitter'
import Facebook from './pages/Clients/components/Facebook/Facebook'
import Youtube from './pages/Clients/components/Youtube/Youtube'
import Lesson18 from "./lessons/Lesson18/Lesson18";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/course" element={<Course/>}/>
          <Route path='/users' element={<Users />} />
          <Route path='/users/designer' element={<Designer />} />
          <Route path='/users/manager' element={<Manager />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/clients/facebook' element={<Facebook />} />
          <Route path='/clients/twitter' element={<Twitter />} />
          <Route path='/clients/youtube' element={<Youtube />} />
          <Route path="/lesson18" element={<Lesson18/>}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
      {/* <Homework15 /> */}
      {/* <Lesson14 /> */}
      {/* <Consultation05/> */}
    </BrowserRouter>
  );
}

export default App;
