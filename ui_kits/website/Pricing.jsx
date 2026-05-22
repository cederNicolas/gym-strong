const priceStyles = {
  section: {
    padding: '96px 24px', background: '#1A1A1A',
    fontFamily: "'Montserrat', sans-serif",
  },
  inner: { maxWidth: 600, margin: '0 auto', textAlign: 'center' },
  label: {
    fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em',
    color: '#FFB800', marginBottom: 12,
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, textTransform: 'uppercase',
    letterSpacing: '-0.02em', lineHeight: 1, color: '#fff', margin: '0 0 48px',
  },
  card: {
    background: '#0A0A0A', borderRadius: 16, padding: '48px 40px',
    border: '2px solid #FFB800', position: 'relative', overflow: 'hidden',
    textAlign: 'center',
  },
  glow: {
    position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
    width: 300, height: 120, borderRadius: '50%',
    background: 'rgba(255,184,0,0.12)', filter: 'blur(60px)',
    pointerEvents: 'none',
  },
  badge: {
    display: 'inline-block', background: '#FFB800', color: '#0A0A0A',
    fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
    padding: '6px 16px', borderRadius: 9999, marginBottom: 24,
    position: 'relative',
  },
  planName: {
    fontSize: 28, fontWeight: 900, textTransform: 'uppercase', color: '#fff',
    margin: '0 0 8px', letterSpacing: '-0.01em', position: 'relative',
  },
  planDesc: {
    fontSize: 14, color: '#888', margin: '0 0 28px', lineHeight: 1.5,
    position: 'relative',
  },
  price: {
    fontSize: 56, fontWeight: 900, color: '#FFB800', lineHeight: 1,
    margin: '0 0 4px', position: 'relative',
  },
  period: {
    fontSize: 16, fontWeight: 600, color: '#888', margin: '0 0 32px',
    position: 'relative',
  },
  features: {
    listStyle: 'none', margin: '0 0 32px', padding: 0,
    display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left',
    position: 'relative',
  },
  feature: {
    fontSize: 14, fontWeight: 500, color: '#ccc', display: 'flex', alignItems: 'center', gap: 10,
  },
  check: { color: '#FFB800', fontSize: 16, fontWeight: 700 },
  cta: {
    background: '#FFB800', color: '#0A0A0A', border: 'none', borderRadius: 9999,
    padding: '16px 48px', fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700, fontSize: 16, textTransform: 'uppercase', letterSpacing: '0.05em',
    cursor: 'pointer', transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
    position: 'relative',
  },
};

function Pricing() {
  return (
    <section id="pricing" style={priceStyles.section}>
      <div style={priceStyles.inner} className="fade-in">
        <div style={priceStyles.label}>Invertí en vos</div>
        <h2 style={priceStyles.title}>NUESTRO PLAN</h2>
        <div style={priceStyles.card}>
          <div style={priceStyles.glow}></div>
          <span style={priceStyles.badge}>Único plan</span>
          <h3 style={priceStyles.planName}>Membresía Libre</h3>
          <p style={priceStyles.planDesc}>Acceso completo a musculación en todos los horarios</p>
          <div style={priceStyles.price}>$40.000</div>
          <div style={priceStyles.period}>por mes</div>
          <ul style={priceStyles.features}>
            <li style={priceStyles.feature}><span style={priceStyles.check}>✓</span> Musculación ilimitada</li>
            <li style={priceStyles.feature}><span style={priceStyles.check}>✓</span> Seguimiento de profes</li>
            <li style={priceStyles.feature}><span style={priceStyles.check}>✓</span> Lun a Vie 07:30–22:00</li>
            <li style={priceStyles.feature}><span style={priceStyles.check}>✓</span> Sáb 09:00–13:30</li>
          </ul>
          <a style={priceStyles.cta}
             href="https://wa.me/5491149601563?text=Hola!%20Vi%20la%20web%20de%20Strong%20Gym%20y%20quiero%20informaci%C3%B3n%20sobre%20la%20membres%C3%ADa%20libre%20%F0%9F%92%AA"
             target="_blank" rel="noopener"
             onMouseEnter={e => { e.target.style.background = '#FFCA3A'; e.target.style.transform = 'scale(1.03)'; e.target.style.boxShadow = '0 4px 24px rgba(255,184,0,0.4)'; }}
             onMouseLeave={e => { e.target.style.background = '#FFB800'; e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}>
            SUMATE POR WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}

window.Pricing = Pricing;