import { useEffect, useState } from 'react';
import { DATA } from '../data/portfolio';
import Icon from '../utils/icons';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay for smooth load-in effect
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decor */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '15%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 60%)' }} />
        
        {/* Grid pattern overlay */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.02 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '3rem', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%' }} className="hero-layout">
          
          {/* Main Text Content */}
          <div style={{ flex: 1, maxWidth: '650px' }}>
            
            {/* Availability Badge */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.25)',
                borderRadius: '999px',
                padding: '6px 16px',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399', animation: 'pulseGlow 2s infinite' }} />
              <span style={{ fontSize: '0.75rem', color: '#818CF8', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                Available for hire
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-2px',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #FFF 20%, #818CF8 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {DATA.personal.name}
            </h1>

            {/* Role */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
                fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                color: '#94A3B8',
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ color: '#22D3EE', fontWeight: 500 }}>{DATA.personal.role}</span>
              {' '}· Edge AI · Deep Learning
            </div>

            {/* Tagline */}
            <p
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                fontSize: '1.05rem',
                color: '#64748B',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '2.5rem',
              }}
            >
              {DATA.personal.tagline} Specializing in production-ready CV systems, PyTorch, YOLO, and edge deployment.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <a
                href="#projects"
                className="primary-btn"
                style={{
                  background: 'linear-gradient(135deg, #6366F1, #818CF8)',
                  color: '#FFF',
                  padding: '12px 28px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
                  transition: 'all 0.2s',
                }}
              >
                View Projects
              </a>
              <a
                href={DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.03)',
                  color: '#F1F5F9',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                <Icon name="github" size={18} />
                GitHub
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
              position: 'relative',
            }}
            className="hero-image-container"
          >
            <div
              style={{
                position: 'absolute',
                inset: '-15px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0,
              }}
            />
            <img
              src="/profile.jpg"
              alt="Zahir Ahmad"
              style={{
                width: 'clamp(180px, 40vw, 280px)',
                height: 'clamp(180px, 40vw, 280px)',
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '50%',
                border: '2px solid rgba(129,140,248,0.3)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </div>

        </div>

        {/* Stats Row */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(1.5rem, 5vw, 4rem)',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {DATA.stats.map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2rem', color: '#F1F5F9', lineHeight: 1 }}>
                {stat.value}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .primary-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(99,102,241,0.4) !important; filter: brightness(1.1); }
        .outline-btn:hover { background: rgba(255,255,255,0.08) !important; border-color: rgba(255,255,255,0.2) !important; transform: translateY(-2px); }
        
        @media (min-width: 768px) {
          .hero-layout { flex-direction: row !important; align-items: center !important; }
        }
      `}</style>
    </section>
  );
}
