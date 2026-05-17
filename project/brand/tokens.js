// Pulso — Brand tokens.
// Fonte única de verdade para cores, tipografia e medidas.

window.PULSO = {
  color: {
    black:   '#0C0C0C', // fundo principal, base da marca
    surface: '#1A1A1A', // superfícies, cards, camadas
    muted:   '#6B6B6B', // texto secundário, bordas suaves
    white:   '#F5F5F3', // contraste, texto principal sobre escuro
    red:     '#C8281E', // destaque, CTAs, ênfase — uso pontual
  },
  font: {
    family: '"Geist", system-ui, -apple-system, sans-serif',
    mono:   '"Geist Mono", ui-monospace, monospace',
  },
  type: {
    display: { weight: 800, tracking: '-0.04em',  size: '64px' },
    h1:      { weight: 700, tracking: '-0.03em',  size: '32px' },
    h2:      { weight: 600, tracking: '-0.02em',  size: '22px' },
    body:    { weight: 400, tracking: '0',        size: '15px' },
    label:   { weight: 500, tracking: '0.08em',   size: '11px' }, // uppercase
    wordmark:{ weight: 500, tracking: '-0.045em', size: '—'    }, // exclusivo do logo
  },
};
