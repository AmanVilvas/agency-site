import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    index: '01',
    title: 'GSAP & WebGL\nExperiences',
    description:
      'Award-winning interactive websites powered by GSAP, Three.js and WebGL. We build immersive, scroll-driven animations that win Awwwards, FWA, and CSS Design Awards.',
    tags: ['GSAP', 'Three.js', 'WebGL', 'Scroll Experiences'],
  },
  {
    index: '02',
    title: 'Brand Identity\n& Motion',
    description:
      'Visual identities that live and breathe across digital and physical. From logo systems to full motion design languages — built to be remembered.',
    tags: ['Identity', 'Motion Design', 'Brand Systems'],
  },
  {
    index: '03',
    title: 'Product Design\n& UX',
    description:
      'Interfaces that feel like instruments — precise, responsive, alive. We design for the user who notices the details no one else catches.',
    tags: ['UX Design', 'Product', 'Prototyping'],
  },
  {
    index: '04',
    title: 'Digital\nCampaigns',
    description:
      'Launch-moment campaigns engineered for maximum impact. Interactive microsites, viral landing pages, and the kind of creative code that gets screenshotted.',
    tags: ['Campaign', 'Microsite', 'Interactive'],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stamp heading parallax
      gsap.fromTo(
        stampRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stampRef.current,
            start: 'top 85%',
          },
        }
      );

      // Service rows stagger in
      gsap.fromTo(
        '.service-row',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.services-list',
            start: 'top 80%',
          },
        }
      );

      // Violet line grows on scroll
      gsap.fromTo(
        '.violet-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: 'power2.out',
          transformOrigin: 'left',
          scrollTrigger: {
            trigger: '.violet-line',
            start: 'top 90%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        background: '#090909',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section stamp */}
      <div
        ref={stampRef}
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 40px',
          marginBottom: 80,
        }}
      >
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
          What we do
        </p>
        <h2
          style={{
            fontFamily: "'Inter', 'Geist', sans-serif",
            fontSize: 'clamp(52px, 7vw, 88px)',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: 0.9,
            color: '#f7f9fa',
            margin: 0,
          }}
        >
          Services
        </h2>
        {/* Violet line */}
        <div
          className="violet-line"
          style={{
            marginTop: 32,
            height: 1,
            background: 'linear-gradient(90deg, #af50ff 0%, transparent 80%)',
            width: '100%',
          }}
        />
      </div>

      {/* Service rows */}
      <div
        className="services-list"
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}
      >
        {services.map((svc, i) => (
          <div
            key={i}
            className="service-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 1fr auto',
              gap: 40,
              alignItems: 'start',
              padding: '40px 0',
              borderBottom: '0.5px solid rgba(247,249,250,0.1)',
              cursor: 'default',
            }}
          >
            {/* Index */}
            <span
              style={{
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: 11,
                color: '#af50ff',
                letterSpacing: '0.1em',
                paddingTop: 6,
              }}
            >
              {svc.index}
            </span>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Inter', 'Geist', sans-serif",
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#f7f9fa',
                margin: 0,
                whiteSpace: 'pre-line',
              }}
            >
              {svc.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Inter', 'Geist', sans-serif",
                fontSize: 15,
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#828384',
                margin: 0,
              }}
            >
              {svc.description}
            </p>

            {/* Tags */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                alignItems: 'flex-end',
              }}
            >
              {svc.tags.map((tag, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    fontSize: 10,
                    color: '#474747',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
