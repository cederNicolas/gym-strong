const schedStyles = {
  section: {
    padding: '96px 24px', background: '#0A0A0A',
    fontFamily: "'Montserrat', sans-serif",
  },
  inner: { maxWidth: 800, margin: '0 auto' },
  label: {
    fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em',
    color: '#FFB800', marginBottom: 12,
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, textTransform: 'uppercase',
    letterSpacing: '-0.02em', lineHeight: 1, color: '#fff', margin: '0 0 48px',
  },
  card: {
    background: '#1A1A1A', borderRadius: 16, padding: '40px 36px',
    border: '1px solid #2A2A2A', display: 'flex', flexDirection: 'column', gap: 24,
  },
  row: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    paddingBottom: 16, borderBottom: '1px solid #2A2A2A',
  },
  rowLast: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  day: {
    fontSize: 16, fontWeight: 700, color: '#fff', textTransform: 'uppercase',
  },
  time: {
    fontSize: 16, fontWeight: 600, color: '#FFB800',
  },
  closed: {
    fontSize: 16, fontWeight: 600, color: '#555',
  },
  days: {
    display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap',
  },
  dayPill: {
    padding: '6px 14px', borderRadius: 9999, fontSize: 12, fontWeight: 600,
    textTransform: 'uppercase', letterSpacing: '0.05em',
  },
  dayActive: {
    background: 'rgba(255,184,0,0.12)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.3)',
  },
  dayInactive: {
    background: '#0A0A0A', color: '#555', border: '1px solid #2A2A2A',
  },
};

function Schedule() {
  const dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const activeDays = [0, 1, 2, 3, 4, 5]; // Mon-Sat

  return (
    <section id="schedule" style={schedStyles.section}>
      <div style={schedStyles.inner} className="fade-in">
        <div style={schedStyles.label}>Cuándo estamos</div>
        <h2 style={schedStyles.title}>HORARIOS</h2>
        <div style={schedStyles.card}>
          <div style={schedStyles.row}>
            <span style={schedStyles.day}>Lunes a Viernes</span>
            <span style={schedStyles.time}>07:30 — 22:00hs</span>
          </div>
          <div style={schedStyles.row}>
            <span style={schedStyles.day}>Sábados</span>
            <span style={schedStyles.time}>09:00 — 13:30hs</span>
          </div>
          <div style={schedStyles.rowLast}>
            <span style={schedStyles.day}>Domingos</span>
            <span style={schedStyles.closed}>Cerrado</span>
          </div>
          <div style={schedStyles.days}>
            {dayNames.map((d, i) => (
              <span key={i} style={{
                ...schedStyles.dayPill,
                ...(activeDays.includes(i) ? schedStyles.dayActive : schedStyles.dayInactive),
              }}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Schedule = Schedule;