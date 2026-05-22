const footStyles = {
  footer: {
    padding: '64px 24px 32px', background: '#0A0A0A',
    fontFamily: "'Montserrat', sans-serif",
    borderTop: '1px solid #1A1A1A',
  },
  inner: { maxWidth: 1200, margin: '0 auto' },
  top: {
    display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48,
    marginBottom: 48,
  },
  brand: { display: 'flex', flexDirection: 'column', gap: 16 },
  logoImg: {
    height: 56, width: 'auto', objectFit: 'contain', alignSelf: 'flex-start',
  },
  brandDesc: {
    fontSize: 14, fontWeight: 400, color: '#888', lineHeight: 1.6,
    maxWidth: 320, margin: 0,
  },
  colTitle: {
    fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
    color: '#FFB800', marginBottom: 16,
  },
  links: {
    listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10,
  },
  link: {
    fontSize: 14, fontWeight: 500, color: '#888', textDecoration: 'none',
    transition: 'color 0.2s', cursor: 'pointer',
  },
  bottom: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    paddingTop: 24, borderTop: '1px solid #1A1A1A', flexWrap: 'wrap', gap: 16,
  },
  copy: {
    fontSize: 12, fontWeight: 500, color: '#555', margin: 0,
  },
  socials: {
    display: 'flex', gap: 12,
  },
  socialIcon: {
    width: 36, height: 36, borderRadius: '50%', background: '#1A1A1A',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#888', transition: 'all 0.2s', cursor: 'pointer',
    border: 'none', textDecoration: 'none',
  },
};

function Footer() {
  return (
    <footer style={footStyles.footer}>
      <div style={footStyles.inner}>
        <div style={footStyles.top} className="footer-grid">
          <div style={footStyles.brand}>
            <img src="../../assets/logo-on-dark.png" alt="Strong Gym" style={footStyles.logoImg} />
            <p style={footStyles.brandDesc}>
              Crezcamos juntos. Tu gym de barrio en Rafael Calzada con profes, comunidad y las ganas de siempre.
            </p>
          </div>
          <div>
            <div style={footStyles.colTitle}>Navegación</div>
            <ul style={footStyles.links}>
              {['Inicio', 'Actividades', 'Planes', 'Horarios', 'Ubicación'].map(l => (
                <li key={l}>
                  <a style={footStyles.link}
                     onMouseEnter={e => e.target.style.color = '#FFB800'}
                     onMouseLeave={e => e.target.style.color = '#888'}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={footStyles.colTitle}>Contacto</div>
            <ul style={footStyles.links}>
              <li><span style={{ ...footStyles.link, cursor: 'default' }}>Av. San Martín 2573</span></li>
              <li><span style={{ ...footStyles.link, cursor: 'default' }}>Rafael Calzada</span></li>
              <li><span style={{ ...footStyles.link, cursor: 'default' }}>Lun–Vie 07:30–22:00</span></li>
              <li>
                <a style={footStyles.link} href="tel:+5491149601563"
                   onMouseEnter={e => e.target.style.color = '#FFB800'}
                   onMouseLeave={e => e.target.style.color = '#888'}>
                  +54 9 11 4960-1563
                </a>
              </li>
              <li>
                <a style={footStyles.link} href="https://instagram.com/gymstrong2573" target="_blank" rel="noopener"
                   onMouseEnter={e => e.target.style.color = '#FFB800'}
                   onMouseLeave={e => e.target.style.color = '#888'}>
                  @gymstrong2573
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={footStyles.bottom}>
          <p style={footStyles.copy}>© 2026 Strong Gym. Todos los derechos reservados.</p>
          <div style={footStyles.socials}>
            <a style={footStyles.socialIcon} href="https://instagram.com/gymstrong2573" target="_blank" rel="noopener"
               onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,184,0,0.15)'; e.currentTarget.style.color = '#FFB800'; }}
               onMouseLeave={e => { e.currentTarget.style.background = '#1A1A1A'; e.currentTarget.style.color = '#888'; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a style={footStyles.socialIcon}
               href="https://wa.me/5491149601563?text=Hola!%20Vi%20la%20web%20de%20Strong%20Gym%20y%20quiero%20informaci%C3%B3n%20sobre%20la%20membres%C3%ADa%20libre%20%F0%9F%92%AA"
               target="_blank" rel="noopener"
               onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,184,0,0.15)'; e.currentTarget.style.color = '#FFB800'; }}
               onMouseLeave={e => { e.currentTarget.style.background = '#1A1A1A'; e.currentTarget.style.color = '#888'; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;