import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Infinity, Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import StampSection from './components/StampSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const BG_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'Services', href: '#services', dropdown: false },
    { label: 'Work', href: '#work' },
    { label: 'About Us', href: '#about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollTo = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div style={{ background: '#090909' }}>
      {/* ─────────── HERO (EXISTING — DO NOT TOUCH) ─────────── */}
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={BG_VIDEO}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* NAV — upgraded to frosted sticky */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-5 transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(51,50,72,0.75)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '0.5px solid rgba(107,107,107,0.5)' : 'none',
          }}
        >
          <div className="flex items-center gap-2 text-white font-medium text-base">
            <Infinity size={22} strokeWidth={1.5} />
            <span>Kapoor Designs</span>
          </div>

          <div className="hidden md:flex liquid-glass items-center gap-1 rounded-xl px-2 py-2">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollTo(link.href || '#')}
                className={`flex items-center gap-0.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
                  link.active ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={13} className="mt-px" />}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Begin Now
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden liquid-glass text-white p-2 rounded-lg"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute top-[72px] left-4 right-4 z-30 md:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollTo(link.href || '#')}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm transition-colors ${
                  link.active ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={13} className="mt-px" />}
              </button>
            ))}
            <div className="flex gap-2 mt-2 pt-3 border-t border-white/10">
              <button
                onClick={() => scrollTo('#contact')}
                className="flex-1 bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Begin Now
              </button>
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 z-20 px-6 sm:px-12 pb-10 sm:pb-16 max-w-2xl">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-4">
            Crafting Digital<br />Experiences That<br />Inspire
          </h1>
          <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-md">
            We are a full-service digital agency building scalable, beautiful, and impactful web solutions for forward-thinking brands around the globe.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('#work')}
              className="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Start a Project
            </button>
            <button
              onClick={() => scrollTo('#work')}
              className="liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 transition-colors"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
      {/* ─────────── END HERO ─────────── */}

      {/* ─────────── REST OF SITE ─────────── */}
      <ServicesSection />
      <StampSection />
      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
