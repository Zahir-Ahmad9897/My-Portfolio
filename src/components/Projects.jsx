import { useState, useMemo } from 'react';
import { DATA } from '../data/portfolio';

const CAT_COLORS = { 
  'Computer Vision': '#22D3EE', 
  'NLP': '#818CF8',
  'Data Science': '#34D399',
  'Gen AI': '#FBBF24'
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  // Dynamically get unique categories from the data
  const categories = useMemo(() => {
    const cats = new Set(DATA.projects.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Memoize filtered projects to prevent unnecessary recalculations
  const filteredProjects = useMemo(() => {
    return filter === 'All' ? DATA.projects : DATA.projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="section-container">
      <span className="section-label">Portfolio</span>
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Production-grade AI systems spanning Computer Vision and Natural Language Processing.
      </p>

      {/* Filter Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              background: filter === cat ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${filter === cat ? 'rgba(99,102,241,0.5)' : 'rgba(255,255,255,0.07)'}`,
              color: filter === cat ? '#818CF8' : '#94A3B8',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (filter !== cat) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = '#F1F5F9';
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== cat) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.color = '#94A3B8';
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '1.5rem' 
        }}
      >
        {filteredProjects.map((project, index) => {
          const catColor = CAT_COLORS[project.category] || '#818CF8';
          
          return (
            <div 
              key={project.id} 
              className="glass-card project-card animate-fade-in"
              style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden', animationDelay: `${index * 0.1}s` }}
            >
              {/* Top Accent Line */}
              <div 
                style={{ 
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: `linear-gradient(90deg, ${catColor}, transparent)` 
                }} 
              />
              
              <div style={{ fontSize: '0.75rem', color: catColor, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>
                {project.category}
              </div>
              
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                {project.title}
              </h3>
              
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {project.description}
              </p>
              
              <ul style={{ listStyle: 'none', marginBottom: '1.5rem', flexGrow: 1 }}>
                {project.highlights.map((highlight, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: '#64748B', padding: '3px 0', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: catColor, marginTop: '-2px' }}>›</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    style={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#94A3B8', 
                      padding: '4px 12px', 
                      borderRadius: '6px', 
                      fontSize: '0.75rem' 
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .project-card:hover {
          border-color: rgba(99,102,241,0.4);
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
}
