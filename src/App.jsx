import { Routes, Route } from "react-router-dom";

import About from "./components/about";
import BlogPage from "./components/BlogPage";
import Contact from "./components/contact-Us";
import Hero from "./components/herosection";
import Navbar from "./components/navbar";
import TestimonialSection from "./components/testimonial";
import Numbers from "./components/numbers";
import Careers from "./components/careers";
import B2BPage from "./components/b2b";
import ProductCarousel from "./components/productCarousel";
import AllBlogs from "./components/AllBlogs";
import SingleBlog from "./components/SingleBlog";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 px-4 py-8">
                <ProductCarousel />
              </div>
              <BlogPage />
              <Numbers />
              <TestimonialSection />
              <Contact />
            </>
          }
        />
        <Route path="/testimonial" element={<TestimonialSection />} />
        <Route path="/contact-Us" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/herosection" element={<Hero />} />
        <Route path="/productCarousel" element={<ProductCarousel />} />
        <Route path="/blogpage" element={<BlogPage />} /> {/* use lowercase path */}
        <Route path="/blogs" element={<AllBlogs />} />
  <Route path="/blog/:id" element={<SingleBlog />} />
        {/* FULL PAGE ROUTES */}
        <Route path="/careers-page" element={<Careers />} />
        <Route path="/b2b" element={<B2BPage />} />
      </Routes>
    </>
  );
}

export default App;
