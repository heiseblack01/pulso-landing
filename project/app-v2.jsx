// Pulso — Aperture mark with red horizontal slit (first version).

const DARK = '#0B0B0D';
const INK = '#F2F0EB';
const RED = '#FF2D2D';

function Surf({ children, bg = DARK, padding = 0, style }) {
  return (
    <div style={{
      width: '100%', height: '100%', background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding, boxSizing: 'border-box',
      position: 'relative', overflow: 'hidden',
      ...style,
    }}>
      {children}
    </div>
  );
}

function Caption({ children, color = 'rgba(242,240,235,0.4)', top, bottom, left = 20, right }) {
  return (
    <div style={{
      position: 'absolute', top, bottom, left, right,
      fontFamily: '"Geist Mono", ui-monospace, monospace',
      fontSize: 10, fontWeight: 500, letterSpacing: '0.06em',
      textTransform: 'uppercase', color,
    }}>{children}</div>
  );
}

function HeroBoard() {
  return (
    <Surf padding={60}>
      <HLockup size={110} id="hero" />
      <Caption top={20} left={24}>Primary · horizontal lockup</Caption>
    </Surf>
  );
}

function IconBoard() {
  return (
    <Surf padding={60}>
      <ApertureMark size={280} id="ic" />
      <Caption top={20} left={24}>Icon · standalone</Caption>
    </Surf>
  );
}

function VerticalBoard() {
  return (
    <Surf padding={50}>
      <VLockup size={160} id="vrt" />
      <Caption top={20} left={24}>Vertical lockup</Caption>
    </Surf>
  );
}

function OnLightBoard() {
  return (
    <Surf bg={INK} padding={50}>
      <HLockup size={72} ink={DARK} bg={INK} id="ol" />
      <Caption top={20} left={24} color="rgba(11,11,13,0.45)">On light</Caption>
    </Surf>
  );
}

function OnRedBoard() {
  return (
    <Surf bg={RED} padding={50}>
      <HLockup size={72} ink={INK} bg={RED} showAccent={false} id="or" />
      <Caption top={20} left={24} color="rgba(255,255,255,0.55)">On red</Caption>
    </Surf>
  );
}

function MonoBoard() {
  return (
    <Surf padding={50}>
      <HLockup size={72} ink={INK} bg={DARK} showAccent={false} id="mi" />
      <Caption top={20} left={24}>Monochrome</Caption>
    </Surf>
  );
}

function FaviconBoard() {
  const sizes = [16, 24, 32, 48, 64];
  return (
    <Surf padding={32} style={{ flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 22 }}>
        {sizes.map((s) => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: s + 14, height: s + 14, borderRadius: Math.max(4, s * 0.22),
              background: '#16161A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
            }}>
              <ApertureMark size={s} id={`fav${s}`} />
            </div>
            <span style={{
              fontFamily: '"Geist Mono", monospace', fontSize: 9,
              color: 'rgba(242,240,235,0.4)', letterSpacing: '0.08em',
            }}>{s}</span>
          </div>
        ))}
      </div>
      <Caption top={20} left={24}>Favicon scale</Caption>
    </Surf>
  );
}

function AppIconBoard() {
  return (
    <Surf padding={36}>
      <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
        <div style={{
          width: 168, height: 168, borderRadius: 38, background: DARK,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 24px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.04)',
        }}>
          <ApertureMark size={108} id="ai1" />
        </div>
        <div style={{
          width: 168, height: 168, borderRadius: 38, background: RED,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 24px 60px rgba(255,45,45,0.25)',
        }}>
          <ApertureMark size={108} ink={INK} bg={RED} showAccent={false} id="ai2" />
        </div>
      </div>
      <Caption top={20} left={24}>App icon · 1024²</Caption>
    </Surf>
  );
}

function CardBoard() {
  return (
    <Surf padding={28} style={{ flexDirection: 'column', gap: 16 }}>
      <div style={{
        width: 360, height: 220, borderRadius: 4, background: DARK,
        boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        padding: 26, boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <HLockup size={34} id="cf" />
        <div style={{
          fontFamily: '"Geist", sans-serif', fontSize: 11,
          color: 'rgba(242,240,235,0.55)', letterSpacing: '-0.005em', lineHeight: 1.55,
        }}>
          <div style={{ color: INK, fontWeight: 500, fontSize: 13, marginBottom: 4, letterSpacing: '-0.02em' }}>
            Marina Caldeira
          </div>
          <div>Head of Performance</div>
          <div style={{
            marginTop: 10, color: 'rgba(242,240,235,0.4)',
            fontFamily: '"Geist Mono", monospace', fontSize: 10, letterSpacing: '0.02em',
          }}>
            marina@pulso.studio · pulso.studio
          </div>
        </div>
      </div>
      <div style={{
        width: 360, height: 220, borderRadius: 4, background: INK,
        boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <ApertureMark size={92} ink={DARK} bg={INK} id="cb" />
      </div>
      <Caption top={20} left={24}>Business card</Caption>
    </Surf>
  );
}

function SiteBoard() {
  return (
    <Surf padding={36} style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '4px 6px', marginBottom: 36,
      }}>
        <HLockup size={22} id="site1" />
        <div style={{
          display: 'flex', gap: 26,
          fontFamily: '"Geist", sans-serif', fontSize: 12, fontWeight: 500,
          color: 'rgba(242,240,235,0.7)', letterSpacing: '-0.01em',
        }}>
          <span>Work</span><span>Studio</span><span>Journal</span>
          <span style={{ color: INK, background: RED, padding: '4px 10px', borderRadius: 999 }}>Contact</span>
        </div>
      </div>
      <div style={{ padding: '0 6px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 500,
          color: RED, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14,
        }}>
          Performance · paid · lifecycle
        </div>
        <div style={{
          fontFamily: '"Geist", sans-serif',
          fontSize: 42, fontWeight: 500, color: INK,
          letterSpacing: '-0.035em', lineHeight: 1.02, marginBottom: 16,
        }}>
          Marketing que <br/>
          <span style={{ color: RED }}>pulsa.</span>
        </div>
        <div style={{
          fontFamily: '"Geist", sans-serif', fontSize: 13,
          color: 'rgba(242,240,235,0.55)', letterSpacing: '-0.005em', lineHeight: 1.55, maxWidth: 380,
        }}>
          Estúdio digital para marcas que precisam de sinal — não de ruído.
        </div>
      </div>
      <Caption top={20} right={24} left={undefined}>In context · marketing site</Caption>
    </Surf>
  );
}

function TokensBoard() {
  const swatch = (name, hex, dark = false) => (
    <div style={{
      flex: 1, background: hex, color: dark ? '#0B0B0D' : INK,
      padding: '14px 14px 12px',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      borderRadius: 3, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
      minHeight: 78,
    }}>
      <div style={{ fontFamily: '"Geist", sans-serif', fontWeight: 500, fontSize: 13, letterSpacing: '-0.02em' }}>{name}</div>
      <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, opacity: 0.7 }}>{hex}</div>
    </div>
  );
  return (
    <Surf padding={28} style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', gap: 14 }}>
      <Caption top={20} left={24}>Tokens</Caption>
      <div style={{ height: 30 }} />
      <div style={{ display: 'flex', gap: 8 }}>
        {swatch('Ink', INK, true)}
        {swatch('Surface', DARK)}
        {swatch('Pulse', RED)}
      </div>
      <div style={{
        fontFamily: '"Geist", sans-serif', fontSize: 11,
        color: 'rgba(242,240,235,0.55)', letterSpacing: '-0.005em', lineHeight: 1.55,
        marginTop: 8,
      }}>
        <span style={{ color: INK }}>Geist</span> 500 · −0.045em tracking.
      </div>
    </Surf>
  );
}

function App() {
  return (
    <DesignCanvas>
      <DCSection id="primary" title="Pulso" subtitle="Aperture mark · fresta vermelha + proporção 0.78×">
        <DCArtboard id="hero" label="Horizontal" width={680} height={300}>
          <HeroBoard />
        </DCArtboard>
        <DCArtboard id="icon" label="Icon" width={400} height={400}>
          <IconBoard />
        </DCArtboard>
        <DCArtboard id="vertical" label="Vertical" width={360} height={360}>
          <VerticalBoard />
        </DCArtboard>
      </DCSection>

      <DCSection id="variants" title="Variants">
        <DCArtboard id="onlight" label="On light" width={460} height={240}>
          <OnLightBoard />
        </DCArtboard>
        <DCArtboard id="onred" label="On red" width={460} height={240}>
          <OnRedBoard />
        </DCArtboard>
        <DCArtboard id="mono" label="Mono" width={460} height={240}>
          <MonoBoard />
        </DCArtboard>
      </DCSection>

      <DCSection id="apps" title="Aplicações">
        <DCArtboard id="site" label="Marketing site" width={620} height={420}>
          <SiteBoard />
        </DCArtboard>
        <DCArtboard id="appicon" label="App icon" width={460} height={300}>
          <AppIconBoard />
        </DCArtboard>
        <DCArtboard id="favicon" label="Favicon" width={520} height={220}>
          <FaviconBoard />
        </DCArtboard>
        <DCArtboard id="card" label="Business card" width={460} height={520}>
          <CardBoard />
        </DCArtboard>
        <DCArtboard id="tokens" label="Tokens" width={420} height={280}>
          <TokensBoard />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
