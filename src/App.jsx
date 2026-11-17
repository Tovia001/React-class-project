import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
