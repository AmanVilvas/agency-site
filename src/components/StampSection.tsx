import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Horizontal scrolling stamp section — text fills the viewport width
const STAMP_WORDS = ['GSAP', 'WEBGL', 'MOTION', 'AWWWARDS', 'FWA', 'CRAFT'];

export default function StampSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sectionRef.current?.querySelectorAll('.stamp-word');
      if (!words) return;

      words.forEach((word, i) => {
        gsap.fromTo(
          word,
          { opacity: 0, y: 60 },
          {
            opacity: i % 2 === 0 ? 1 : 0.15,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: i * 0.06,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#090909',
        padding: '80px 0',
        overflow: 'hidden',
        borderTop: '0.5px solid rgba(247,249,250,0.06)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0 32px',
          padding: '0 40px',
          maxWidth: 1200,
          margin: '0 auto',
          alignItems: 'baseline',
        }}
      >
        {STAMP_WORDS.map((word, i) => (
          <React.Fragment key={i}>
            <span
              className="stamp-word"
              style={{
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: 'clamp(40px, 8vw, 96px)',
                fontWeight: 400,
                letterSpacing: '0.08em',
                color: '#f0f0f0',
                textTransform: 'uppercase',
                lineHeight: 0.95,
                display: 'inline-block',
              }}
            >
              {word}
            </span>
            {i < STAMP_WORDS.length - 1 && (
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: 'clamp(20px, 4vw, 40px)',
                  color: '#af50ff',
                  lineHeight: 0.95,
                }}
              >
                ·
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
