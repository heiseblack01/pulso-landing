// Pulso logo marks — reusable SVG components.
// Reads runtime config from MarkConfig context so a single Tweaks panel
// can drive the visual variants of every artboard at once. Direct props
// (accent, ink) still take precedence for context-specific renderings
// like on-red / on-white variants.

const PULSO_ACCENT = '#D92B2B';
const PULSO_INK = '#F5F5F4';
const PULSO_BG = '#080808';

const MarkConfig = React.createContext({
  ekgStyle: 'qrs',       // 'qrs' | 'single'
  glowLevel: 'subtle',   // 'none' | 'subtle' | 'strong'
  font: 'Space Grotesk', // any loaded font family
});

const EKG_PATHS = {
  // Full PQRST waveform — classic heart-monitor read
  qrs: 'M 60 120 L 110 120 L 118 108 L 128 132 L 140 50 L 152 148 L 162 120 L 282 120',
  // Single confident spike — cleaner, more Nubank/Stone-feeling
  single: 'M 60 120 L 125 120 L 145 50 L 165 120 L 282 120',
};

function _glowParams(level) {
  if (level === 'none') return { halo: false, stdDev: 0, haloR: 0, haloOpacity: 0, useFilter: false };
  if (level === 'subtle') return { halo: true, stdDev: 2.2, haloR: 13, haloOpacity: 0.18, useFilter: true };
  return { halo: true, stdDev: 4.5, haloR: 18, haloOpacity: 0.32, useFilter: true }; // strong
}

// --- Primary mark: P with EKG -----------------------------------------------
function PEkgMark({ size = 220, accent, ink, id = 'pe', forceEkgStyle, forceGlow }) {
  const cfg = React.useContext(MarkConfig);
  const _accent = accent || cfg.accent || PULSO_ACCENT;
  const _ink = ink || PULSO_INK;
  const ekgStyle = forceEkgStyle || cfg.ekgStyle;
  const glowLevel = forceGlow || cfg.glowLevel;
  const stroke = 22;
  const g = _glowParams(glowLevel);

  return (
    <svg width={size} height={size * 240 / 320} viewBox="0 0 320 240" fill="none" aria-label="Pulso icon">
      {g.useFilter && (
        <defs>
          <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={g.stdDev} result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}

      <path
        d="M 60 215 V 30 H 130 A 45 45 0 0 1 130 120"
        stroke={_ink}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <path
        d={EKG_PATHS[ekgStyle] || EKG_PATHS.qrs}
        stroke={_accent}
        strokeWidth={stroke - 4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {g.halo && (
        <circle cx="290" cy="120" r={g.haloR} fill={_accent} opacity={g.haloOpacity} filter={g.useFilter ? `url(#${id}-glow)` : undefined} />
      )}
      <circle cx="290" cy="120" r="9" fill={_accent} />
      <circle cx="290" cy="120" r="3.2" fill={_ink} opacity="0.95" />
    </svg>
  );
}

// --- Secondary mark: Radar/Sonar pulse --------------------------------------
function RadarMark({ size = 220, accent, ink, id = 'rd', forceGlow }) {
  const cfg = React.useContext(MarkConfig);
  const _accent = accent || cfg.accent || PULSO_ACCENT;
  const _ink = ink || PULSO_INK;
  const glowLevel = forceGlow || cfg.glowLevel;
  const g = _glowParams(glowLevel);

  return (
    <svg width={size} height={size} viewBox="0 0 240 240" fill="none" aria-label="Pulso radar mark">
      {g.useFilter && (
        <defs>
          <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={g.stdDev + 0.5} result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}

      <circle cx="120" cy="120" r="98" stroke={_ink} strokeWidth="3" opacity="0.4" fill="none" />
      <circle cx="120" cy="120" r="68" stroke={_ink} strokeWidth="5" opacity="0.65" fill="none" />
      <circle cx="120" cy="120" r="40" stroke={_ink} strokeWidth="7" fill="none" />

      {g.halo && (
        <circle cx="120" cy="120" r={g.haloR + 12} fill={_accent} opacity={g.haloOpacity} filter={g.useFilter ? `url(#${id}-glow)` : undefined} />
      )}
      <circle cx="120" cy="120" r="14" fill={_accent} />
    </svg>
  );
}

// --- Wordmark ---------------------------------------------------------------
function Wordmark({ height = 64, ink, font }) {
  const cfg = React.useContext(MarkConfig);
  const _ink = ink || PULSO_INK;
  const _font = font || cfg.font || 'Space Grotesk';
  // Per-font letter-spacing tuned so optical density feels equivalent.
  const tracking = {
    'Space Grotesk': '-0.045em',
    'Sora': '-0.055em',
    'Manrope': '-0.04em',
  }[_font] || '-0.04em';

  return (
    <span
      style={{
        fontFamily: `"${_font}", system-ui, sans-serif`,
        fontWeight: 600,
        fontSize: height,
        letterSpacing: tracking,
        color: _ink,
        lineHeight: 1,
        display: 'inline-block',
        whiteSpace: 'nowrap',
      }}
    >
      pulso
    </span>
  );
}

// --- Lockups ---------------------------------------------------------------
function HLockup({ size = 88, gap = 10, ink, accent, id = 'h' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap }}>
      <PEkgMark size={size} ink={ink} accent={accent} id={id} />
      <Wordmark height={size * 0.66} ink={ink} />
    </div>
  );
}

function VLockup({ size = 140, gap = 18, ink, accent, id = 'v' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap }}>
      <PEkgMark size={size} ink={ink} accent={accent} id={id} />
      <Wordmark height={size * 0.36} ink={ink} />
    </div>
  );
}

Object.assign(window, {
  PEkgMark, RadarMark, Wordmark, HLockup, VLockup,
  PULSO_ACCENT, PULSO_INK, PULSO_BG, MarkConfig, EKG_PATHS,
});
