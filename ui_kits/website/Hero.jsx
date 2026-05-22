const heroStyles = {
  section: {
    minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden',
    background: '#0A0A0A',
    fontFamily: "'Montserrat', sans-serif",
  },
  bgPattern: {
    position: 'absolute', inset: 0,
    background: `
      radial-gradient(circle at 20% 50%, rgba(255,184,0,0.06) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255,184,0,0.04) 0%, transparent 40%)
    `,
  },
  gridLines: {
    position: 'absolute', inset: 0, opacity: 0.04,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
  },
  content: {
    position: 'relative', zIndex: 2, textAlign: 'center',
    padding: '120px 24px 80px', maxWidth: 900, margin: '0 auto',
  },
  label: {
    fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em',
    color: '#FFB800', marginBottom: 20, display: 'block',
  },
  title: {
    fontSize: 'clamp(48px, 10vw, 96px)', fontWeight: 900, textTransform: 'uppercase',
    letterSpacing: '-0.02em', lineHeight: 0.95, color: '#fff', margin: '0 0 16px',
  },
  accent: { color: '#FFB800' },
  subtitle: {
    fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: 400, color: '#aaa',
    lineHeight: 1.6, margin: '0 0 40px', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
  },
  buttons: {
    display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
  },
  ctaPrimary: {
    background: '#FFB800', color: '#0A0A0A', border: 'none', borderRadius: 9999,
    padding: '16px 40px', fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.05em',
    cursor: 'pointer', transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
  },
  ctaSecondary: {
    background: 'transparent', color: '#FFB800', border: '2px solid #FFB800',
    borderRadius: 9999, padding: '14px 36px', fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.05em',
    cursor: 'pointer', transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
    textDecoration: 'none',
  },
  scrollHint: {
    position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
    color: '#555', fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  scrollLine: {
    width: 1, height: 40, background: 'linear-gradient(180deg, #FFB800, transparent)',
  },
};

function Hero() {
  return (
    <section id="hero" style={heroStyles.section}>
      <div style={heroStyles.bgPattern}></div>
      <div style={heroStyles.gridLines}></div>
      <div style={heroStyles.content} className="fade-in">
        <span style={heroStyles.label}>Strong Gym · Rafael Calzada</span>
        <h1 style={heroStyles.title}>
          CREZCAMOS<br /><span style={heroStyles.accent}>JUNTOS</span>
        </h1>
        <p style={heroStyles.subtitle}>
          Musculación, spinning y una comunidad real que entrena con vos.
          Profes siempre presentes. Vení a conocernos.
        </p>
        <div style={heroStyles.buttons}>
          <a style={heroStyles.ctaPrimary}
             href="https://wa.me/5491149601563?text=Hola!%20Vi%20la%20web%20de%20Strong%20Gym%20y%20quiero%20informaci%C3%B3n%20sobre%20la%20membres%C3%ADa%20libre%20%F0%9F%92%AA"
             target="_blank" rel="noopener"
             onMouseEnter={e => { e.target.style.background = '#FFCA3A'; e.target.style.transform = 'scale(1.03)'; e.target.style.boxShadow = '0 4px 24px rgba(255,184,0,0.4)'; }}
             onMouseLeave={e => { e.target.style.background = '#FFB800'; e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}>
            EMPEZÁ HOY
          </a>
          <a style={heroStyles.ctaSecondary}
             href="#activities"
             onClick={(e) => { e.preventDefault(); document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' }); }}
             onMouseEnter={e => { e.target.style.background = 'rgba(255,184,0,0.1)'; }}
             onMouseLeave={e => { e.target.style.background = 'transparent'; }}>
            VER ACTIVIDADES
          </a>
        </div>
      </div>
      <div style={heroStyles.scrollHint}>
        <span>Scroll</span>
        <div style={heroStyles.scrollLine}></div>
      </div>
    </section>
  );
}

window.Hero = Hero;