// Pulso — Aperture mark system.
// Lowercase "p" with a single horizontal aperture cut through the bowl.
// The pulse is the red slit — signal passing through the letter.

const PULSO_INK = '#F2F0EB';   // warm off-white
const PULSO_BG = '#0B0B0D';     // near-black
const PULSO_RED = '#FF2D2D';    // accent (the pulse)

// --- Aperture mark ---------------------------------------------------------
// Monochrome lowercase "p" with a horizontal slit cut through. The slit is
// pure negative space — no fill, no color.
function ApertureMark({
  size = 120,
  ink = PULSO_INK,
  bg = PULSO_BG,
  accent = PULSO_RED,
  showAccent = false,
  id = 'ap',
}) {
  const STEM_X = 12, STEM_Y = 6, STEM_W = 14, STEM_H = 88;
  const BOWL_CX = 52, BOWL_CY = 38, BOWL_R = 32, COUNTER_R = 15;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-label="Pulso">
      <defs>
        <mask id={`${id}-slit`}>
          <rect width="100" height="100" fill="white" />
          <rect x="12" y="37" width="76" height="4.5" fill="black" />
        </mask>
      </defs>
      <g mask={`url(#${id}-slit)`}>
        <circle cx={BOWL_CX} cy={BOWL_CY} r={BOWL_R} fill={ink} />
        <rect x={STEM_X} y={STEM_Y} width={STEM_W} height={STEM_H} rx="1.5" fill={ink} />
      </g>
      <circle cx={BOWL_CX} cy={BOWL_CY} r={COUNTER_R} fill={bg} />
    </svg>
  );
}

// --- Wordmark --------------------------------------------------------------
// Geist 500, tight negative tracking. Renders the "o" in accent for an
// optional flourish; default is monochrome.
function Wordmark({ height = 60, ink = PULSO_INK, accent = PULSO_RED, accentLast = false }) {
  return (
    <span
      style={{
        fontFamily: '"Geist", system-ui, sans-serif',
        fontWeight: 500,
        fontSize: height,
        letterSpacing: '-0.045em',
        color: ink,
        lineHeight: 1,
        display: 'inline-block',
        whiteSpace: 'nowrap',
      }}
    >
      {accentLast ? (
        <>puls<span style={{ color: accent }}>o</span></>
      ) : 'pulso'}
    </span>
  );
}

// --- Horizontal lockup ----------------------------------------------------
// Proportion rule (corrected): the icon's bowl is geometrically denser than
// any letter in the wordmark. To balance optically, the icon's overall height
// matches the wordmark's CAP height, not its font-size. Geist 500 cap height
// is ~0.72em, so icon = wordmark font-size × 0.78 sits the icon's top with
// the ascender of "l" and its descender stem with the descender of "p".
function HLockup({ size = 64, ink = PULSO_INK, bg = PULSO_BG, accent = PULSO_RED, showAccent = true, id = 'h' }) {
  const iconSize = size * 0.78;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.18 }}>
      <ApertureMark size={iconSize} ink={ink} bg={bg} accent={accent} showAccent={showAccent} id={id} />
      <Wordmark height={size} ink={ink} />
    </div>
  );
}

function VLockup({ size = 120, ink = PULSO_INK, bg = PULSO_BG, accent = PULSO_RED, showAccent = true, id = 'v' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.18 }}>
      <ApertureMark size={size} ink={ink} bg={bg} accent={accent} showAccent={showAccent} id={id} />
      <Wordmark height={size * 0.52} ink={ink} />
    </div>
  );
}

Object.assign(window, {
  ApertureMark, Wordmark, HLockup, VLockup,
  PULSO_INK, PULSO_BG, PULSO_RED,
});
