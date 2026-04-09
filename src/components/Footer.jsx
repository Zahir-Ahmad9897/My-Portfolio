import { DATA } from '../data/portfolio';
import Icon from '../utils/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      style={{ 
        borderTop: '1px solid rgba(255,255,255,0.06)', 
        padding: '2rem 1.5rem', 
        background: '#04060A'
      }}
    >
      <div 
        style={{ 
          maxWidth: '1150px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
        className="footer-layout"
      >
        <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
          © {currentYear} {DATA.personal.name} · Built with React & Vite
        </span>
        
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {[
            ['github', DATA.personal.github],
            ['linkedin', DATA.personal.linkedin],
            ['mail', `mailto:${DATA.personal.email}`]
          ].map(([icon, href]) => (
            <a 
              key={icon} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              style={{ 
                color: '#64748B', 
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.03)'
              }}
            >
              <Icon name={icon} size={18} />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #818CF8 !important;
          background: rgba(99,102,241,0.1) !important;
          transform: translateY(-2px);
        }
        @media (min-width: 640px) {
          .footer-layout { flex-direction: row !important; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
