import React, { useState, useEffect } from "react";
import member1 from "./assets/vishnu.jpg";
import member2 from "./assets/gunjashah.jpg";
import member3 from "./assets/khan.jpg";
import img1 from "./assets/image2.jpg";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.jpg";
import logo from "./assets/logo.png";

const App = () => {
  const sliderImages = [img1, img2, img3, img4];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    {
      name: "MR. VISHNU NEMANE",
      role: "Founder - VPN DIGITAL SERVICE",
      bio: "Ethical Hacker / Cyber Digital Forensic Expert / Indian Police Trainer and Consultant",
      photo: member1,
    },
    {
      name: "MR. GUNJAN SHAH",
      role: "Associate Director - (BFSI) KPMG",
      bio: "Cyber Security Advisory (BFSI) KPMG / 14+ Years of Leadership in Large-scale Cybersecurity Engagements.",
      photo: member2,
    },
    {
      name: "MR. MOHAMMAD KHAN",
      role: "Cyber Security Consultant",
      bio: "Ethical Hacker / InfoSec Expert CRTP / eCPPT / 6+ Years Of Experience in the Cybersecurity Domain.",
      photo: member3,
    }
  ];

  const services = [
    {
      title: "Ethical Hacking",
      description: "Simulate real-world attacks to strengthen security defenses and uncover vulnerabilities before malicious hackers do."
    },
    {
      title: "Digital Forensics",
      description: "Recover, investigate, and present digital data from cyber incidents to support legal investigations and corporate needs."
    },
    {
      title: "Cybersecurity Training",
      description: "Educating individuals, corporates, and law enforcement agencies to handle modern cyber threats effectively."
    },
    {
      title: "Consulting & Compliance",
      description: "Provide enterprises and governments with strategic cybersecurity planning, policy creation, and compliance services."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md p-4 flex items-center justify-between sticky top-0 z-50 shadow-xl">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="Hacker Nova Logo" className="h-12 w-12 rounded-full object-cover" />
          <h1 className="text-2xl font-extrabold text-green-400 tracking-widest">HackerNova</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <a href="#about" className="hover:text-green-400 transition">About</a>
          <a href="#mission" className="hover:text-green-400 transition">Mission</a>
          <a href="#services" className="hover:text-green-400 transition">Services</a>
          <a href="#team" className="hover:text-green-400 transition">Team</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 flex flex-col items-center gap-6 py-6">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#mission" onClick={() => setMenuOpen(false)}>Mission</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#team" onClick={() => setMenuOpen(false)}>Team</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-green-400 mb-6 leading-tight">Welcome to HackerNova</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Hacker Nova is a cybersecurity organization committed to protecting the digital world through advanced defense, research, and ethical hacking expertise.
          </p>
        </section>

        {/* Image Slider */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={sliderImages[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-96 object-cover transition-all duration-700"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="text-center mb-24">
          <h2 className="text-4xl font-bold text-green-400 mb-8">Our Mission</h2>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our mission is to create a safer cyberspace by delivering innovative cybersecurity services, nurturing cybersecurity talent, and educating organizations and individuals about digital threats and defenses.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="text-center mb-24">
          <h2 className="text-4xl font-bold text-green-400 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-3xl hover:shadow-green-400/30 shadow-lg transition-all hover:scale-105">
                <h3 className="text-2xl font-bold text-green-400 mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="text-center mb-24">
          <h2 className="text-4xl font-bold text-green-400 mb-12">Meet Our Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-gray-800 rounded-3xl p-8 hover:shadow-green-400/30 shadow-lg transition-all hover:scale-105">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-36 w-36 rounded-full border-4 border-green-400 object-cover mb-6 mx-auto shadow-lg"
                />
                <h3 className="text-xl font-bold text-green-400">{member.name}</h3>
                <p className="text-gray-300 mt-2 mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-400 mb-6">Contact Us</h2>
          <div className="text-lg space-y-4 text-gray-300">
            <p>Email: <a href="mailto:contact@hackernova.org" className="text-blue-400 hover:underline">info@vpndigitalservice.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+91 84320 03083</a></p>
            <p>Address: AECC, Anadheri, Mumbai</p>
            <div className="mt-8">
              <a
                href="https://chat.whatsapp.com/EUkxAbQtwhmI56RLEkvFS5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg"
              >
                Join WhatsApp Community
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/90 p-6 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-gray-400">© 2025 HackerNova. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://hackernova.org" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Website</a>
          <a href="https://www.linkedin.com/company/hackernova/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
          <a href="/privacy-policy" className="text-gray-400 hover:underline">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
