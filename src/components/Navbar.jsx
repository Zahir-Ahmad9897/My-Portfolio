import { useState, useEffect } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import Icon from '../utils/icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['hero', 'projects', 'about', 'contact']);

  const links = ['About', 'Projects', 'Skills', 'Contact'];

  // Handle scroll detection for background blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
        background: isScrolled ? 'rgba(8,12,20,0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: '1.4rem',
          color: '#818CF8',
          letterSpacing: '-0.5px',
          textDecoration: 'none',
        }}
      >
        ZA
      </a>

      {/* Desktop Links */}
      <div
        style={{
          display: 'none',
          gap: '2.5rem',
        }}
        className="nav-desktop"
      >
        {links.map((link) => {
          const id = link.toLowerCase();
          const isActive = activeSection === id || (id === 'skills' && activeSection === 'about');
          return (
            <a
              key={link}
              href={`#${id}`}
              style={{
                color: isActive ? '#818CF8' : '#94A3B8',
                fontSize: '0.85rem',
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = '#F1F5F9';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = '#94A3B8';
              }}
            >
              {link}
            </a>
          );
        })}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        style={{
          display: 'block',
          background: 'none',
          border: 'none',
          color: '#F1F5F9',
          cursor: 'pointer',
        }}
        className="nav-mobile-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <Icon name="close" size={24} /> : <Icon name="menu" size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(8,12,20,0.98)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          }}
        >
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id || (id === 'skills' && activeSection === 'about');
            return (
              <a
                key={link}
                href={`#${id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: isActive ? '#818CF8' : '#F1F5F9',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}

      {/* Responsive Styles Injection */}
      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
