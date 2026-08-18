const classSchedStyles = {
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
    letterSpacing: '-0.02em', lineHeight: 1, color: '#fff', margin: '0 0 24px',
  },
  note: {
    display: 'flex', alignItems: 'center', gap: 10,
    background: 'rgba(255,184,0,0.08)', border: '1px solid rgba(255,184,0,0.3)',
    borderRadius: 12, padding: '14px 20px', marginBottom: 48,
  },
  noteText: {
    fontSize: 14, fontWeight: 500, color: '#FFCA3A', lineHeight: 1.5, margin: 0,
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 24,
  },
  card: {
    background: '#1A1A1A', borderRadius: 16, border: '1px solid #2A2A2A',
    padding: '28px 28px 20px', display: 'flex', flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 20, fontWeight: 900, textTransform: 'uppercase', color: '#fff',
    letterSpacing: '-0.01em', margin: '0 0 18px',
  },
  group: {
    display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20,
  },
  groupLastChild: {
    marginBottom: 0,
  },
  groupLabel: {
    fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
    color: '#888', margin: '0 0 2px',
  },
  slots: {
    display: 'flex', flexDirection: 'column', gap: 8,
  },
  slot: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    gap: 12, padding: '12px 14px', borderRadius: 8,
    background: '#0A0A0A', border: '1px solid #2A2A2A',
    textDecoration: 'none', cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.16,1,0.3,1)',
  },
  slotDays: {
    fontSize: 13, fontWeight: 700, color: '#fff', textTransform: 'uppercase',
  },
  slotTime: {
    fontSize: 13, fontWeight: 600, color: '#FFB800', whiteSpace: 'nowrap',
  },
};

function ClassSchedule() {
  const activities = [
    {
      name: 'Zumba Kids/Teens',
      waName: 'Zumba',
      groups: [
        {
          label: 'Kids',
          slots: [
            { days: 'Lunes', time: '18 a 19hs' },
          ],
        },
        {
          label: 'Teens',
          slots: [
            { days: 'Lunes', time: '19:15 a 20:15hs' },
          ],
        },
      ],
    },
    {
      name: 'Zumba',
      slots: [
        { days: 'Martes y Jueves', time: '20:30hs' },
        { days: 'Miércoles y Viernes', time: '8:30hs' },
        { days: 'Sábados', time: '16hs' },
      ],
    },
    {
      name: 'Spinning',
      slots: [
        { days: 'Lunes, Miércoles y Viernes', time: '9hs' },
        { days: 'Martes, Jueves y Viernes', time: '19hs' },
        { days: 'Sábados', time: '13:30hs' },
      ],
    },
    {
      name: 'GAP',
      slots: [
        { days: 'Lunes, Miércoles y Viernes', time: '10hs' },
        { days: 'Lunes, Miércoles y Viernes', time: '14hs' },
      ],
    },
    {
      name: 'Adultos Mayores',
      slots: [
        { days: 'Lunes y Viernes', time: '8hs' },
      ],
    },
    {
      name: 'Telas',
      groups: [
        {
          label: 'Adultos',
          slots: [
            { days: 'Martes y Jueves', time: '10 a 12hs' },
          ],
        },
        {
          label: 'Teens',
          slots: [
            { days: 'Miércoles y Viernes', time: '17:30 a 19hs' },
          ],
        },
      ],
    },
  ];

  const waLink = (activityName, slot) => {
    const text = `Hola! Vi la web de Strong Gym y quiero reservar una clase de prueba de ${activityName} el ${slot.days} de ${slot.time} 💪`;
    return `https://wa.me/5491149601563?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="class-schedule" style={classSchedStyles.section}>
      <div style={classSchedStyles.inner} className="fade-in">
        <div style={classSchedStyles.label}>Sumate a una clase</div>
        <h2 style={classSchedStyles.title}>CLASES Y HORARIOS</h2>
        <div style={classSchedStyles.note}>
          <span aria-hidden="true">💡</span>
          <p style={classSchedStyles.noteText}>
            Hacé click en el horario que más te guste y reservá tu clase de prueba directo por WhatsApp.
          </p>
        </div>
        <div style={classSchedStyles.grid}>
          {activities.map((a, i) => (
            <div key={i} style={classSchedStyles.card}>
              <h3 style={classSchedStyles.cardTitle}>{a.name}</h3>
              {a.groups ? (
                a.groups.map((g, gi) => (
                  <div key={gi} style={{
                    ...classSchedStyles.group,
                    ...(gi === a.groups.length - 1 ? classSchedStyles.groupLastChild : {}),
                  }}>
                    <p style={classSchedStyles.groupLabel}>{g.label}</p>
                    {g.slots.map((s, j) => (
                      <a key={j} href={waLink(`${a.waName || a.name} ${g.label}`, s)} target="_blank" rel="noopener"
                         style={classSchedStyles.slot}
                         onMouseEnter={e => { e.currentTarget.style.borderColor = '#FFB800'; e.currentTarget.style.background = 'rgba(255,184,0,0.08)'; }}
                         onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A2A'; e.currentTarget.style.background = '#0A0A0A'; }}>
                        <span style={classSchedStyles.slotDays}>{s.days}</span>
                        <span style={classSchedStyles.slotTime}>{s.time}</span>
                      </a>
                    ))}
                  </div>
                ))
              ) : (
                <div style={classSchedStyles.slots}>
                  {a.slots.map((s, j) => (
                    <a key={j} href={waLink(a.name, s)} target="_blank" rel="noopener"
                       style={classSchedStyles.slot}
                       onMouseEnter={e => { e.currentTarget.style.borderColor = '#FFB800'; e.currentTarget.style.background = 'rgba(255,184,0,0.08)'; }}
                       onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A2A'; e.currentTarget.style.background = '#0A0A0A'; }}>
                      <span style={classSchedStyles.slotDays}>{s.days}</span>
                      <span style={classSchedStyles.slotTime}>{s.time}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ClassSchedule = ClassSchedule;
