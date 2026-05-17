// Pulso brand sheet — design canvas of every artboard.

const DARK = '#080808';
const INK = '#F5F5F4';
const ACCENT = '#D92B2B';

// Reusable artboard surface — dark fill, optional grid, content centered.
function Board({ children, bg = DARK, padding = 0, style }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding,
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Caption({ children, color = 'rgba(245,245,244,0.4)', size = 11, top, bottom, left = 24, right }) {
  return (
    <div
      style={{
        position: 'absolute',
        top, bottom, left, right,
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
        fontSize: size,
        fontWeight: 500,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color,
      }}
    >
      {children}
    </div>
  );
}

// --- Construction grid for the P+EKG mark -----------------------------------
function ConstructionBoard() {
  return (
    <Board padding={40}>
      <svg viewBox="0 0 320 240" width="420" height="315">
        {/* faint grid (20u) */}
        <g stroke="rgba(217,43,43,0.22)" strokeWidth="0.5">
          {Array.from({ length: 17 }, (_, i) => (
            <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="240" />
          ))}
          {Array.from({ length: 13 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 20} x2="320" y2={i * 20} />
          ))}
        </g>
        {/* baseline + cap guides */}
        <g stroke="rgba(217,43,43,0.5)" strokeDasharray="3 3" strokeWidth="0.7">
          <line x1="0" y1="30" x2="320" y2="30" />
          <line x1="0" y1="120" x2="320" y2="120" />
          <line x1="0" y1="215" x2="320" y2="215" />
        </g>
        {/* bowl construction circle */}
        <circle cx="130" cy="75" r="45" stroke="rgba(217,43,43,0.45)" strokeWidth="0.8" strokeDasharray="2 3" fill="none" />
        {/* dot target circle */}
        <circle cx="290" cy="120" r="22" stroke="rgba(217,43,43,0.45)" strokeWidth="0.8" strokeDasharray="2 3" fill="none" />

        {/* the mark itself */}
        <path
          d="M 60 215 V 30 H 130 A 45 45 0 0 1 130 120"
          stroke={INK} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        <path
          d="M 60 120 L 110 120 L 118 108 L 128 132 L 140 50 L 152 148 L 162 120 L 282 120"
          stroke={ACCENT} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        <circle cx="290" cy="120" r="9" fill={ACCENT} />
      </svg>

      <Caption top={16} left={20}>Construction · 20 unit grid</Caption>
      <Caption bottom={16} left={20}>Bowl r = 45u · Stem 22u · EKG 18u</Caption>
    </Board>
  );
}

// --- Clearspace diagram -----------------------------------------------------
function ClearspaceBoard() {
  return (
    <Board padding={40}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* clearspace box */}
        <div
          style={{
            position: 'absolute',
            inset: '-44px -44px -44px -44px',
            border: '1px dashed rgba(217,43,43,0.5)',
            borderRadius: 4,
          }}
        />
        {/* x markers in corners */}
        {[
          { top: -52, left: -52 }, { top: -52, right: -52 },
          { bottom: -52, left: -52 }, { bottom: -52, right: -52 },
        ].map((p, i) => (
          <div key={i} style={{
            position: 'absolute', ...p, width: 16, height: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: ACCENT, fontFamily: '"Space Grotesk", sans-serif', fontSize: 14,
          }}>×</div>
        ))}
        <HLockup size={70} id="cs" />
      </div>
      <Caption top={16} left={20}>Clearspace · x = cap height ÷ 2</Caption>
    </Board>
  );
}

// --- App icon (rounded square, scaled-up mark) -------------------------------
function AppIconBoard() {
  return (
    <Board padding={36}>
      <div
        style={{
          width: 200, height: 200, borderRadius: 44,
          background: '#0f0f0f',
          boxShadow: '0 24px 60px rgba(217,43,43,0.18), inset 0 0 0 1px rgba(255,255,255,0.04)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <PEkgMark size={140} id="app" />
      </div>
      <Caption top={16} left={20}>iOS / Android · 1024²</Caption>
    </Board>
  );
}

// --- Favicon row ------------------------------------------------------------
function FaviconBoard() {
  const sizes = [16, 24, 32, 48, 64];
  return (
    <Board padding={36} style={{ flexDirection: 'column', gap: 26 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28 }}>
        {sizes.map((s) => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: s + 12, height: s + 12, borderRadius: Math.max(4, s * 0.22),
                background: '#0f0f0f', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <PEkgMark size={s} forceGlow="none" id={`fav${s}`} />
            </div>
            <span style={{
              fontFamily: '"Space Grotesk", sans-serif', fontSize: 10,
              color: 'rgba(245,245,244,0.4)', letterSpacing: '0.1em',
            }}>{s}</span>
          </div>
        ))}
      </div>
      <Caption top={16} left={20}>Favicon scale</Caption>
    </Board>
  );
}

// --- Avatar / social profile -----------------------------------------------
function AvatarBoard() {
  const cfg = React.useContext(MarkConfig);
  const accent = cfg.accent || ACCENT;
  return (
    <Board padding={36}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <div style={{
          width: 140, height: 140, borderRadius: '50%',
          background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <PEkgMark size={92} accent={'#0a0a0a'} ink={INK} id="av1" />
        </div>
        <div style={{
          width: 140, height: 140, borderRadius: '50%',
          background: '#0f0f0f', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
        }}>
          <PEkgMark size={92} id="av2" />
        </div>
      </div>
      <Caption top={16} left={20}>Social avatar</Caption>
    </Board>
  );
}

// --- Business card front + back --------------------------------------------
function BusinessCardBoard() {
  const cfg = React.useContext(MarkConfig);
  const accent = cfg.accent || ACCENT;
  return (
    <Board padding={32} style={{ flexDirection: 'column', gap: 18 }}>
      {/* Front */}
      <div style={{
        width: 360, height: 210, borderRadius: 6, background: DARK,
        boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
        padding: 22, boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <HLockup size={42} gap={12} id="bc1" />
        <div style={{
          fontFamily: `"${cfg.font || 'Space Grotesk'}", sans-serif`, fontSize: 11,
          color: 'rgba(245,245,244,0.55)', letterSpacing: '0.04em', lineHeight: 1.5,
        }}>
          <div style={{ color: INK, fontWeight: 600, fontSize: 13, marginBottom: 4 }}>Marina Caldeira</div>
          <div>Head of Performance</div>
          <div style={{ marginTop: 8, color: 'rgba(245,245,244,0.4)' }}>marina@pulso.io · +55 11 4040 0099</div>
        </div>
      </div>
      {/* Back */}
      <div style={{
        width: 360, height: 210, borderRadius: 6, background: accent,
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <RadarMark size={150} ink={'#0a0a0a'} accent={INK} id="bc2" />
        <div style={{
          position: 'absolute', bottom: 16, right: 18,
          fontFamily: `"${cfg.font || 'Space Grotesk'}", sans-serif`, fontSize: 10,
          color: 'rgba(8,8,8,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600,
        }}>pulso.io</div>
      </div>
      <Caption top={16} left={20}>Business card · 85 × 55 mm</Caption>
    </Board>
  );
}

// --- Billboard / hero placement --------------------------------------------
function HeroBoard() {
  const cfg = React.useContext(MarkConfig);
  const accent = cfg.accent || ACCENT;
  return (
    <Board padding={56}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, width: '100%' }}>
        <HLockup size={64} id="hero" />
        <div style={{
          fontFamily: `"${cfg.font || 'Space Grotesk'}", system-ui, sans-serif`,
          fontSize: 56, fontWeight: 500, color: INK,
          letterSpacing: '-0.035em', lineHeight: 1.02, maxWidth: 720,
        }}>
          We make brands<br />
          <span style={{ color: accent }}>register a pulse.</span>
        </div>
        <div style={{
          fontFamily: `"${cfg.font || 'Space Grotesk'}", system-ui, sans-serif`, fontSize: 15, fontWeight: 400,
          color: 'rgba(245,245,244,0.55)', letterSpacing: '0.005em', maxWidth: 540, lineHeight: 1.5,
        }}>
          Pulso is a performance-first digital agency for ambitious teams.
          Paid, organic, lifecycle, measured end to end.
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
          <button style={{
            background: accent, color: INK, border: 'none', padding: '13px 22px',
            borderRadius: 999, fontFamily: `"${cfg.font || 'Space Grotesk'}", sans-serif`,
            fontWeight: 600, fontSize: 14, letterSpacing: '-0.005em', cursor: 'pointer',
          }}>Start a brief →</button>
          <button style={{
            background: 'transparent', color: INK, border: '1px solid rgba(245,245,244,0.2)',
            padding: '13px 22px', borderRadius: 999, fontFamily: `"${cfg.font || 'Space Grotesk'}", sans-serif`,
            fontWeight: 500, fontSize: 14, letterSpacing: '-0.005em', cursor: 'pointer',
          }}>See work</button>
        </div>
      </div>
      <Caption top={20} right={24} left={undefined}>In context · marketing page</Caption>
    </Board>
  );
}

// --- Color swatches --------------------------------------------------------
function SwatchBoard() {
  const cfg = React.useContext(MarkConfig);
  const accent = cfg.accent || ACCENT;
  const swatches = [
    { name: 'Black', code: '#080808', usage: 'Surface', text: INK, bg: '#080808' },
    { name: 'Accent', code: accent, usage: 'Accent',  text: INK, bg: accent },
    { name: 'White', code: '#F5F5F4', usage: 'Type',    text: '#080808', bg: '#F5F5F4' },
    { name: 'Smoke', code: '#16161A', usage: 'Surface 2', text: INK, bg: '#16161A' },
  ];
  return (
    <Board padding={28} style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Caption top={16} left={20}>Palette</Caption>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, width: '100%', marginTop: 36 }}>
        {swatches.map((s) => (
          <div key={s.name} style={{
            background: s.bg, color: s.text, padding: '18px 16px', borderRadius: 4,
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
            fontFamily: '"Space Grotesk", sans-serif',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 90,
          }}>
            <div style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.02em' }}>{s.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, opacity: 0.7 }}>
              <span>{s.code}</span>
              <span style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.usage}</span>
            </div>
          </div>
        ))}
      </div>
    </Board>
  );
}

// --- Mono variants ---------------------------------------------------------
function MonoBoard({ bg, accent, ink, label, id }) {
  return (
    <Board bg={bg} padding={36}>
      <HLockup size={64} ink={ink} accent={accent} id={id} />
      <Caption
        top={16} left={20}
        color={bg === '#F5F5F4' ? 'rgba(8,8,8,0.45)' : 'rgba(245,245,244,0.4)'}
      >
        {label}
      </Caption>
    </Board>
  );
}

// --- Primary lockup --------------------------------------------------------
function PrimaryBoard() {
  return (
    <Board padding={40}>
      <HLockup size={108} gap={28} id="primary" />
      <Caption top={20} left={24}>Primary lockup · horizontal</Caption>
    </Board>
  );
}

function VerticalBoard() {
  return (
    <Board padding={40}>
      <VLockup size={150} gap={22} id="vert" />
      <Caption top={20} left={24}>Vertical lockup</Caption>
    </Board>
  );
}

function IconBoard() {
  return (
    <Board padding={40}>
      <PEkgMark size={240} id="icononly" />
      <Caption top={20} left={24}>Icon · P + pulse</Caption>
    </Board>
  );
}

function RadarBoard() {
  return (
    <Board padding={40}>
      <RadarMark size={240} id="radaronly" />
      <Caption top={20} left={24}>Secondary · radar</Caption>
    </Board>
  );
}

// --- Don't / Do row ---------------------------------------------------------
function DontsBoard() {
  return (
    <Board padding={28} style={{ alignItems: 'stretch', flexDirection: 'column' }}>
      <Caption top={16} left={20}>Do not</Caption>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
        flex: 1, marginTop: 38,
      }}>
        {[
          { svg: <PEkgMark size={70} accent="#3aa3ff" id="dont1" />, label: 'Recolor accent' },
          {
            svg: (
              <div style={{ transform: 'skewX(-12deg)' }}>
                <PEkgMark size={70} id="dont2" />
              </div>
            ),
            label: 'Skew or distort',
          },
          {
            svg: (
              <div style={{ filter: 'drop-shadow(0 0 14px rgba(217,43,43,0.9))' }}>
                <PEkgMark size={70} id="dont3" />
              </div>
            ),
            label: 'Add heavy fx',
          },
        ].map((d, i) => (
          <div key={i} style={{
            background: '#0f0f0f', borderRadius: 4,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 12, padding: 12, position: 'relative',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
          }}>
            {/* red diagonal slash */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <line x1="6%" y1="94%" x2="94%" y2="6%" stroke={ACCENT} strokeWidth="1.5" opacity="0.55" />
            </svg>
            {d.svg}
            <div style={{
              fontFamily: '"Space Grotesk", sans-serif', fontSize: 10,
              color: 'rgba(245,245,244,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>{d.label}</div>
          </div>
        ))}
      </div>
    </Board>
  );
}

// --- Tweaks defaults -----------------------------------------------------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "ekgStyle": "qrs",
  "glowLevel": "subtle",
  "font": "Space Grotesk",
  "accent": "#D92B2B"
}/*EDITMODE-END*/;

// --- The canvas ------------------------------------------------------------
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  return (
    <MarkConfig.Provider value={t}>
    <DesignCanvas>
      <DCSection id="lockup" title="Lockups" subtitle="Primary brand expressions">
        <DCArtboard id="primary" label="Primary · horizontal" width={640} height={300}>
          <PrimaryBoard />
        </DCArtboard>
        <DCArtboard id="vertical" label="Vertical" width={360} height={300}>
          <VerticalBoard />
        </DCArtboard>
        <DCArtboard id="hero" label="In context" width={720} height={460}>
          <HeroBoard />
        </DCArtboard>
      </DCSection>

      <DCSection id="marks" title="Marks" subtitle="Standalone symbols">
        <DCArtboard id="icon" label="Icon · P + pulse" width={360} height={360}>
          <IconBoard />
        </DCArtboard>
        <DCArtboard id="radar" label="Secondary · radar" width={360} height={360}>
          <RadarBoard />
        </DCArtboard>
        <DCArtboard id="construction" label="Construction" width={360} height={360}>
          <ConstructionBoard />
        </DCArtboard>
        <DCArtboard id="clearspace" label="Clearspace" width={420} height={260}>
          <ClearspaceBoard />
        </DCArtboard>
      </DCSection>

      <DCSection id="system" title="System" subtitle="Palette + monochrome behavior">
        <DCArtboard id="palette" label="Palette" width={360} height={300}>
          <SwatchBoard />
        </DCArtboard>
        <DCArtboard id="mono-dark" label="On black" width={360} height={180}>
          <MonoBoard bg={DARK} ink={INK} accent={ACCENT} label="Primary · on black" id="m1" />
        </DCArtboard>
        <DCArtboard id="mono-red" label="On red" width={360} height={180}>
          <MonoBoard bg={ACCENT} ink={INK} accent={'#080808'} label="Reversed · on red" id="m2" />
        </DCArtboard>
        <DCArtboard id="mono-white" label="On white" width={360} height={180}>
          <MonoBoard bg={'#F5F5F4'} ink={'#080808'} accent={ACCENT} label="Primary · on white" id="m3" />
        </DCArtboard>
        <DCArtboard id="mono-ink" label="Mono · ink" width={360} height={180}>
          <MonoBoard bg={DARK} ink={INK} accent={INK} label="One-color · ink" id="m4" />
        </DCArtboard>
        <DCArtboard id="donts" label="Do not" width={520} height={260}>
          <DontsBoard />
        </DCArtboard>
      </DCSection>

      <DCSection id="minimal" title="Negative space" subtitle="Stone- / Neon-style minimalism">
        <DCArtboard id="icon-massive" label="Icon · breathing room" width={680} height={420}>
          <Board padding={0}>
            <PEkgMark size={300} accent={t.accent} id="icmsv" />
            <Caption top={20} left={24}>Icon · generous space</Caption>
          </Board>
        </DCArtboard>
        <DCArtboard id="wordmark-only" label="Wordmark · alone" width={680} height={260}>
          <Board padding={0}>
            <Wordmark height={110} />
            <Caption top={20} left={24}>Wordmark only</Caption>
          </Board>
        </DCArtboard>
        <DCArtboard id="single-color" label="Mono · single color" width={680} height={260}>
          <Board padding={0}>
            <HLockup size={92} ink={INK} accent={INK} id="sc" />
            <Caption top={20} left={24}>One-color mono · same ink throughout</Caption>
          </Board>
        </DCArtboard>
      </DCSection>

      <DCSection id="apps" title="Applications" subtitle="Where it lives">
        <DCArtboard id="appicon" label="App icon" width={300} height={300}>
          <AppIconBoard />
        </DCArtboard>
        <DCArtboard id="favicon" label="Favicon" width={420} height={220}>
          <FaviconBoard />
        </DCArtboard>
        <DCArtboard id="avatar" label="Social avatar" width={420} height={260}>
          <AvatarBoard />
        </DCArtboard>
        <DCArtboard id="bcard" label="Business card" width={440} height={500}>
          <BusinessCardBoard />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>

    <TweaksPanel title="Tweaks">
      <TweakSection label="Pulse line" />
      <TweakRadio
        label="EKG style"
        value={t.ekgStyle}
        options={[
          { value: 'qrs', label: 'Full QRS' },
          { value: 'single', label: 'Single spike' },
        ]}
        onChange={(v) => setTweak('ekgStyle', v)}
      />
      <TweakRadio
        label="Glow"
        value={t.glowLevel}
        options={[
          { value: 'none', label: 'None' },
          { value: 'subtle', label: 'Subtle' },
          { value: 'strong', label: 'Strong' },
        ]}
        onChange={(v) => setTweak('glowLevel', v)}
      />

      <TweakSection label="Wordmark" />
      <TweakSelect
        label="Font"
        value={t.font}
        options={['Space Grotesk', 'Sora', 'Manrope']}
        onChange={(v) => setTweak('font', v)}
      />

      <TweakSection label="Accent" />
      <TweakColor
        label="Color"
        value={t.accent}
        options={['#D92B2B', '#FF3C00', '#39FF14', '#FFD60A', '#3D8BFD']}
        onChange={(v) => setTweak('accent', v)}
      />
    </TweaksPanel>
    </MarkConfig.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
