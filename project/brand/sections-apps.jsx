// Pulso — Brand book: aplicações + tagline final.

const { color: aC, font: aF } = window.PULSO;

// Pequeno cartão de visita
function CartaoFrente() {
  return (
    <div style={{
      width: 360, height: 210, background: aC.black, padding: 28, boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      boxShadow: `inset 0 0 0 1px ${aC.surface}`,
      position: 'relative', overflow: 'hidden',
    }}>
      <HLockup size={28} id="ct-f" />
      <div>
        <div style={{ fontFamily: aF.family, fontWeight: 600, fontSize: 16, color: aC.white, letterSpacing: '-0.02em' }}>Marina Caldeira</div>
        <div style={{ fontFamily: aF.family, fontSize: 12, color: aC.muted, marginTop: 2, letterSpacing: '-0.005em' }}>Sócia · Performance</div>
        <div style={{ marginTop: 14, fontFamily: aF.mono, fontSize: 10, color: aC.muted, letterSpacing: '0.04em', lineHeight: 1.7 }}>
          marina@pulso.ag<br/>
          +55 11 9 9842-1077
        </div>
      </div>
    </div>
  );
}
function CartaoVerso() {
  return (
    <div style={{
      width: 360, height: 210, background: aC.red,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <ApertureMark size={96} ink={aC.white} bg={aC.red} id="ct-v" />
      <Mono color="rgba(255,255,255,0.55)" size={9} style={{ position: 'absolute', bottom: 18, right: 22 }}>pulso.ag</Mono>
    </div>
  );
}

// Mock de site / hero
function SiteMock() {
  return (
    <div style={{
      width: '100%', height: 520, background: aC.black,
      boxShadow: `inset 0 0 0 1px ${aC.surface}`, padding: 32, boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <HLockup size={20} id="site-nav" />
        <div style={{ display: 'flex', gap: 22, alignItems: 'center', fontFamily: aF.family, fontSize: 12, color: aC.muted, letterSpacing: '-0.005em' }}>
          <span>O método</span>
          <span>Cases</span>
          <span>Planos</span>
          <span style={{
            color: aC.white, background: aC.red, padding: '8px 14px',
            fontFamily: aF.family, fontWeight: 500, fontSize: 12, letterSpacing: '-0.005em',
          }}>Falar com a Pulso →</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 720 }}>
        <Mono color={aC.red}>Marketing para açougue · delivery</Mono>
        <div style={{
          fontFamily: aF.family, fontWeight: 800, fontSize: 64,
          color: aC.white, letterSpacing: '-0.04em', lineHeight: 1.02,
        }}>
          A gente faz seu açougue<br/>
          vender <span style={{ color: aC.red }}>kit todo mês.</span>
        </div>
        <div style={{ fontFamily: aF.family, fontSize: 16, color: aC.muted, maxWidth: 540, lineHeight: 1.55, letterSpacing: '-0.005em' }}>
          Não só no fim de semana. A gente arruma sua quarta de manhã, seu domingo à noite, e o cliente que comprou uma vez e nunca mais voltou.
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', gap: 40 }}>
          {[
            ['+38%', 'pedidos em 30d'],
            ['R$ 87', 'ticket médio'],
            ['41%', 'recompra mês'],
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: aF.family, fontWeight: 700, fontSize: 32, color: aC.white, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>{s[0]}</div>
              <div style={{ fontFamily: aF.family, fontSize: 11, color: aC.muted, marginTop: 2, letterSpacing: '-0.005em' }}>{s[1]}</div>
            </div>
          ))}
        </div>
        <Mono color={aC.muted} size={9}>média · clientes ativos · jan–mar 2026</Mono>
      </div>
    </div>
  );
}

// Mock de social — quadrado com mensagem
function Social({ bg, ink, slit, headline, kicker, footer }) {
  return (
    <div style={{
      width: '100%', aspectRatio: '1 / 1', background: bg, color: ink,
      padding: 28, boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Mono color={ink === aC.white ? aC.red : aC.red} size={10}>{kicker}</Mono>
        <ApertureMark size={26} ink={ink} bg={bg} slit={slit} id={`soc-${kicker}`} />
      </div>
      <div style={{
        fontFamily: aF.family, fontWeight: 700, fontSize: 28,
        letterSpacing: '-0.03em', lineHeight: 1.08, textWrap: 'pretty',
      }}>{headline}</div>
      <Mono color={ink === aC.white ? aC.muted : 'rgba(12,12,12,0.55)'} size={9}>{footer}</Mono>
    </div>
  );
}

// App icon
function AppIcon({ bg, ink, slit, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: 132, height: 132, borderRadius: 30, background: bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: bg === aC.black
          ? `inset 0 0 0 1px ${aC.surface}, 0 20px 50px rgba(0,0,0,0.5)`
          : '0 20px 50px rgba(200,40,30,0.25)',
      }}>
        <ApertureMark size={86} ink={ink} bg={bg} slit={slit} id={`app-${label}`} />
      </div>
      <Mono color={aC.muted} size={9}>{label}</Mono>
    </div>
  );
}

function Aplicacoes() {
  return (
    <Section id="aplicacoes" num="10" kicker="Aplicações" title="A marca no mundo real."
      lead="Demonstrações de como a Pulso aparece em cada superfície. Use como referência para qualquer peça nova: se não parece com isso, está fora do sistema.">

      {/* Site mock */}
      <div style={{ marginBottom: 56 }}>
        <Mono color={aC.muted}>Marketing site</Mono>
        <div style={{ marginTop: 16 }}>
          <SiteMock />
        </div>
      </div>

      {/* Cards + app icons */}
      <div style={{ marginBottom: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        <div>
          <Mono color={aC.muted}>Cartão de visita</Mono>
          <div style={{ marginTop: 16, display: 'flex', gap: 20, justifyContent: 'center', background: aC.surface, padding: '48px 24px' }}>
            <CartaoFrente />
            <CartaoVerso />
          </div>
        </div>
        <div>
          <Mono color={aC.muted}>App icon · 1024²</Mono>
          <div style={{ marginTop: 16, display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'center', background: aC.surface, padding: '48px 24px', minHeight: 192 }}>
            <AppIcon bg={aC.black} ink={aC.white} slit={aC.red} label="Pulse · padrão" />
            <AppIcon bg={aC.red} ink={aC.white} slit="bg" label="Pulse · campanha" />
          </div>
        </div>
      </div>

      {/* Social */}
      <div style={{ marginBottom: 56 }}>
        <Mono color={aC.muted}>Posts sociais · 1080²</Mono>
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Social bg={aC.black} ink={aC.white} slit="bg"
            kicker="DIAGNÓSTICO · 03"
            headline="Quarta-feira é o dia mais fraco do seu açougue. Ainda."
            footer="pulso · marketing de açougue" />
          <Social bg={aC.red} ink={aC.white} slit="bg"
            kicker="MÉTODO · 01"
            headline="A gente testa, mede, e mantém só o que dá dinheiro."
            footer="pulso · pulso.ag" />
          <Social bg={aC.white} ink={aC.black} slit={aC.red}
            kicker="CASE · MARÉ DOURADA"
            headline="+38% em pedidos no primeiro mês. Sem aumentar verba."
            footer="pulso · maré dourada · zona leste" />
        </div>
      </div>

      {/* Embalagem / etiqueta */}
      <div style={{ marginBottom: 16 }}>
        <Mono color={aC.muted}>Etiqueta de produto · co-branding com o açougue</Mono>
        <div style={{ marginTop: 16, display: 'flex', gap: 16, background: aC.surface, padding: '40px 32px', justifyContent: 'center', alignItems: 'center' }}>
          {/* Etiqueta 1 */}
          <div style={{
            width: 260, padding: '20px 22px', background: aC.white, color: aC.black,
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: aF.family, fontWeight: 600, fontSize: 14, letterSpacing: '-0.02em' }}>Maré Dourada · Açougue</span>
              <Mono color={aC.red} size={9}>LOTE 0418</Mono>
            </div>
            <div style={{ fontFamily: aF.family, fontWeight: 700, fontSize: 28, letterSpacing: '-0.03em', lineHeight: 1, marginTop: 8 }}>Kit Churrasco<br/>4 pessoas</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 14 }}>
              <div style={{ fontFamily: aF.mono, fontSize: 10, color: '#6B6B6B', letterSpacing: '0.04em' }}>
                picanha · linguiça<br/>frango · pão de alho
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <ApertureMark size={20} ink={aC.black} bg={aC.white} id="et1" />
                <Wordmark size={16} ink={aC.black} />
              </div>
            </div>
          </div>
          {/* Etiqueta 2 */}
          <div style={{
            width: 200, padding: '20px 22px', background: aC.black,
            display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between', minHeight: 168,
          }}>
            <ApertureMark size={26} id="et2" />
            <div>
              <div style={{ fontFamily: aF.family, fontSize: 11, color: aC.muted, letterSpacing: '-0.005em' }}>Promo de quarta</div>
              <div style={{ fontFamily: aF.family, fontWeight: 700, fontSize: 26, color: aC.white, letterSpacing: '-0.03em', lineHeight: 1, marginTop: 4 }}>
                Picanha<br/>R$ 64<span style={{ color: aC.red }}>,90</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---------- 11 TAGLINE ----------
function Tagline() {
  return (
    <section id="tagline" style={{
      padding: '160px 80px 200px',
      borderTop: `1px solid ${aC.surface}`,
      background: aC.black,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ marginLeft: 152, maxWidth: 1100 }}>
        <Mono color={aC.red}>11 · Tagline principal</Mono>
        <div style={{
          marginTop: 36,
          fontFamily: aF.family, fontWeight: 800, fontSize: 88,
          color: aC.white, letterSpacing: '-0.045em', lineHeight: 0.98,
          textWrap: 'balance',
        }}>
          Fazemos seu açougue<br/>
          vender kits <span style={{ color: aC.red }}>todo mês</span> —<br/>
          não só no final de semana.
        </div>
        <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 24 }}>
          <ApertureMark size={48} id="tag-end" slit={aC.red} />
          <div style={{ fontFamily: aF.family, fontSize: 14, color: aC.muted, letterSpacing: '-0.005em' }}>
            Diretrizes de marca · Pulso · v1 · 2026<br/>
            <span style={{ color: aC.white }}>Cola isso no início de qualquer conversa de design.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Aplicacoes, Tagline });
