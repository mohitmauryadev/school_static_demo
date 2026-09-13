import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Facility from './pages/Facility'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar
        schoolName="St. Xavier's Public School"
        logo="https://img.magnific.com/free-vector/gradient-high-school-logo-design_23-2149626932.jpg?semt=ais_hybrid&w=740&q=80"
        navItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Academics", href: "/academics" },
          { label: "Facilities", href: "/facilities" },
          { label: "Gallery", href: "/gallery" },
          { label: "Contact", href: "/contact" },
        ]}

        admissionText="Admission Enquiry"
        admissionHref="#admission"
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/facilities' element={<Facility />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer
        schoolName="St. Mary's Convent School"
        logo="https://img.magnific.com/free-vector/gradient-high-school-logo-design_23-2149626932.jpg?semt=ais_hybrid&w=740&q=80"
        tagline="A joyful learning community where children discover, grow and prepare for a bright future."

        address="Station Road, Amethi, Uttar Pradesh"
        phone="+91 98765 43210"
        email="info@stmaryschool.com"

        socialLinks={{
          facebook: "https://facebook.com/",
          instagram: "https://instagram.com/",
          linkedin: "https://linkedin.com/",
          youtube: "https://youtube.com/",
        }}

        admissionTitle="Admissions Open for 2026–27!"
        admissionText="Take the first step towards a joyful, meaningful and future-ready education for your child."

        admissionButtonText="Start Admission Enquiry"
        admissionButtonHref="#admission"
      />
    </BrowserRouter>
  )
}

export default App
