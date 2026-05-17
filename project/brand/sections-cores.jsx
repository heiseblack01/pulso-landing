// Pulso — Brand book: cores.

const { color: cC, font: cF } = window.PULSO;

function Swatch({ token, name, hex, usage, dark = false, big = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{
        background: hex, height: big ? 280 : 200, padding: '20px 22px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        color: dark ? cC.black : cC.white,
        boxShadow: hex === cC.white ? `inset 0 0 0 1px ${cC.surface}` : 'none',
      }}>
        <div style={{ fontFamily: cF.mono, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7 }}>{token}</div>
        <div>
          <div style={{ fontFamily: cF.family, fontWeight: 600, fontSize: 20, letterSpacing: '-0.02em' }}>{name}</div>
          <div style={{ fontFamily: cF.mono, fontSize: 12, opacity: 0.7, marginTop: 4 }}>{hex.toUpperCase()}</div>
        </div>
      </div>
      <div style={{
        padding: '14px 22px', background: cC.surface,
        fontFamily: cF.family, fontSize: 13, color: cC.muted, lineHeight: 1.5, letterSpacing: '-0.005em',
      }}>{usage}</div>
    </div>
  );
}

function Cores() {
  return (
    <Section id="cores" num="06" kicker="Paleta" title="Cinco cores. Cada uma com função."
      lead="A paleta é restrita por princípio. Preto carrega, branco respira, cinza orienta, vermelho sinaliza. Sem gradientes, sem tons pastéis, sem variações cromáticas.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
        <Swatch token="--pulso-black" name="Pulso Black" hex={cC.black}
          usage="Fundo principal. Base da marca. 70% das superfícies." />
        <Swatch token="--pulso-surface" name="Surface" hex={cC.surface}
          usage="Cards, divisórias, camadas sobre preto. Cria profundidade sem brilho." />
        <Swatch token="--pulso-muted" name="Muted" hex={cC.muted}
          usage="Texto secundário, legendas, bordas suaves, estados desabilitados." />
        <Swatch token="--pulso-white" name="Pulso White" hex={cC.white} dark
          usage="Texto principal sobre escuro. Fundo de materiais impressos. Off-white levemente quente." />
        <Swatch token="--pulso-red" name="Pulso Red" hex={cC.red}
          usage="CTAs, ênfase, labels críticos, bordas de alerta. Uso pontual." />
      </div>

      <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        <div>
          <Mono color={cC.red}>Regra do vermelho</Mono>
          <P style={{ marginTop: 14, fontSize: 16 }}>
            O vermelho nunca preenche grandes áreas como fundo. Ele aparece em CTAs primários, labels de destaque, bordas de ênfase e elementos que exigem ação. Se você usar vermelho em mais de 10% da composição, está usando demais.
          </P>
        </div>
        <div>
          <Mono color={cC.muted}>Proporção sugerida</Mono>
          <div style={{ marginTop: 14, display: 'flex', height: 56, overflow: 'hidden' }}>
            <div style={{ flex: 60, background: cC.black, borderTop: `1px solid ${cC.surface}`, borderBottom: `1px solid ${cC.surface}` }}/>
            <div style={{ flex: 22, background: cC.surface }}/>
            <div style={{ flex: 13, background: cC.white }}/>
            <div style={{ flex: 5,  background: cC.red }}/>
          </div>
          <div style={{ marginTop: 10, display: 'flex', fontFamily: cF.mono, fontSize: 10, color: cC.muted, letterSpacing: '0.04em' }}>
            <div style={{ flex: 60 }}>BLACK · 60</div>
            <div style={{ flex: 22 }}>SURFACE · 22</div>
            <div style={{ flex: 13 }}>WHITE · 13</div>
            <div style={{ flex: 5 }}>RED · 5</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 48 }}>
        <Mono color={cC.muted}>Contraste · texto sobre fundo</Mono>
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            { bg: cC.black,   ink: cC.white, label: 'AAA', ratio: '17.6 : 1' },
            { bg: cC.surface, ink: cC.white, label: 'AAA', ratio: '14.1 : 1' },
            { bg: cC.white,   ink: cC.black, label: 'AAA', ratio: '18.4 : 1' },
            { bg: cC.red,     ink: cC.white, label: 'AA',  ratio: '5.1 : 1'  },
          ].map((c, i) => (
            <div key={i} style={{
              background: c.bg, color: c.ink, padding: '20px 22px',
              height: 120, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              boxShadow: c.bg === cC.white ? `inset 0 0 0 1px ${cC.surface}` : 'none',
            }}>
              <div style={{ fontFamily: cF.family, fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em' }}>Aa</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: cF.mono, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.75 }}>{c.label}</span>
                <span style={{ fontFamily: cF.mono, fontSize: 10, opacity: 0.75 }}>{c.ratio}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { Cores });
