import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";

import TreatmentListing from "./pages/TreatmentListing";
import TreatmentDetail from "./pages/TreatmentDetail";

import BlogListing from "./pages/BlogListing";
import BlogDetail from "./pages/BlogDetail";

import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PatientGuide from "./pages/PatientGuide";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="treatments" element={<TreatmentListing />} />
        <Route path="treatments/:slug" element={<TreatmentDetail />} />

        <Route path="blogs" element={<BlogListing />} />
        <Route path="blogs/:slug" element={<BlogDetail />} />

        <Route path="destinations" element={<Destinations />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="patient-guide" element={<PatientGuide />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="cookies" element={<Cookies />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;