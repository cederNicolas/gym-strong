const locStyles = {
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
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
    alignItems: 'start',
  },
  info: {
    display: 'flex', flexDirection: 'column', gap: 24,
  },
  infoItem: {
    display: 'flex', gap: 14, alignItems: 'flex-start',
  },
  iconBox: {
    width: 44, height: 44, borderRadius: 10,
    background: 'rgba(255,184,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  infoText: { display: 'flex', flexDirection: 'column', gap: 4 },
  infoLabel: {
    fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em',
    color: '#888',
  },
  infoVal: { fontSize: 15, fontWeight: 600, color: '#fff', margin: 0 },
  mapWrap: {
    borderRadius: 12, overflow: 'hidden', background: '#0A0A0A',
    border: '1px solid #2A2A2A', height: 300,
  },
};

function LocIcon({ type }) {
  const s = { width: 20, height: 20, color: '#FFB800' };
  if (type === 'pin') {
    return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    );
  }
  if (type === 'clock') {
    return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    );
  }
  if (type === 'phone') {
    return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    );
  }
  return (
    <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function Location() {
  return (
    <section id="location" style={locStyles.section}>
      <div style={locStyles.inner} className="fade-in">
        <div style={locStyles.label}>Dónde estamos</div>
        <h2 style={locStyles.title}>UBICACIÓN</h2>
        <div style={locStyles.grid} className="loc-grid">
          <div style={locStyles.info}>
            <div style={locStyles.infoItem}>
              <div style={locStyles.iconBox}><LocIcon type="pin" /></div>
              <div style={locStyles.infoText}>
                <span style={locStyles.infoLabel}>Dirección</span>
                <p style={locStyles.infoVal}>Av. San Martín 2573, Rafael Calzada</p>
              </div>
            </div>
            <div style={locStyles.infoItem}>
              <div style={locStyles.iconBox}><LocIcon type="clock" /></div>
              <div style={locStyles.infoText}>
                <span style={locStyles.infoLabel}>Horarios</span>
                <p style={locStyles.infoVal}>Lun a Vie · 07:30 a 22:00hs</p>
              </div>
            </div>
            <div style={locStyles.infoItem}>
              <div style={locStyles.iconBox}><LocIcon type="ig" /></div>
              <div style={locStyles.infoText}>
                <span style={locStyles.infoLabel}>Instagram</span>
                <p style={locStyles.infoVal}>@gymstrong2573</p>
              </div>
            </div>
            <div style={locStyles.infoItem}>
              <div style={locStyles.iconBox}><LocIcon type="phone" /></div>
              <div style={locStyles.infoText}>
                <span style={locStyles.infoLabel}>WhatsApp</span>
                <a href="https://wa.me/5491149601563?text=Hola!%20Vi%20la%20web%20de%20Strong%20Gym%20y%20quiero%20informaci%C3%B3n%20sobre%20la%20membres%C3%ADa%20libre%20%F0%9F%92%AA"
                   target="_blank" rel="noopener"
                   style={{ ...locStyles.infoVal, textDecoration: 'none', transition: 'color 0.2s' }}
                   onMouseEnter={e => e.target.style.color = '#FFB800'}
                   onMouseLeave={e => e.target.style.color = '#fff'}>
                  +54 9 11 4960-1563
                </a>
              </div>
            </div>
          </div>
          <div style={locStyles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.3408798443475!2d-58.37017822350686!3d-34.797364872885574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32d1941622beb%3A0x4d995c6376801730!2sGYM%20strong!5e0!3m2!1ses!2sar!4v1779226128602!5m2!1ses!2sar"
              width="100%" height="100%" style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3)' }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Location = Location;