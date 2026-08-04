const priceStyles = {
  section: {
    padding: '96px 24px', background: '#1A1A1A',
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
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 24, alignItems: 'stretch',
  },
  card: {
    background: '#0A0A0A', borderRadius: 16, padding: '40px 28px',
    border: '1px solid #2A2A2A', position: 'relative', overflow: 'hidden',
    textAlign: 'center', display: 'flex', flexDirection: 'column',
  },
  cardFeatured: {
    border: '2px solid #FFB800',
  },
  cardAccent: {
    background: '#FFB800', border: '2px solid #FFB800',
  },
  glow: {
    position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
    width: 260, height: 120, borderRadius: '50%',
    background: 'rgba(255,184,0,0.12)', filter: 'blur(60px)',
    pointerEvents: 'none',
  },
  badge: {
    display: 'inline-block', background: '#FFB800', color: '#0A0A0A',
    fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
    padding: '6px 16px', borderRadius: 9999, marginBottom: 20,
    position: 'relative', alignSelf: 'center',
  },
  badgeAccent: {
    background: '#0A0A0A', color: '#FFB800',
  },
  planName: {
    fontSize: 22, fontWeight: 900, textTransform: 'uppercase', color: '#fff',
    margin: '0 0 8px', letterSpacing: '-0.01em', position: 'relative',
  },
  planNameAccent: { color: '#0A0A0A' },
  planDesc: {
    fontSize: 13, color: '#888', margin: '0 0 24px', lineHeight: 1.5,
    position: 'relative', minHeight: 40,
  },
  planDescAccent: { color: 'rgba(10,10,10,0.7)' },
  price: {
    fontSize: 40, fontWeight: 900, color: '#FFB800', lineHeight: 1,
    margin: '0 0 4px', position: 'relative',
  },
  priceAccent: { color: '#0A0A0A' },
  period: {
    fontSize: 13, fontWeight: 600, color: '#888', margin: '0 0 28px',
    position: 'relative',
  },
  periodAccent: { color: 'rgba(10,10,10,0.6)' },
  features: {
    listStyle: 'none', margin: '0 0 28px', padding: 0,
    display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left',
    position: 'relative', flexGrow: 1,
  },
  feature: {
    fontSize: 13, fontWeight: 500, color: '#ccc', display: 'flex', alignItems: 'flex-start', gap: 10,
  },
  featureAccent: { color: 'rgba(10,10,10,0.85)' },
  check: { color: '#FFB800', fontSize: 15, fontWeight: 700 },
  checkAccent: { color: '#0A0A0A' },
  cta: {
    background: '#FFB800', color: '#0A0A0A', border: 'none', borderRadius: 9999,
    padding: '14px 24px', fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em',
    cursor: 'pointer', transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, position: 'relative',
  },
  ctaAccent: {
    background: '#0A0A0A', color: '#FFB800',
  },
};

function Pricing() {
  const plans = [
    {
      name: 'Musculación 2x',
      desc: 'Entrenamiento con pesas libres y máquinas, 2 días por semana.',
      price: '$40.000',
      features: ['Acceso 2 días por semana', 'Seguimiento de profes', 'Lun a Vie 07:30–22:00', 'Sáb 09:00–13:30'],
      wa: 'Musculación 2x por semana',
    },
    {
      name: 'Musculación 3x',
      desc: 'Entrenamiento con pesas libres y máquinas, 3 días por semana.',
      price: '$43.000',
      features: ['Acceso 3 días por semana', 'Seguimiento de profes', 'Lun a Vie 07:30–22:00', 'Sáb 09:00–13:30'],
      wa: 'Musculación 3x por semana',
    },
    {
      name: 'Musculación Libre',
      desc: 'Acceso completo a musculación en todos los horarios.',
      price: '$45.000',
      badge: 'Más elegido',
      featured: true,
      features: ['Musculación ilimitada', 'Seguimiento de profes', 'Lun a Vie 07:30–22:00', 'Sáb 09:00–13:30'],
      wa: 'Musculación Libre',
    },
    {
      name: 'Musculación + Cardio',
      desc: 'Musculación libre más una actividad de cardio a elección.',
      price: '$50.000',
      badge: 'Opción extra',
      accent: true,
      features: ['Musculación ilimitada', 'Suma 1 clase de cardio a elección', 'Zumba, Fight.Do o Spinning'],
      wa: 'Musculación + Cardio (Zumba/Fight.Do/Spinning)',
    },
  ];

  const waLink = (planName) => {
    const text = `Hola! Vi la web de Strong Gym y quiero información sobre el plan ${planName} 💪`;
    return `https://wa.me/5491149601563?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" style={priceStyles.section}>
      <div style={priceStyles.inner} className="fade-in">
        <div style={priceStyles.label}>Invertí en vos</div>
        <h2 style={priceStyles.title}>NUESTROS PLANES</h2>
        <div style={priceStyles.grid}>
          {plans.map((p, i) => (
            <div key={i} style={{
              ...priceStyles.card,
              ...(p.featured ? priceStyles.cardFeatured : {}),
              ...(p.accent ? priceStyles.cardAccent : {}),
            }}>
              {p.featured && <div style={priceStyles.glow}></div>}
              {p.badge && (
                <span style={{ ...priceStyles.badge, ...(p.accent ? priceStyles.badgeAccent : {}) }}>{p.badge}</span>
              )}
              <h3 style={{ ...priceStyles.planName, ...(p.accent ? priceStyles.planNameAccent : {}) }}>{p.name}</h3>
              <p style={{ ...priceStyles.planDesc, ...(p.accent ? priceStyles.planDescAccent : {}) }}>{p.desc}</p>
              <div style={{ ...priceStyles.price, ...(p.accent ? priceStyles.priceAccent : {}) }}>{p.price}</div>
              <div style={{ ...priceStyles.period, ...(p.accent ? priceStyles.periodAccent : {}) }}>por mes</div>
              <ul style={priceStyles.features}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ ...priceStyles.feature, ...(p.accent ? priceStyles.featureAccent : {}) }}>
                    <span style={{ ...priceStyles.check, ...(p.accent ? priceStyles.checkAccent : {}) }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a style={{ ...priceStyles.cta, ...(p.accent ? priceStyles.ctaAccent : {}) }}
                 href={waLink(p.wa)}
                 target="_blank" rel="noopener"
                 onMouseEnter={e => {
                   if (p.accent) { e.currentTarget.style.background = '#1A1A1A'; }
                   else { e.currentTarget.style.background = '#FFCA3A'; }
                   e.currentTarget.style.transform = 'scale(1.03)';
                 }}
                 onMouseLeave={e => {
                   e.currentTarget.style.background = p.accent ? '#0A0A0A' : '#FFB800';
                   e.currentTarget.style.transform = 'scale(1)';
                 }}>
                SUMATE POR WHATSAPP
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Pricing = Pricing;
