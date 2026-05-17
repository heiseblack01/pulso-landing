// Pulso — Shell de layout para o brand book.
// Section/Header/Label/Mono/Rule/Grid + Side nav.

const { color: C, font: F } = window.PULSO;

// Pequeno rótulo monoespaçado (numéricos de seção, captions).
function Mono({ children, color = C.muted, size = 11, style }) {
  return (
    <span style={{
      fontFamily: F.mono, fontSize: size, color,
      letterSpacing: '0.08em', textTransform: 'uppercase',
      ...style,
    }}>{children}</span>
  );
}

// Cabeçalho de seção: número + título + descrição.
function SectionHeader({ num, title, kicker, lead }) {
  return (
    <header style={{ marginBottom: 56, display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, alignItems: 'baseline' }}>
      <Mono color={C.red}>{num}</Mono>
      <div>
        {kicker && <div style={{ marginBottom: 12 }}><Mono>{kicker}</Mono></div>}
        <h2 style={{
          fontFamily: F.family, fontWeight: 700, fontSize: 44,
          letterSpacing: '-0.03em', color: C.white, margin: 0, lineHeight: 1.05,
        }}>{title}</h2>
        {lead && (
          <p style={{
            fontFamily: F.family, fontWeight: 400, fontSize: 17, lineHeight: 1.55,
            color: C.muted, marginTop: 18, marginBottom: 0, maxWidth: 580,
            letterSpacing: '-0.005em',
          }}>{lead}</p>
        )}
      </div>
    </header>
  );
}

function Section({ id, num, title, kicker, lead, children, padTop = 120, padBottom = 120, bg }) {
  return (
    <section id={id} style={{
      padding: `${padTop}px 80px ${padBottom}px`,
      borderTop: `1px solid ${C.surface}`,
      background: bg || 'transparent',
    }}>
      <SectionHeader num={num} title={title} kicker={kicker} lead={lead} />
      <div style={{ marginLeft: 152 }}>
        {children}
      </div>
    </section>
  );
}

// Container "amostra" com legenda baseline tipo prancha técnica.
function Plate({ children, caption, bg = C.surface, padding = 56, height, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      <div style={{
        background: bg, padding,
        height, minHeight: height ? undefined : 240,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {children}
      </div>
      {caption && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Mono color={C.muted}>{caption}</Mono>
        </div>
      )}
    </div>
  );
}

// Linha "característica · valor" tipo ficha técnica.
function Spec({ label, value }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '14px 0', borderTop: `1px solid ${C.surface}`,
      fontFamily: F.family, fontSize: 14, color: C.white,
    }}>
      <span style={{ color: C.muted, letterSpacing: '-0.005em' }}>{label}</span>
      <span style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.02em' }}>{value}</span>
    </div>
  );
}

// Body paragraph
function P({ children, max = 620, style }) {
  return (
    <p style={{
      fontFamily: F.family, fontSize: 16, lineHeight: 1.6,
      color: C.white, margin: 0, maxWidth: max, letterSpacing: '-0.005em',
      textWrap: 'pretty',
      ...style,
    }}>{children}</p>
  );
}

// Side navigation (sticky)
const NAV_ITEMS = [
  { num: '00', id: 'identidade', label: 'Identidade' },
  { num: '01', id: 'marca',      label: 'Marca' },
  { num: '02', id: 'lockups',    label: 'Lockups' },
  { num: '03', id: 'variantes',  label: 'Variantes' },
  { num: '04', id: 'espaco',     label: 'Espaço & escala' },
  { num: '05', id: 'naopode',    label: 'Não pode' },
  { num: '06', id: 'cores',      label: 'Cores' },
  { num: '07', id: 'tipo',       label: 'Tipografia' },
  { num: '08', id: 'voz',        label: 'Tom de voz' },
  { num: '09', id: 'principios', label: 'Princípios' },
  { num: '10', id: 'aplicacoes', label: 'Aplicações' },
  { num: '11', id: 'tagline',    label: 'Tagline' },
];

function SideNav() {
  const [active, setActive] = React.useState('identidade');
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 200;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= y) { setActive(NAV_ITEMS[i].id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: 220, height: '100vh',
      padding: '56px 0 32px 40px', boxSizing: 'border-box',
      borderRight: `1px solid ${C.surface}`, background: C.black, zIndex: 10,
      display: 'flex', flexDirection: 'column', gap: 28,
    }}>
      <a href="#capa" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
        <ApertureMark size={22} id="nav" />
        <Wordmark size={20} />
      </a>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NAV_ITEMS.map(item => {
          const isActive = active === item.id;
          return (
            <a key={item.id} href={`#${item.id}`} style={{
              display: 'grid', gridTemplateColumns: '32px 1fr', gap: 10,
              alignItems: 'baseline', padding: '7px 0',
              textDecoration: 'none',
              color: isActive ? C.white : C.muted,
              fontFamily: F.family, fontSize: 13, letterSpacing: '-0.01em',
              transition: 'color 120ms',
            }}>
              <Mono color={isActive ? C.red : C.muted} size={10}>{item.num}</Mono>
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
      <div style={{ marginTop: 'auto', paddingRight: 24 }}>
        <Mono color={C.muted} size={9}>Diretrizes de marca · v1 · 2026</Mono>
      </div>
    </nav>
  );
}

Object.assign(window, { Mono, Section, SectionHeader, Plate, Spec, P, SideNav, NAV_ITEMS });
