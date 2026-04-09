import { DATA } from '../data/portfolio';

const KEYWORDS = {
  projects: ['project', 'built', 'created', 'developed', 'work', 'portfolio', 'system', 'detection', 'recognition', 'sentiment', 'prediction', 'summarizer', 'pipeline'],
  skills: ['skill', 'know', 'technology', 'stack', 'use', 'experience', 'python', 'pytorch', 'opencv', 'yolo', 'framework', 'language', 'tools'],
  contact: ['contact', 'reach', 'email', 'hire', 'available', 'freelance', 'recruit', 'connect', 'work together'],
  bio: ['about', 'who', 'background', 'story', 'person', 'zahir', 'summary', 'introduce'],
  certifications: ['certification', 'certificate', 'course', 'bootcamp', 'workshop', 'giki', 'udemy'],
  achievements: ['achievement', 'topper', 'award', 'merit', 'school', 'college', 'academic', 'result'],
  education: ['degree', 'university', 'uet', 'mardan', 'cgpa', 'gpa', 'study', 'student'],
};

const QUICK_RESPONSES = {
  hire: `Zahir is actively open to freelance and contract AI/CV projects. You can reach him directly at ${DATA.personal.email} or on LinkedIn.`,
  contact: `You can reach Zahir at ${DATA.personal.email} or via LinkedIn at ${DATA.personal.linkedin}. He's based in ${DATA.personal.location}.`,
  skills: `Zahir's core strengths: Python · PyTorch · TensorFlow · Computer Vision (YOLO, ArcFace, OpenCV) · Edge AI deployment on Raspberry Pi & Jetson Nano · Flask · Streamlit. He's a strong hands-on engineer — shipping systems, not just notebooks.`,
  projects: `Zahir has built 5 production-grade projects:\n\n1. Face Recognition Attendance System (99% accuracy, ArcFace, edge deploy)\n2. Object Detection & Segmentation Pipeline (YOLOv11 + UNet)\n3. Movie Review Sentiment Analyzer (85%+ accuracy, 50K IMDB)\n4. Next Word Prediction System (LSTM/GRU, Shakespeare corpus)\n5. AI Research Paper Summarizer (FastAPI + Groq LLM + arXiv API)\n\nAsk me about any one of them!`,
  hello: `Hi! 👋 I'm Zahir's AI assistant. Ask me about his projects, skills, experience, or how to hire him.`,
  hi: `Hello! 👋 I'm here to tell you all about Zahir Ahmad — an AI & Computer Vision Engineer. What would you like to know?`,
};

function scoreKeywords(query) {
  const q = query.toLowerCase();
  const scored = [];
  for (const [section, kws] of Object.entries(KEYWORDS)) {
    const score = kws.filter(k => q.includes(k)).length;
    if (score > 0) scored.push({ section, score });
  }
  return scored.sort((a, b) => b.score - a.score);
}

export function retrieve(query) {
  const q = query.toLowerCase().trim();
  if (!q) return QUICK_RESPONSES.hello;

  // Greetings
  if (/^(hi|hello|hey|howdy|sup|greetings)[\s!?]*$/.test(q)) return QUICK_RESPONSES.hi;

  // FAQ exact-ish match
  for (const faq of DATA.faqs) {
    const keywords = faq.q.toLowerCase().split(' ').filter(w => w.length > 4);
    const matchCount = keywords.filter(k => q.includes(k)).length;
    if (matchCount >= 2) return faq.a;
  }

  // Quick keyword shortcuts
  for (const [key, response] of Object.entries(QUICK_RESPONSES)) {
    if (q.includes(key)) return response;
  }

  // Scored section retrieval
  const scored = scoreKeywords(q);
  const top = scored.slice(0, 3).map(s => s.section);
  const parts = [];

  if (top.includes('bio') || top.length === 0) {
    parts.push(DATA.personal.bio);
  }
  if (top.includes('skills')) {
    const skillLines = Object.entries(DATA.skills)
      .map(([cat, items]) => `${cat}: ${items.join(', ')}`)
      .join('\n');
    parts.push(`Technical Skills:\n${skillLines}`);
  }
  if (top.includes('projects')) {
    parts.push(
      DATA.projects
        .map(p => `📌 ${p.title} (${p.category})\n${p.description}\nHighlights: ${p.highlights.join('; ')}`)
        .join('\n\n')
    );
  }
  if (top.includes('contact')) {
    parts.push(
      `📧 Email: ${DATA.personal.email}\n🔗 LinkedIn: ${DATA.personal.linkedin}\n📍 Location: ${DATA.personal.location}`
    );
  }
  if (top.includes('certifications')) {
    parts.push(
      'Certifications:\n' + DATA.certifications.map(c => `• ${c.name} — ${c.org} (${c.year})`).join('\n')
    );
  }
  if (top.includes('achievements')) {
    parts.push('Achievements:\n' + DATA.achievements.map(a => `🏆 ${a}`).join('\n'));
  }
  if (top.includes('education')) {
    parts.push(
      `Education: ${DATA.personal.degree} at ${DATA.personal.university}. CGPA: ${DATA.personal.cgpa}`
    );
  }

  return parts.length > 0
    ? parts.join('\n\n')
    : `I can tell you about Zahir's projects, skills, certifications, or how to contact him. What are you curious about?`;
}
