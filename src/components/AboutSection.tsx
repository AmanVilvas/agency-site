import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const marqueeItems = [
  'GSAP', '·', 'AWWWARDS', '·', 'WEBGL', '·', 'THREE.JS', '·', 'FWA', '·',
  'MOTION', '·', 'EDITORIAL', '·', 'INTERACTIVE', '·', 'PREMIUM', '·',
];

const stats = [
  { value: '47+', label: 'Projects Delivered' },
  { value: '12', label: 'Awwwards Won' },
  { value: '6yr', label: 'In the Industry' },
  { value: '100%', label: 'Client Retention' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee infinite scroll
      if (marqueeRef.current) {
        const items = marqueeRef.current.querySelectorAll('.marquee-track');
        gsap.to(items, {
          x: '-50%',
          duration: 20,
          ease: 'none',
          repeat: -1,
        });
      }

      // Stats count up
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.stats-row', start: 'top 80%' },
        }
      );

      // Body text reveal
      gsap.fromTo(
        '.about-body',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about-body', start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ background: '#090909', padding: '120px 0 0' }}
    >
      {/* Marquee */}
      <div
        style={{
          overflow: 'hidden',
          borderTop: '0.5px solid rgba(247,249,250,0.08)',
          borderBottom: '0.5px solid rgba(247,249,250,0.08)',
          padding: '18px 0',
          marginBottom: 120,
        }}
      >
        <div ref={marqueeRef} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {/* Two copies for seamless loop */}
          <div
            className="marquee-track"
            style={{ display: 'flex', gap: 32, paddingRight: 32 }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  color: item === '·' ? '#af50ff' : '#474747',
                  textTransform: 'uppercase',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        {/* Label */}
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
          Who we are
        </p>

        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Left — big heading */}
          <div>
            <h2
              style={{
                fontFamily: "'Inter', 'Geist', sans-serif",
                fontSize: 'clamp(40px, 5vw, 72px)',
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#f7f9fa',
                margin: '0 0 48px 0',
              }}
            >
              We make the internet more beautiful,{' '}
              <em style={{ fontStyle: 'italic', color: '#828384' }}>one pixel at a time.</em>
            </h2>

            {/* Stats */}
            <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <p
                    style={{
                      fontFamily: "'Inter', 'Geist', sans-serif",
                      fontSize: 'clamp(32px, 4vw, 56px)',
                      fontWeight: 300,
                      letterSpacing: '-0.03em',
                      color: '#f7f9fa',
                      lineHeight: 1,
                      margin: '0 0 8px 0',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                      fontSize: 10,
                      letterSpacing: '0.12em',
                      color: '#474747',
                      textTransform: 'uppercase',
                      margin: 0,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — body text + violet bloom card */}
          <div className="about-body">
            <p
              style={{
                fontFamily: "'Inter', 'Geist', sans-serif",
                fontSize: 18,
                fontWeight: 300,
                lineHeight: 1.7,
                color: '#828384',
                marginBottom: 48,
              }}
            >
              We are Kapoor Designs — a small, obsessive studio that builds award-winning
              digital experiences. No bloated teams, no cookie-cutter templates. Just
              precision code, obsessive craft, and the kind of work that earns a
              screenshot.
            </p>

            {/* Violet bloom CTA card */}
            <div
              style={{
                background: '#af50ff',
                borderRadius: 19.2,
                padding: 40,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Radial bloom */}
              <div
                style={{
                  position: 'absolute',
                  top: -60,
                  right: -60,
                  width: 240,
                  height: 240,
                  background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <p
                style={{
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  color: 'rgba(255,255,255,0.6)',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                Ready to build?
              </p>
              <h3
                style={{
                  fontFamily: "'Inter', 'Geist', sans-serif",
                  fontSize: 32,
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: '#fff',
                  margin: '0 0 24px 0',
                }}
              >
                Start a project with us today.
              </h3>
              <button
                style={{
                  background: '#090909',
                  color: '#f7f9fa',
                  border: '0.5px solid rgba(247,249,250,0.3)',
                  borderRadius: 8,
                  padding: '14px 24px',
                  fontFamily: "'Inter', 'Geist', sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: 'pointer',
                  letterSpacing: '0.01em',
                }}
              >
                Book a call →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
