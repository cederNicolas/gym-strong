const actStyles = {
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
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 24,
  },
  card: {
    background: '#1A1A1A', borderRadius: 12, overflow: 'hidden',
    border: '1px solid #2A2A2A',
    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
    cursor: 'default',
  },
  cardImage: {
    height: 240, position: 'relative', overflow: 'hidden',
  },
  cardImg: {
    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
    transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
  },
  cardOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)',
  },
  cardBody: { padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 8 },
  cardLink: {
    marginTop: 8, fontSize: 12, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.1em', color: '#FFB800', textDecoration: 'none',
  },
  cardTag: {
    fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em',
    color: '#FFB800', background: 'rgba(255,184,0,0.1)', display: 'inline-block',
    padding: '4px 10px', borderRadius: 9999, marginBottom: 12,
  },
  cardTitle: {
    fontSize: 22, fontWeight: 900, textTransform: 'uppercase', color: '#fff',
    margin: '0 0 8px', letterSpacing: '-0.01em',
  },
  cardDesc: {
    fontSize: 14, fontWeight: 400, color: '#888', lineHeight: 1.6, margin: 0,
  },
};

function Activities() {
  const activities = [
    {
      img: '/uploads/musculacion.jpg',
      tag: 'Fuerza',
      title: 'Musculación',
      desc: 'Entrenamiento con pesas libres y máquinas. Rutinas personalizadas con profes que te acompañan en cada serie.',
      wa: 'https://wa.me/5491149601563?text=Hola!%20Vi%20la%20web%20de%20Strong%20Gym%20y%20quiero%20informaci%C3%B3n%20sobre%20Musculaci%C3%B3n%20%F0%9F%92%AA',
    },
    {
      img: '/uploads/spinning.jpg',
      tag: 'Cardio',
      title: 'Spinning',
      desc: 'Clases grupales de alta intensidad sobre bici. Música, energía y un equipo que te empuja a dar todo.',
      wa: 'https://wa.me/5491149601563?text=Hola!%20Vi%20la%20web%20de%20Strong%20Gym%20y%20quiero%20informaci%C3%B3n%20sobre%20Spinning%20%F0%9F%9A%B4',
    },
  ];

  return (
    <section id="activities" style={actStyles.section}>
      <div style={actStyles.inner} className="fade-in">
        <div style={actStyles.label}>Lo que hacemos</div>
        <h2 style={actStyles.title}>NUESTRAS ACTIVIDADES</h2>
        <div style={actStyles.grid}>
          {activities.map((a, i) => (
            <a key={i} href={a.wa} target="_blank" rel="noopener"
               style={{...actStyles.card, textDecoration: 'none', cursor: 'pointer', display: 'block'}}
               onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#FFB800'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,184,0,0.15)'; e.currentTarget.querySelector('img').style.transform = 'scale(1.06)'; }}
               onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2A2A2A'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}>
              <div style={actStyles.cardImage}>
                <img src={a.img} alt={a.title} style={actStyles.cardImg} />
                <div style={actStyles.cardOverlay} />
              </div>
              <div style={actStyles.cardBody}>
                <span style={actStyles.cardTag}>{a.tag}</span>
                <h3 style={actStyles.cardTitle}>{a.title}</h3>
                <p style={actStyles.cardDesc}>{a.desc}</p>
                <span style={actStyles.cardLink}>Consultar por WhatsApp →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Activities = Activities;