import { DATA } from '../data/portfolio';
import Icon from '../utils/icons';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="about-layout" style={{ display: 'grid', gap: '5rem', alignItems: 'start' }}>
        
        {/* Left Column: Bio, Education, Certs */}
        <div>
          <span className="section-label">About</span>
          <h2 className="section-title">Who is Zahir?</h2>
          <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            {DATA.personal.bio}
          </p>

          {/* Education Card */}
          <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', background: 'rgba(99,102,241,0.05)', borderColor: 'rgba(99,102,241,0.15)' }}>
            <div style={{ fontSize: '0.75rem', color: '#818CF8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '0.75rem' }}>
              Education
            </div>
            <div style={{ fontWeight: 600, fontSize: '1.05rem', color: '#F1F5F9', marginBottom: '4px' }}>
              {DATA.personal.degree}
            </div>
            <div style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '8px' }}>
              {DATA.personal.university}
            </div>
            <div style={{ display: 'inline-block', background: 'rgba(34,211,238,0.1)', color: '#22D3EE', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 500 }}>
              CGPA: {DATA.personal.cgpa}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {/* Certifications */}
            <div>
              <div style={{ fontSize: '0.75rem', color: '#6366F1', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>
                Certifications
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {DATA.certifications.map(cert => (
                  <div key={cert.name} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: '#FBBF24', marginTop: '2px', background: 'rgba(251,191,36,0.1)', padding: '6px', borderRadius: '8px' }}>
                      <Icon name="award" size={16} />
                    </span>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#F1F5F9' }}>{cert.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>{cert.org} · {cert.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div style={{ fontSize: '0.75rem', color: '#6366F1', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>
                Achievements
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {DATA.achievements.map((achievement, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#FBBF24', flexShrink: 0, marginTop: '3px' }}>
                      <Icon name="star" size={14} />
                    </span>
                    <span style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.5 }}>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Skills */}
        <div id="skills">
          <span className="section-label">Technical Stack</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '2.5rem' }}>
            Skills & Abilities
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {Object.entries(DATA.skills).map(([category, skills]) => (
              <div key={category}>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {category}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skills.map(skill => {
                    const skillIcons = {
                      'Python': 'python/python-original.svg',
                      'C++': 'cplusplus/cplusplus-original.svg',
                      'C': 'c/c-original.svg',
                      'PyTorch': 'pytorch/pytorch-original.svg',
                      'TensorFlow': 'tensorflow/tensorflow-original.svg',
                      'Keras': 'keras/keras-original.svg',
                      'Scikit-learn': 'scikitlearn/scikitlearn-original.svg',
                      'OpenCV': 'opencv/opencv-original.svg',
                      'Flask': 'flask/flask-original.svg',
                      'Pandas': 'pandas/pandas-original.svg',
                      'NumPy': 'numpy/numpy-original.svg',
                      'Matplotlib': 'matplotlib/matplotlib-original.svg',
                      'SQLite': 'sqlite/sqlite-original.svg',
                      'MySQL': 'mysql/mysql-original.svg',
                      'Git': 'git/git-original.svg',
                      'GitHub': 'github/github-original.svg',
                      'VS Code': 'vscode/vscode-original.svg',
                      'Jupyter': 'jupyter/jupyter-original.svg',
                      'Raspberry Pi': 'raspberrypi/raspberrypi-original.svg',
                      'Arduino': 'arduino/arduino-original.svg',
                      'Streamlit': '#FF4B4B',
                      'Google Colab': '#F9AB00',
                      'ArcFace': '#818CF8',
                      'YOLOv11': '#00FFFF',
                      'YOLOv5': '#00FFFF'
                    };
                    const iconInfo = skillIcons[skill];
                    const isSvg = iconInfo && iconInfo.endsWith('.svg');

                    return (
                      <span 
                        key={skill} 
                        className="skill-tag"
                        style={{ 
                          background: 'rgba(255,255,255,0.03)', 
                          border: '1px solid rgba(255,255,255,0.08)', 
                          color: '#E2E8F0', 
                          padding: '6px 14px', 
                          borderRadius: '8px', 
                          fontSize: '0.85rem', 
                          transition: 'all 0.2s',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'default'
                        }}
                      >
                        {isSvg ? (
                          <img 
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconInfo}`} 
                            alt={skill} 
                            style={{ width: '16px', height: '16px', filter: skill === 'GitHub' ? 'invert(1)' : 'none' }} 
                            loading="lazy"
                          />
                        ) : iconInfo ? (
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: iconInfo }} />
                        ) : null}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Extra generic box */}
          <div className="glass-card" style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(34,211,238,0.05)', borderColor: 'rgba(34,211,238,0.15)' }}>
            <div style={{ fontSize: '0.75rem', color: '#22D3EE', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '1rem' }}>
              Languages & Interests
            </div>
            <div style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '0.5rem' }}>
              <strong style={{ color: '#F1F5F9', fontWeight: 500 }}>Spoken:</strong> English · Urdu · Pashto
            </div>
            <div style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
              <strong style={{ color: '#F1F5F9', fontWeight: 500 }}>Interests:</strong> VLMs · Agentic AI · Open Source · Technical Blogging
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .skill-tag:hover {
          background: rgba(99,102,241,0.15) !important;
          border-color: rgba(99,102,241,0.4) !important;
          color: #818CF8 !important;
          transform: translateY(-2px);
        }
        @media (min-width: 992px) {
          .about-layout { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  );
}
