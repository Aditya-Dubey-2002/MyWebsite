import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Massonary from './components/massonary';
import YourNavBar from './components/nav-bar';
import Projects from './components/projectit/projects';
import About from './components/about/about';
import Skills from './components/skills/skills';
import ContactMeCard from './components/Contact-Me/contactMe';
import videosrc from "./components/static/videos/video.mp4";


function App() {
//   const videoStyle = {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover", // Maintain video aspect ratio and cover the container
//     position: "absolute",
//     top: 0,
//     left: 0,
//     zIndex: -1, // Place the video behind the content
// };
  return (
    <Router>
      {/* <video
        src={videosrc} // Replace with the actual video source
        style={videoStyle}
        autoPlay
        loop
        muted
      /> */}
      <Routes>
        <Route path="/" element={<Massonary />} />
        <Route path="/about" element={<About bgcolor="#B15EFF" />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blog" element={<Massonary />} />
        <Route path="/contact" element={<ContactMeCard />} />
      </Routes>
    </Router>
  );
}

export default App;
