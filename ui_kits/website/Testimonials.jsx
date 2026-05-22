const testStyles = {
  section: {
    padding: '96px 24px', background: '#0A0A0A',
    fontFamily: "'Montserrat', sans-serif",
  },
  inner: { maxWidth: 1200, margin: '0 auto' },
  label: {
    fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em',
    color: '#FFB800', marginBottom: 12,
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, textTransform: 'uppercase',
    letterSpacing: '-0.02em', lineHeight: 1, color: '#fff', margin: '0 0 48px',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 24,
  },
  card: {
    background: '#1A1A1A', borderRadius: 12, padding: '32px 28px',
    border: '1px solid #2A2A2A', display: 'flex', flexDirection: 'column', gap: 16,
    position: 'relative',
  },
  quote: {
    position: 'absolute', top: 20, right: 24, fontSize: 48, fontWeight: 900,
    color: 'rgba(255,184,0,0.1)', lineHeight: 1, userSelect: 'none',
  },
  text: {
    fontSize: 15, fontWeight: 400, color: '#ccc', lineHeight: 1.7,
    fontStyle: 'italic', margin: 0, position: 'relative',
  },
  author: {
    display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto',
  },
  avatar: {
    width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,184,0,0.1)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 16, fontWeight: 700, color: '#FFB800',
  },
  authorInfo: { display: 'flex', flexDirection: 'column' },
  authorName: { fontSize: 13, fontWeight: 700, color: '#fff' },
  authorSub: { fontSize: 11, fontWeight: 500, color: '#888' },
};

function Testimonials() {
  const testimonials = [
    {
      text: 'Gym Strong es mí lugar en el mundo.',
      name: 'Fernando Cerdan',
      sub: 'Reseña de Google',
      initial: 'F',
    },
    {
      text: 'Buenas maquinas! Lucas y lean unos genios en los personalizados',
      name: 'Hernan Estiene',
      sub: 'Reseña de Google',
      initial: 'H',
    },
    {
      text: 'Tremendo gym, sergio es un crack 💪🏽',
      name: 'Mateo Parma',
      sub: 'Reseña de Google',
      initial: 'M',
    },
  ];

  return (
    <section id="testimonials" style={testStyles.section}>
      <div style={testStyles.inner} className="fade-in">
        <div style={testStyles.label}>Comunidad</div>
        <h2 style={testStyles.title}>LO QUE DICEN</h2>
        <div style={testStyles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} style={testStyles.card}>
              <span style={testStyles.quote}>"</span>
              <p style={testStyles.text}>{t.text}</p>
              <div style={testStyles.author}>
                <div style={testStyles.avatar}>{t.initial}</div>
                <div style={testStyles.authorInfo}>
                  <span style={testStyles.authorName}>{t.name}</span>
                  <span style={testStyles.authorSub}>{t.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;