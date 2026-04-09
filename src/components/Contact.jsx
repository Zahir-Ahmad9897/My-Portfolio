import { DATA } from '../data/portfolio';
import Icon from '../utils/icons';

export default function Contact() {
  const links = [
    { icon: 'mail', label: DATA.personal.email, href: `mailto:${DATA.personal.email}` },
    { icon: 'linkedin', label: 'linkedin.com/in/zahir-ahmad9897', href: DATA.personal.linkedin },
    { icon: 'github', label: 'github.com/Zahir-Ahmad9897', href: DATA.personal.github },
    { icon: 'location', label: DATA.personal.location },
  ];

  return (
    <section id="contact" className="section-container" style={{ paddingBottom: '8rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <span className="section-label" style={{ display: 'inline-block' }}>Get in Touch</span>
        <h2 className="section-title">Let's build something</h2>
        <p className="section-subtitle" style={{ margin: '0 auto 3rem auto' }}>
          Currently open for freelance projects, contract roles, and full-time opportunities in AI, Computer Vision, and Software Engineering.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', textAlign: 'left' }}>
          {links.map(({ icon, label, href }) => (
            <div 
              key={label}
              className="glass-card contact-card"
              style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '14px' }}
            >
              <span style={{ color: '#818CF8', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(99,102,241,0.1)', width: '40px', height: '40px', borderRadius: '10px' }}>
                <Icon name={icon} size={20} />
              </span>
              
              {href ? (
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#E2E8F0', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                >
                  {label}
                </a>
              ) : (
                <span style={{ color: '#94A3B8', fontSize: '0.9rem', fontWeight: 500 }}>
                  {label}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* AI Callout */}
        <div 
          style={{ 
            marginTop: '4rem', 
            padding: '2.5rem 2rem', 
            background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(34,211,238,0.04))', 
            border: '1px solid rgba(99,102,241,0.15)', 
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', filter: 'blur(20px)' }} />
          
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: '#F1F5F9' }}>
            Have a specific question?
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '400px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
            Chat with my AI assistant to learn more about my skills, experience, or availability instantly.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(34,211,238,0.1)', color: '#22D3EE', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 500 }}>
            ↘ Click the chat icon in the bottom right corner
          </div>
        </div>
      </div>

      <style>{`
        .contact-card:hover {
          border-color: rgba(99,102,241,0.3);
          background: rgba(99,102,241,0.05);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
