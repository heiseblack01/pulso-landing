// Pulso — Brand book: tom de voz + princípios visuais.

const { color: vC, font: vF } = window.PULSO;

function VozCol({ kind, items }) {
  const isYes = kind === 'sim';
  const color = isYes ? vC.white : vC.muted;
  const mark = isYes ? vC.red : vC.muted;
  return (
    <div style={{ background: vC.surface, padding: '36px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 28 }}>
        <span style={{ fontFamily: vF.family, fontWeight: 700, fontSize: 24, color: isYes ? vC.white : vC.muted, letterSpacing: '-0.02em' }}>
          {isYes ? 'Sim' : 'Não'}
        </span>
        <Mono color={mark} size={10}>{isYes ? 'A gente fala assim' : 'A gente não fala assim'}</Mono>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {items.map((it, i) => (
          <div key={i} style={{
            paddingBottom: 18,
            borderBottom: i < items.length - 1 ? `1px solid ${vC.black}` : 'none',
          }}>
            <div style={{
              fontFamily: vF.family, fontWeight: 500, fontSize: 17,
              color, letterSpacing: '-0.02em', lineHeight: 1.3,
              textDecoration: isYes ? 'none' : 'line-through',
              textDecorationColor: isYes ? 'transparent' : vC.muted,
              textDecorationThickness: '1px',
            }}>{it.line}</div>
            {it.why && (
              <div style={{ fontFamily: vF.family, fontSize: 12, color: vC.muted, marginTop: 6, letterSpacing: '-0.005em' }}>
                {it.why}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Voz() {
  return (
    <Section id="voz" num="08" kicker="Tom de voz" title="Parceiro do dono, não fornecedor de serviço."
      lead="A Pulso fala a língua de quem opera. Direta, com número, sem distância. Sem motivar, sem ensinar, sem se vender — entrega o resultado e mostra como.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <VozCol kind="sim" items={[
          { line: 'Sua quarta-feira está fraca. A gente arruma isso.', why: 'Direto ao problema. Sem rodeio. Confiante.' },
          { line: 'No mês passado, o kit churrasco saiu 3× mais que a picanha avulsa.', why: 'Número concreto, exemplo específico.' },
          { line: 'Você não precisa de mais alcance. Precisa de mais pedido.', why: 'Corta o jargão e nomeia o que importa.' },
          { line: 'A gente testa, mede e mantém o que dá dinheiro.', why: 'Método em uma frase. Linguagem do dono.' },
        ]} />
        <VozCol kind="nao" items={[
          { line: 'Potencialize sua presença digital e alcance novos públicos.', why: 'Jargão de agência. Não diz nada.' },
          { line: 'Estratégia omnichannel data-driven para o seu negócio.', why: 'Pretensão técnica vazia.' },
          { line: 'Estamos animados em transformar sua jornada digital!', why: 'Motivacional. Genérico. Distância corporativa.' },
          { line: 'Maximize seu ROI com nossas soluções de performance.', why: 'Linguagem de fornecedor, não de parceiro.' },
        ]} />
      </div>

      <div style={{ marginTop: 56 }}>
        <Mono color={vC.muted}>Vocabulário</Mono>
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: vC.surface, padding: '24px 28px' }}>
            <Mono color={vC.red} size={10}>Fala em</Mono>
            <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['pedido', 'ticket médio', 'cliente recorrente', 'kit', 'fim de semana', 'churrasco', 'delivery', 'bairro', 'caixa no fim do mês', 'cardápio', 'foto que vende'].map(t => (
                <span key={t} style={{
                  fontFamily: vF.family, fontSize: 13, color: vC.white,
                  background: vC.black, padding: '6px 12px', borderRadius: 999,
                  letterSpacing: '-0.005em',
                }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ background: vC.surface, padding: '24px 28px' }}>
            <Mono color={vC.muted} size={10}>Não fala em</Mono>
            <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['alcance', 'impressões', 'omnichannel', 'presença digital', 'jornada do consumidor', 'engajamento', 'awareness', 'funil de conversão', 'storytelling', 'autoridade de marca'].map(t => (
                <span key={t} style={{
                  fontFamily: vF.family, fontSize: 13, color: vC.muted,
                  background: 'transparent', padding: '6px 12px', borderRadius: 999,
                  border: `1px solid ${vC.muted}`,
                  textDecoration: 'line-through', textDecorationColor: vC.muted,
                  letterSpacing: '-0.005em',
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 56 }}>
        <Mono color={vC.muted}>Manchetes-modelo</Mono>
        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {[
            { h: 'A gente faz seu açougue vender kits todo mês — não só no churrasco.', ctx: 'Hero do site' },
            { h: 'Picanha vende. Picanha em foto boa vende mais.', ctx: 'Anúncio · cardápio' },
            { h: 'Quarta-feira é o dia mais fraco do mês. Ainda.', ctx: 'Headline · diagnóstico' },
          ].map((m, i) => (
            <div key={i} style={{ background: vC.surface, padding: '32px 32px 24px', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{
                fontFamily: vF.family, fontWeight: 700, fontSize: 22,
                color: vC.white, letterSpacing: '-0.025em', lineHeight: 1.15,
                textWrap: 'pretty',
              }}>{m.h}</div>
              <Mono color={vC.red} size={10}>{m.ctx}</Mono>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ---------- 09 PRINCÍPIOS ----------
function PrincItem({ num, title, body, demo }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gap: 32,
      padding: '40px 0', borderTop: `1px solid ${vC.surface}`, alignItems: 'flex-start',
    }}>
      <div style={{
        fontFamily: vF.family, fontWeight: 700, fontSize: 44, color: vC.red,
        letterSpacing: '-0.03em', lineHeight: 1,
      }}>{num}</div>
      <div>
        <h3 style={{ fontFamily: vF.family, fontWeight: 700, fontSize: 24, color: vC.white, letterSpacing: '-0.02em', margin: 0 }}>{title}</h3>
        <P style={{ fontSize: 14, color: vC.muted, marginTop: 12 }}>{body}</P>
      </div>
      <div style={{ background: vC.surface, height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, overflow: 'hidden' }}>
        {demo}
      </div>
    </div>
  );
}

function Principios() {
  return (
    <Section id="principios" num="09" kicker="Princípios" title="Cinco regras visuais. Sempre."
      lead="Cada decisão de design da Pulso parte destes cinco princípios. Quando algo não está funcionando, é porque um deles foi violado.">
      <PrincItem num="01" title="Contraste como base"
        body="Preto forte, branco limpo. Sem tons pastéis, sem gradiente decorativo. O contraste alto é o que faz a marca legível no celular do dono em pleno sol da padaria."
        demo={(
          <div style={{ display: 'flex', gap: 0, width: '100%', height: '100%' }}>
            <div style={{ flex: 1, background: vC.black }}/>
            <div style={{ flex: 1, background: vC.white }}/>
          </div>
        )} />
      <PrincItem num="02" title="Tipografia como elemento gráfico"
        body="A hierarquia é o desenho. Peso e tamanho fazem o trabalho visual. Manchete grande, corpo pequeno, label monoespaçado — esse é o sistema."
        demo={(
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', alignSelf: 'stretch', width: '100%' }}>
            <Mono color={vC.red} size={10}>RESULTADO</Mono>
            <div style={{ fontFamily: vF.family, fontWeight: 800, fontSize: 48, color: vC.white, letterSpacing: '-0.04em', lineHeight: 1 }}>+38%</div>
            <div style={{ fontFamily: vF.family, fontSize: 12, color: vC.muted }}>pedidos · 30 dias</div>
          </div>
        )} />
      <PrincItem num="03" title="Vermelho com parcimônia"
        body="Quando aparece, tem peso. Não decora — sinaliza. Marca o que importa: CTA, número, alerta. Se você precisa usar duas vezes na mesma peça, repense."
        demo={(
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontFamily: vF.family, fontWeight: 700, fontSize: 28, color: vC.white, letterSpacing: '-0.025em' }}>Quero ver o plano</div>
            <div style={{ width: 36, height: 36, background: vC.red, display: 'flex', alignItems: 'center', justifyContent: 'center', color: vC.white, fontWeight: 600, fontSize: 18 }}>→</div>
          </div>
        )} />
      <PrincItem num="04" title="Espaço negativo intencional"
        body="Respiro é parte do design, não ausência dele. A marca usa o vazio para enfatizar o cheio. Em dúvida: tira coisa, não adiciona."
        demo={(
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ApertureMark size={68} id="pr4" />
          </div>
        )} />
      <PrincItem num="05" title="Sem decoração gratuita"
        body="Nada de ícone enfeitando, sombra criando profundidade falsa, gradiente para parecer 'moderno'. Se um elemento não tem função, sai."
        demo={(
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <div style={{ height: 14, background: vC.muted, opacity: 0.4 }}/>
            <div style={{ height: 14, background: vC.muted, opacity: 0.4, width: '78%' }}/>
            <div style={{ height: 14, background: vC.muted, opacity: 0.4, width: '60%' }}/>
            <div style={{ height: 4, background: vC.red, width: '34%', marginTop: 12 }}/>
          </div>
        )} />
    </Section>
  );
}

Object.assign(window, { Voz, Principios });
