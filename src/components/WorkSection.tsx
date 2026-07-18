import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    id: '01',
    client: 'Nomad Studios',
    title: 'The Weight of Light',
    category: 'WebGL Experience',
    year: '2025',
    award: 'Awwwards SOTD',
    description: 'A scroll-driven visual poem about architecture and shadow.',
    color: '#1a1a2e',
    accentColor: '#af50ff',
    gradient: 'radial-gradient(ellipse at 30% 50%, rgba(175,80,255,0.25) 0%, #0d0d1a 70%)',
  },
  {
    id: '02',
    client: 'Reverie Labs',
    title: 'Cortex OS',
    category: 'Product Design',
    year: '2025',
    award: 'FWA of the Day',
    description: 'Neuro-interface operating system for a startup redefining cognitive tools.',
    color: '#0a0e1a',
    accentColor: '#50c8ff',
    gradient: 'radial-gradient(ellipse at 70% 40%, rgba(80,200,255,0.2) 0%, #080a14 70%)',
  },
  {
    id: '03',
    client: 'Epoch Magazine',
    title: 'Stories in Motion',
    category: 'Editorial Campaign',
    year: '2024',
    award: 'CSS Design Awards',
    description: 'Interactive long-form storytelling for a global culture magazine.',
    color: '#0f0a00',
    accentColor: '#ffb84d',
    gradient: 'radial-gradient(ellipse at 50% 60%, rgba(255,184,77,0.18) 0%, #0a0800 70%)',
  },
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.work-label',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.work-label', start: 'top 85%' },
        }
      );

      gsap.fromTo(
        '.work-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: { trigger: '.work-grid', start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleHover = (e: React.MouseEvent<HTMLDivElement>, enter: boolean) => {
    const card = e.currentTarget;
    gsap.to(card, {
      y: enter ? -8 : 0,
      duration: 0.4,
      ease: 'power2.out',
    });
    const arrow = card.querySelector('.work-arrow');
    if (arrow) {
      gsap.to(arrow, {
        opacity: enter ? 1 : 0,
        x: enter ? 0 : -8,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      style={{ background: '#090909', padding: '120px 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <div
          className="work-label"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 64,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: 10,
                letterSpacing: '0.18em',
                color: '#828384',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Selected work
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
              Work
            </h2>
          </div>
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: "'Inter', 'Geist', sans-serif",
              fontSize: 13,
              color: '#828384',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              paddingBottom: 4,
              borderBottom: '0.5px solid rgba(130,131,132,0.4)',
              transition: 'color 0.3s',
            }}
          >
            View all projects <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Cards grid */}
        <div
          className="work-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: 16,
          }}
        >
          {/* Large featured card */}
          <div
            className="work-card"
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            style={{
              gridRow: '1 / 3',
              background: works[0].gradient,
              borderRadius: 19.2,
              padding: 40,
              border: '0.5px solid rgba(247,249,250,0.08)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 520,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: 10,
                  color: '#af50ff',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {works[0].award}
              </span>
              <ArrowUpRight
                className="work-arrow"
                size={20}
                color="#f7f9fa"
                style={{ opacity: 0, transform: 'translateX(-8px)' }}
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: 10,
                  color: '#474747',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                {works[0].client} — {works[0].year}
              </p>
              <h3
                style={{
                  fontFamily: "'Inter', 'Geist', sans-serif",
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#f7f9fa',
                  margin: '0 0 16px 0',
                }}
              >
                {works[0].title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', 'Geist', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#828384',
                  margin: 0,
                }}
              >
                {works[0].description}
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  marginTop: 24,
                  padding: '6px 14px',
                  border: '0.5px solid rgba(175,80,255,0.4)',
                  borderRadius: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    fontSize: 10,
                    color: '#af50ff',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {works[0].category}
                </span>
              </div>
            </div>
          </div>

          {/* Smaller cards */}
          {works.slice(1).map((work, i) => (
            <div
              key={i}
              className="work-card"
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
              style={{
                background: work.gradient,
                borderRadius: 19.2,
                padding: 40,
                border: '0.5px solid rgba(247,249,250,0.08)',
                cursor: 'pointer',
                position: 'relative',
                minHeight: 240,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    fontSize: 10,
                    color: work.accentColor,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {work.award}
                </span>
                <ArrowUpRight
                  className="work-arrow"
                  size={16}
                  color="#f7f9fa"
                  style={{ opacity: 0, transform: 'translateX(-8px)' }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    fontSize: 10,
                    color: '#474747',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  {work.client}
                </p>
                <h3
                  style={{
                    fontFamily: "'Inter', 'Geist', sans-serif",
                    fontSize: 'clamp(20px, 2.5vw, 32px)',
                    fontWeight: 300,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#f7f9fa',
                    margin: 0,
                  }}
                >
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
