import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    index: '01',
    label: 'DISCOVERY',
    title: 'We listen before we sketch.',
    body: 'Every project starts with deep listening. We dissect your brief, your brand, and the behaviour of your audience. The strategy that emerges here shapes every pixel that follows.',
  },
  {
    index: '02',
    label: 'DIRECTION',
    title: 'One bold creative direction.',
    body: 'We don\'t show you three options and let you cherry-pick. We commit to a single, strong creative direction and present it with conviction. You hire experts — let us be experts.',
  },
  {
    index: '03',
    label: 'CRAFT',
    title: 'Code meets choreography.',
    body: 'Design and development run in parallel. GSAP animations are storyboarded alongside wireframes. The result is a site that is engineered to feel alive, not animated as an afterthought.',
  },
  {
    index: '04',
    label: 'SHIP',
    title: 'Launched. Measured. Iterated.',
    body: 'We deploy on your chosen stack, monitor Core Web Vitals, and stay on for a 30-day post-launch window. Good work doesn\'t end at handoff.',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-heading',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.process-heading', start: 'top 82%' },
        }
      );

      // Step connectors animate in
      gsap.fromTo(
        '.step-connector',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          transformOrigin: 'top',
          scrollTrigger: { trigger: '.process-steps', start: 'top 75%' },
        }
      );

      gsap.fromTo(
        '.process-step',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: { trigger: '.process-steps', start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{
        background: '#090909',
        padding: '120px 0',
        borderTop: '0.5px solid rgba(247,249,250,0.06)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <div
          className="process-heading"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            marginBottom: 96,
            alignItems: 'end',
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
                marginBottom: 24,
              }}
            >
              How we work
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
              Process
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Inter', 'Geist', sans-serif",
              fontSize: 18,
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#828384',
              margin: 0,
            }}
          >
            Four phases. No surprises. Every project moves from clarity to craft to shipping
            in a structure that keeps you informed and in control, without slowing us down.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps" style={{ position: 'relative' }}>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div
                className="process-step"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 200px 1fr',
                  gap: 40,
                  padding: '40px 0',
                  alignItems: 'start',
                  borderBottom:
                    i < steps.length - 1
                      ? '0.5px solid rgba(247,249,250,0.06)'
                      : 'none',
                }}
              >
                {/* Index + connector */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                      fontSize: 11,
                      color: '#af50ff',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {step.index}
                  </span>
                  {i < steps.length - 1 && (
                    <div
                      className="step-connector"
                      style={{
                        width: 0.5,
                        background: 'linear-gradient(to bottom, #af50ff, transparent)',
                        flexGrow: 1,
                        marginTop: 16,
                        minHeight: 40,
                      }}
                    />
                  )}
                </div>

                {/* Label */}
                <div style={{ paddingTop: 4 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      color: '#474747',
                      textTransform: 'uppercase',
                    }}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Inter', 'Geist', sans-serif",
                      fontSize: 'clamp(22px, 2.5vw, 36px)',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      color: '#f7f9fa',
                      margin: '0 0 20px 0',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', 'Geist', sans-serif",
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: '#828384',
                      margin: 0,
                      maxWidth: 560,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
