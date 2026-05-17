// Pulso — Marca: ApertureMark (símbolo) + Wordmark + Lockups.
// "letra P com fresta horizontal — o sinal passa pela letra".

const { black: BLACK, surface: SURFACE, white: WHITE, red: RED, muted: MUTED } = window.PULSO.color;

// --- Símbolo: P minúsculo com fresta horizontal ---------------------------
function ApertureMark({
  size = 120,
  ink = WHITE,
  bg = BLACK,
  slit = 'bg',          // 'bg' = fresta é o fundo (negativa); ou cor (ex: RED)
  id = 'ap',
}) {
  const BOWL_CX = 52, BOWL_CY = 38, BOWL_R = 32, COUNTER_R = 15;
  const STEM_X = 12, STEM_Y = 6, STEM_W = 14, STEM_H = 88;
  const SLIT_Y = 37, SLIT_H = 4.5;
  const slitColor = slit === 'bg' ? bg : slit;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-label="Pulso">
      <defs>
        <mask id={`${id}-slit`}>
          <rect width="100" height="100" fill="white" />
          <rect x="12" y={SLIT_Y} width="76" height={SLIT_H} fill="black" />
        </mask>
      </defs>
      <g mask={`url(#${id}-slit)`}>
        <circle cx={BOWL_CX} cy={BOWL_CY} r={BOWL_R} fill={ink} />
        <rect x={STEM_X} y={STEM_Y} width={STEM_W} height={STEM_H} rx="1.5" fill={ink} />
      </g>
      <circle cx={BOWL_CX} cy={BOWL_CY} r={COUNTER_R} fill={bg} />
      {slit !== 'bg' && (
        <rect x="12" y={SLIT_Y} width="76" height={SLIT_H} fill={slitColor} />
      )}
    </svg>
  );
}

// --- Wordmark — Geist 500, tracking −0.045em, sempre caixa baixa ----------
function Wordmark({ size = 60, ink = WHITE, accent = null }) {
  return (
    <span
      style={{
        fontFamily: window.PULSO.font.family,
        fontWeight: 500,
        fontSize: size,
        letterSpacing: '-0.045em',
        color: ink,
        lineHeight: 1,
        display: 'inline-block',
        whiteSpace: 'nowrap',
      }}
    >
      {accent ? (<>puls<span style={{ color: accent }}>o</span></>) : 'pulso'}
    </span>
  );
}

// --- Horizontal lockup ----------------------------------------------------
function HLockup({ size = 64, ink = WHITE, bg = BLACK, slit = 'bg', id = 'h' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.20 }}>
      <ApertureMark size={size * 0.78} ink={ink} bg={bg} slit={slit} id={id} />
      <Wordmark size={size} ink={ink} />
    </div>
  );
}

// --- Vertical lockup ------------------------------------------------------
function VLockup({ size = 120, ink = WHITE, bg = BLACK, slit = 'bg', id = 'v' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.20 }}>
      <ApertureMark size={size} ink={ink} bg={bg} slit={slit} id={id} />
      <Wordmark size={size * 0.52} ink={ink} />
    </div>
  );
}

Object.assign(window, { ApertureMark, Wordmark, HLockup, VLockup });
