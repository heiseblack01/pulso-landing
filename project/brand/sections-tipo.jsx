// Pulso — Brand book: tipografia.

const { color: tC, font: tF } = window.PULSO;

function TypeRow({ token, weight, size, tracking, sample, transform = 'none' }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '180px 1fr 200px', gap: 32,
      alignItems: 'baseline', padding: '32px 0', borderTop: `1px solid ${tC.surface}`,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Mono color={tC.red} size={10}>{token}</Mono>
        <span style={{ fontFamily: tF.family, fontSize: 13, color: tC.muted, letterSpacing: '-0.005em' }}>
          Geist {weight}
        </span>
      </div>
      <div style={{
        fontFamily: tF.family, fontWeight: weight, fontSize: parseInt(size),
        letterSpacing: tracking, color: tC.white, lineHeight: 1.05,
        textTransform: transform,
      }}>{sample}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: tF.mono, fontSize: 11, color: tC.muted, letterSpacing: '0.02em' }}>
        <div>{size}</div>
        <div>tracking {tracking}</div>
      </div>
    </div>
  );
}

function Tipografia() {
  return (
    <Section id="tipo" num="07" kicker="Tipografia" title="Geist. Uma fonte, seis funções."
      lead="A marca usa Geist em toda comunicação. Mono só em códigos, valores numéricos e legendas técnicas. Hierarquia é feita por peso e tamanho — não por cor ou enfeite.">

      <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 16 }}>
        <div style={{
          fontFamily: tF.family, fontWeight: 700, fontSize: 280,
          color: tC.white, letterSpacing: '-0.05em', lineHeight: 0.85,
        }}>Aa</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <Mono color={tC.muted}>Família principal</Mono>
            <div style={{ fontFamily: tF.family, fontWeight: 700, fontSize: 40, color: tC.white, letterSpacing: '-0.03em', marginTop: 8 }}>Geist</div>
            <div style={{ fontFamily: tF.mono, fontSize: 12, color: tC.muted, marginTop: 4, letterSpacing: '0.04em' }}>Google Fonts · variável · 300–800</div>
          </div>
          <div>
            <Mono color={tC.muted}>Família mono</Mono>
            <div style={{ fontFamily: tF.mono, fontWeight: 500, fontSize: 28, color: tC.white, marginTop: 8 }}>Geist Mono</div>
            <div style={{ fontFamily: tF.mono, fontSize: 12, color: tC.muted, marginTop: 4, letterSpacing: '0.04em' }}>Uso técnico · números · legendas</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <TypeRow token="Display"  weight={800} size="64px" tracking="-0.04em"
          sample="Pedido todo dia." />
        <TypeRow token="Heading 1" weight={700} size="32px" tracking="-0.03em"
          sample="Mais cliente. Mais ticket. Mais recorrência." />
        <TypeRow token="Heading 2" weight={600} size="22px" tracking="-0.02em"
          sample="Como a gente faz o açougue vender." />
        <TypeRow token="Body"     weight={400} size="15px" tracking="0"
          sample="Você não precisa de mais alcance. Precisa de mais gente comprando — e voltando na semana seguinte. É nisso que a gente trabalha." />
        <TypeRow token="Label / UI" weight={500} size="11px" tracking="0.08em"
          sample="MARKETING · DELIVERY · AÇOUGUE" transform="uppercase" />
        <TypeRow token="Wordmark" weight={500} size="48px" tracking="-0.045em"
          sample="pulso" />
      </div>

      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        <div style={{ background: tC.surface, padding: '32px 36px' }}>
          <Mono color={tC.red}>Regra de hierarquia</Mono>
          <P style={{ marginTop: 14, fontSize: 14, color: tC.white }}>
            Toda peça tem <strong style={{ fontWeight: 600 }}>uma manchete</strong>, no máximo. Display ou H1 — não ambos. O resto sustenta. Se você precisa de duas manchetes, é porque a peça precisa virar duas peças.
          </P>
        </div>
        <div style={{ background: tC.surface, padding: '32px 36px' }}>
          <Mono color={tC.red}>Numerais</Mono>
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 28 }}>
            <span style={{ fontFamily: tF.family, fontWeight: 700, fontSize: 56, color: tC.white, letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}>R$ 12.480</span>
            <span style={{ fontFamily: tF.family, fontWeight: 700, fontSize: 56, color: tC.red, letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}>+38%</span>
          </div>
          <P style={{ marginTop: 12, fontSize: 13, color: tC.muted }}>
            Números sempre em tabular-nums quando comparados. Vermelho marca delta positivo de resultado.
          </P>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { Tipografia });
