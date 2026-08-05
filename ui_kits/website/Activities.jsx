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
  mosaic: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr',
    gap: 1, background: '#2A2A2A', width: '100%', height: '100%',
  },
  mosaicTile: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    gap: 8,
  },
  mosaicIcon: {
    width: 28, height: 28, color: '#FFB800',
  },
  mosaicLabel: {
    fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
    color: '#fff',
  },
};

function MosaicIcon({ type }) {
  const s = { width: 28, height: 28, color: '#FFB800' };
  if (type === 'zumba') {
    return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    );
  }
  if (type === 'spinning') {
    return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18.5" cy="17.5" r="3.5" />
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="15" cy="5" r="1" />
        <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
      </svg>
    );
  }
  return (
    <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  );
}

function Activities() {
  const activities = [
    {
      type: 'photo',
      img: '/uploads/musculacion.jpg',
      tag: 'Fuerza',
      title: 'Musculación',
      desc: 'Entrenamiento con pesas libres y máquinas. Rutinas personalizadas con profes que te acompañan en cada serie.',
      wa: 'https://wa.me/5491149601563?text=Hola!%20Vi%20la%20web%20de%20Strong%20Gym%20y%20quiero%20informaci%C3%B3n%20sobre%20Musculaci%C3%B3n%20%F0%9F%92%AA',
    },
    {
      type: 'mosaic',
      tag: 'Grupales',
      title: 'Zumba · Spinning · Telas',
      desc: 'Clases grupales para todos los niveles. Mirá los días y horarios de cada una y reservá tu clase de prueba.',
      href: '#class-schedule',
      tiles: [
        { icon: 'zumba', label: 'Zumba', bg: '#151515' },
        { icon: 'spinning', label: 'Spinning', bg: '#1f1f1f' },
        { icon: 'telas', label: 'Telas', bg: '#151515' },
      ],
    },
  ];

  return (
    <section id="activities" style={actStyles.section}>
      <div style={actStyles.inner} className="fade-in">
        <div style={actStyles.label}>Lo que hacemos</div>
        <h2 style={actStyles.title}>NUESTRAS ACTIVIDADES</h2>
        <div style={actStyles.grid}>
          {activities.map((a, i) => (
            <a key={i} href={a.type === 'photo' ? a.wa : a.href}
               target={a.type === 'photo' ? '_blank' : undefined}
               rel={a.type === 'photo' ? 'noopener' : undefined}
               style={{...actStyles.card, textDecoration: 'none', cursor: 'pointer', display: 'block'}}
               onMouseEnter={e => {
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.borderColor = '#FFB800';
                 e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,184,0,0.15)';
                 const img = e.currentTarget.querySelector('img');
                 if (img) img.style.transform = 'scale(1.06)';
               }}
               onMouseLeave={e => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.borderColor = '#2A2A2A';
                 e.currentTarget.style.boxShadow = 'none';
                 const img = e.currentTarget.querySelector('img');
                 if (img) img.style.transform = 'scale(1)';
               }}>
              <div style={actStyles.cardImage}>
                {a.type === 'photo' ? (
                  <React.Fragment>
                    <img src={a.img} alt={a.title} style={actStyles.cardImg} loading="lazy" />
                    <div style={actStyles.cardOverlay} />
                  </React.Fragment>
                ) : (
                  <div style={{
                    ...actStyles.mosaic,
                    gridTemplateColumns: `repeat(${a.tiles.length}, 1fr)`,
                    gridTemplateRows: '1fr',
                  }}>
                    {a.tiles.map((t, ti) => (
                      <div key={ti} style={{...actStyles.mosaicTile, background: t.bg}}>
                        <MosaicIcon type={t.icon} />
                        <span style={actStyles.mosaicLabel}>{t.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div style={actStyles.cardBody}>
                <span style={actStyles.cardTag}>{a.tag}</span>
                <h3 style={actStyles.cardTitle}>{a.title}</h3>
                <p style={actStyles.cardDesc}>{a.desc}</p>
                <span style={actStyles.cardLink}>
                  {a.type === 'photo' ? 'Consultar por WhatsApp →' : 'Ver horarios y reservar →'}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Activities = Activities;