import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/about";
import BlogPage from "./components/BlogPage";
import Contact from "./components/contact-Us";
import Hero from "./components/herosection";
import Navbar from "./components/navbar";
import ProductCarousel from "./components/ProductCarousel";
import TestimonialSection from "./components/testimonial";

import Careers from "./components/careers";
import B2BPage from "./components/B2B";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <ProductCarousel />
              <BlogPage />
              <TestimonialSection />
              <Contact />
            </>
          }
        />

        {/* FULL PAGE ROUTES */}
        <Route path="/careers-page" element={<Careers />} />
        <Route path="/b2b" element={<B2BPage />} />

      </Routes>
    </>
  );
}

export default App;
