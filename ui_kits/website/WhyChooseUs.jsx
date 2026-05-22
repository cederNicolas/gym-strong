const whyStyles = {
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
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 24,
  },
  card: {
    background: '#0A0A0A', borderRadius: 12, padding: '32px 28px',
    border: '1px solid #2A2A2A',
    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
    display: 'flex', flexDirection: 'column', gap: 16,
  },
  iconWrap: {
    width: 52, height: 52, borderRadius: 12,
    background: 'rgba(255,184,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  iconSvg: { width: 24, height: 24, color: '#FFB800' },
  cardTitle: {
    fontSize: 18, fontWeight: 700, textTransform: 'uppercase', color: '#fff', margin: 0,
  },
  cardDesc: {
    fontSize: 14, fontWeight: 400, color: '#888', lineHeight: 1.6, margin: 0,
  },
};

function WhyIcon({ type }) {
  if (type === 'trainers') {
    return (
      <svg style={whyStyles.iconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    );
  }
  if (type === 'hours') {
    return (
      <svg style={whyStyles.iconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    );
  }
  return (
    <svg style={whyStyles.iconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}

function WhyChooseUs() {
  const items = [
    {
      icon: 'trainers',
      title: 'Profes siempre presentes',
      desc: 'No estás solo. Nuestros entrenadores te acompañan en cada ejercicio, corrigen tu técnica y te motivan a superar tus límites.',
    },
    {
      icon: 'hours',
      title: 'Horarios amplios',
      desc: 'De lunes a viernes de 07:30 a 22:00hs. Adaptamos el gym a tu rutina, no al revés.',
    },
    {
      icon: 'community',
      title: 'Comunidad real',
      desc: 'Acá se genera un vínculo. Compartís el esfuerzo, los logros y las ganas de crecer con gente que va por lo mismo.',
    },
  ];

  return (
    <section id="why" style={whyStyles.section}>
      <div style={whyStyles.inner} className="fade-in">
        <div style={whyStyles.label}>Diferenciadores</div>
        <h2 style={whyStyles.title}>POR QUÉ ELEGIRNOS</h2>
        <div style={whyStyles.grid}>
          {items.map((item, i) => (
            <div key={i} style={whyStyles.card}
                 onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,184,0,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                 onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A2A'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={whyStyles.iconWrap}>
                <WhyIcon type={item.icon} />
              </div>
              <h3 style={whyStyles.cardTitle}>{item.title}</h3>
              <p style={whyStyles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.WhyChooseUs = WhyChooseUs;