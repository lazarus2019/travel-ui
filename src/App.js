import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AnimationLayout from "./layout/AnimationLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Nav />
      <AnimationLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimationLayout>
    </Router>
  );
}

export default App;
