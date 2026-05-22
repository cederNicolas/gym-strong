const navStyles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '0 24px', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
    fontFamily: "'Montserrat', sans-serif",
  },
  inner: {
    maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', height: 72,
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none',
  },
  logoImg: {
    height: 48, width: 'auto', objectFit: 'contain',
  },
  links: {
    display: 'flex', gap: 28, alignItems: 'center', listStyle: 'none', margin: 0, padding: 0,
  },
  link: {
    color: '#ccc', textDecoration: 'none', fontSize: 13, fontWeight: 600,
    textTransform: 'uppercase', letterSpacing: '0.05em',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  cta: {
    background: '#FFB800', color: '#0A0A0A', border: 'none', borderRadius: 9999,
    padding: '10px 24px', fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em',
    cursor: 'pointer', transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
    textDecoration: 'none',
  },
  mobileBtn: {
    display: 'none', background: 'transparent', border: 'none', color: '#fff',
    fontSize: 24, cursor: 'pointer', padding: 8,
  },
};

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const navBg = scrolled ? 'rgba(10,10,10,0.95)' : 'transparent';
  const navShadow = scrolled ? '0 2px 20px rgba(0,0,0,0.5)' : 'none';
  const navBackdrop = scrolled ? 'blur(12px)' : 'none';

  const sections = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Actividades', id: 'activities' },
    { label: 'Planes', id: 'pricing' },
    { label: 'Horarios', id: 'schedule' },
    { label: 'Ubicación', id: 'location' },
  ];

  return (
    <nav style={{ ...navStyles.nav, background: navBg, boxShadow: navShadow, backdropFilter: navBackdrop }}>
      <div style={navStyles.inner}>
        <a href="#hero" style={navStyles.logo} onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <img src="../../assets/logo-on-dark.png" alt="Strong Gym" style={navStyles.logoImg} />
        </a>

        <ul style={navStyles.links} className="nav-links-desktop">
          {sections.map(s => (
            <li key={s.id}>
              <a style={navStyles.link} onClick={() => scrollTo(s.id)}
                 onMouseEnter={e => e.target.style.color = '#FFB800'}
                 onMouseLeave={e => e.target.style.color = '#ccc'}>
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a style={navStyles.cta}
               href="https://wa.me/5491149601563?text=Hola!%20Vi%20la%20web%20de%20Strong%20Gym%20y%20quiero%20informaci%C3%B3n%20sobre%20la%20membres%C3%ADa%20libre%20%F0%9F%92%AA"
               target="_blank" rel="noopener"
               onMouseEnter={e => { e.target.style.background = '#FFCA3A'; e.target.style.transform = 'scale(1.02)'; }}
               onMouseLeave={e => { e.target.style.background = '#FFB800'; e.target.style.transform = 'scale(1)'; }}>
              CONTACTO
            </a>
          </li>
        </ul>

        <button style={{ ...navStyles.mobileBtn }} className="nav-mobile-btn"
                onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div style={{
          background: 'rgba(10,10,10,0.98)', padding: '20px 24px', display: 'flex',
          flexDirection: 'column', gap: 16, borderTop: '1px solid #2A2A2A',
        }} className="nav-mobile-menu">
          {sections.map(s => (
            <a key={s.id} style={{ ...navStyles.link, fontSize: 16 }}
               onClick={() => scrollTo(s.id)}>
              {s.label}
            </a>
          ))}
          <a style={{ ...navStyles.cta, textAlign: 'center', display: 'block' }}
             href="https://wa.me/5491149601563?text=Hola!%20Vi%20la%20web%20de%20Strong%20Gym%20y%20quiero%20informaci%C3%B3n%20sobre%20la%20membres%C3%ADa%20libre%20%F0%9F%92%AA"
             target="_blank" rel="noopener">
            CONTACTO
          </a>
        </div>
      )}
    </nav>
  );
}

window.Navbar = Navbar;