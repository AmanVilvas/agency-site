import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Plus, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Simulated live coordinates that update
function useCoordinates() {
  const [coords, setCoords] = useState({ lat: '28.6139° N', lon: '77.2090° E' });

  useEffect(() => {
    const interval = setInterval(() => {
      // Subtle random drift for the "live" feel
      const latBase = 28.6139 + (Math.random() - 0.5) * 0.0002;
      const lonBase = 77.209 + (Math.random() - 0.5) * 0.0002;
      setCoords({
        lat: `${latBase.toFixed(4)}° N`,
        lon: `${lonBase.toFixed(4)}° E`,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return coords;
}

const footerLinks = [
  { section: 'Navigate', links: ['Home', 'Services', 'Work', 'About', 'Contact'] },
  { section: 'Services', links: ['WebGL Experiences', 'Brand Identity', 'Product Design', 'Campaigns', 'Consultation'] },
  { section: 'Social', links: ['Twitter / X', 'Instagram', 'Dribbble', 'LinkedIn', 'Behance'] },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const coords = useCoordinates();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-heading',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.footer-heading', start: 'top 85%' },
        }
      );

      gsap.fromTo(
        '.footer-col',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: '.footer-links', start: 'top 85%' },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      style={{
        background: '#090909',
        borderTop: '0.5px solid rgba(247,249,250,0.08)',
        padding: '120px 0 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        {/* Large CTA heading */}
        <div className="footer-heading" style={{ marginBottom: 80 }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: 10,
              letterSpacing: '0.18em',
              color: '#828384',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            Get in touch
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 40,
            }}
          >
            <h2
              style={{
                fontFamily: "'Inter', 'Geist', sans-serif",
                fontSize: 'clamp(48px, 7vw, 96px)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                color: '#f7f9fa',
                margin: 0,
                maxWidth: 700,
              }}
            >
              Let's build something{' '}
              <em style={{ fontStyle: 'italic', color: '#af50ff' }}>extraordinary.</em>
            </h2>

            <a
              href="mailto:hello@kapoordesigns.studio"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: '#af50ff',
                color: '#fff',
                fontFamily: "'Inter', 'Geist', sans-serif",
                fontSize: 15,
                fontWeight: 400,
                textDecoration: 'none',
                padding: '18px 28px',
                borderRadius: 8,
                whiteSpace: 'nowrap',
                flexShrink: 0,
                letterSpacing: '-0.01em',
              }}
            >
              Send a brief <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ height: '0.5px', background: 'rgba(247,249,250,0.08)', marginBottom: 80 }}
        />

        {/* Footer links */}
        <div
          className="footer-links"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: 40,
            marginBottom: 80,
          }}
        >
          {/* Brand col */}
          <div className="footer-col">
            <p
              style={{
                fontFamily: "'Inter', 'Geist', sans-serif",
                fontSize: 20,
                fontWeight: 400,
                letterSpacing: '-0.01em',
                color: '#f7f9fa',
                margin: '0 0 16px 0',
              }}
            >
              Kapoor Designs
            </p>
            <p
              style={{
                fontFamily: "'Inter', 'Geist', sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
                color: '#474747',
                margin: '0 0 24px 0',
                maxWidth: 240,
              }}
            >
              Premium GSAP & WebGL experiences for brands that refuse to be average.
            </p>
            <p
              style={{
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: 10,
                color: '#af50ff',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              hello@kapoordesigns.studio
            </p>
          </div>

          {/* Link cols */}
          {footerLinks.map((col, i) => (
            <div key={i} className="footer-col">
              <p
                style={{
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  color: '#474747',
                  textTransform: 'uppercase',
                  marginBottom: 20,
                }}
              >
                {col.section}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "'Inter', 'Geist', sans-serif",
                        fontSize: 14,
                        color: '#828384',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#f7f9fa')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#828384')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom coordinate stamp */}
      <div
        style={{
          borderTop: '0.5px solid rgba(247,249,250,0.06)',
          padding: '24px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Plus
            size={12}
            color="#828384"
            style={{ flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: 11,
              color: '#474747',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Fly Direct
          </span>
          <div
            style={{
              width: '0.5px',
              height: 12,
              background: 'rgba(247,249,250,0.15)',
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: 11,
              color: '#474747',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Digital Experiences
          </span>
          <div
            style={{
              width: '0.5px',
              height: 12,
              background: 'rgba(247,249,250,0.15)',
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: 11,
              color: '#474747',
              letterSpacing: '0.05em',
            }}
          >
            © 2025 Kapoor Designs
          </span>
        </div>

        {/* Live coordinates */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Heart size={10} color="#af50ff" fill="#af50ff" />
          <span
            style={{
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: 11,
              color: '#474747',
              letterSpacing: '0.08em',
              transition: 'all 0.5s ease',
            }}
          >
            {coords.lat}, {coords.lon}
          </span>
        </div>
      </div>
    </footer>
  );
}
