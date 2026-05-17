// Pulso — Brand book: capa + logo sections.

const { color: bC, font: bF } = window.PULSO;

// ---------- CAPA ----------
function Cover() {
  return (
    <section id="capa" style={{
      minHeight: '100vh', padding: '80px 80px 64px',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      position: 'relative',
    }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Mono>Diretrizes de marca</Mono>
        <Mono>v1 · 2026</Mono>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <ApertureMark size={140} id="cover" />
          <Wordmark size={180} />
        </div>
        <div style={{
          fontFamily: bF.family, fontWeight: 800, fontSize: 64,
          color: bC.white, letterSpacing: '-0.04em', lineHeight: 1.02,
          maxWidth: 920,
        }}>
          Sinal, não ruído.<br/>
          Marketing que faz <span style={{ color: bC.red }}>o açougue vender</span> todo mês.
        </div>
      </div>

      <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <Mono color={bC.muted}>Conteúdo</Mono>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px 32px', maxWidth: 720 }}>
            {NAV_ITEMS.map(i => (
              <div key={i.id} style={{
                display: 'grid', gridTemplateColumns: '28px 1fr', gap: 8,
                fontFamily: bF.family, fontSize: 13, color: bC.white, letterSpacing: '-0.01em',
              }}>
                <Mono color={bC.muted} size={10}>{i.num}</Mono>
                <span>{i.label}</span>
              </div>
            ))}
          </div>
        </div>
        <Mono color={bC.muted}>pulso · marketing de açougue</Mono>
      </footer>
    </section>
  );
}

// ---------- 00 IDENTIDADE ----------
function Identidade() {
  return (
    <Section id="identidade" num="00" kicker="Quem somos" title="Pulso é parceiro de negócio, não fornecedor de serviço."
      lead="Agência de marketing digital especializada em açougues de bairro com delivery. A marca fala direto, com confiança e proximidade — a linguagem de quem domina o assunto e respeita a inteligência do dono.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, marginTop: 40 }}>
        {[
          { k: 'Para quem', v: 'Donos de açougue de bairro com operação de delivery. Já têm cliente, já têm produto — falta volume e recorrência.' },
          { k: 'O que entregamos', v: 'Pedidos, ticket maior, cliente que volta. Tradução: dinheiro no caixa, semana após semana.' },
          { k: 'Como agimos', v: 'Sem jargão. Sem promessa vazia. Número em cima da mesa, ajuste no que não funciona, repete o que dá certo.' },
        ].map((b, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Mono color={bC.red}>{`0${i+1}`}</Mono>
            <div style={{ fontFamily: bF.family, fontWeight: 600, fontSize: 20, color: bC.white, letterSpacing: '-0.02em' }}>{b.k}</div>
            <P max={320} style={{ fontSize: 14, color: bC.muted }}>{b.v}</P>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---------- 01 MARCA ----------
function Marca() {
  return (
    <Section id="marca" num="01" kicker="Símbolo" title="O P com a fresta."
      lead='Lowercase "p" cortado por uma fresta horizontal. O sinal passa pela letra — é o pulso. A fresta é negativa por padrão; em momentos de ênfase, ela acende em vermelho.'>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Plate caption="Anatomia · proporção 100×100" height={420}>
          <div style={{ position: 'relative', width: 320, height: 320 }}>
            {/* baseline grid */}
            <svg width="320" height="320" viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0 }}>
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke={bC.muted} strokeWidth="0.15" opacity="0.4"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)"/>
              {/* annotations */}
              <line x1="12" y1="98" x2="26" y2="98" stroke={bC.red} strokeWidth="0.3"/>
              <line x1="12" y1="6" x2="12" y2="98" stroke={bC.red} strokeWidth="0.3" strokeDasharray="0.6 0.6"/>
              <line x1="26" y1="6" x2="26" y2="98" stroke={bC.red} strokeWidth="0.3" strokeDasharray="0.6 0.6"/>
              <line x1="12" y1="37" x2="88" y2="37" stroke={bC.red} strokeWidth="0.3" strokeDasharray="0.6 0.6"/>
              <line x1="12" y1="41.5" x2="88" y2="41.5" stroke={bC.red} strokeWidth="0.3" strokeDasharray="0.6 0.6"/>
            </svg>
            <div style={{ position: 'absolute', inset: 0 }}>
              <ApertureMark size={320} id="anat" />
            </div>
            <Mono color={bC.red} size={9} style={{ position: 'absolute', left: -2, top: 320 + 6 }}>haste · 14u</Mono>
            <Mono color={bC.red} size={9} style={{ position: 'absolute', right: -2, top: 320 * 0.39 - 14 }}>fresta · 4.5u</Mono>
          </div>
        </Plate>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: bC.surface, padding: '32px 40px' }}>
            <Spec label="Grid" value="100 × 100" />
            <Spec label="Haste" value="x:12 · y:6 · 14×88" />
            <Spec label="Bojo" value="cx:52 · cy:38 · r:32" />
            <Spec label="Contraforma" value="r:15" />
            <Spec label="Fresta" value="y:37 · 76×4.5" />
            <Spec label="Tamanho mínimo" value="24 px / 8 mm" />
          </div>
          <P style={{ fontSize: 14, color: bC.muted }}>
            A fresta é constante. Sua posição é 39% da altura — corta a contraforma e divide a haste em dois pulsos desiguais. Essa assimetria é proposital: representa um sinal vivo, não simétrico.
          </P>
        </div>
      </div>

      <div style={{ marginTop: 48 }}>
        <Mono color={bC.muted}>Wordmark</Mono>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
          <Plate caption='Geist 500 · tracking −0.045em · caixa baixa sempre' height={220}>
            <Wordmark size={120} />
          </Plate>
          <div style={{ background: bC.surface, padding: '32px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Spec label="Fonte" value="Geist" />
            <Spec label="Peso" value="500 / Medium" />
            <Spec label="Tracking" value="−0.045em" />
            <Spec label="Caixa" value="Sempre baixa" />
            <Spec label="Exclusividade" value="Não reusar peso" />
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---------- 02 LOCKUPS ----------
function Lockups() {
  return (
    <Section id="lockups" num="02" kicker="Composições" title="Lockups oficiais."
      lead="Três composições. O lockup horizontal é o padrão; o vertical é para espaços quadrados; o símbolo isolado só onde a marca já está estabelecida (favicon, app icon, social avatar).">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 16 }}>
        <Plate caption="Horizontal · padrão" height={300}>
          <HLockup size={88} id="lk-h" />
        </Plate>
        <Plate caption="Vertical" height={300}>
          <VLockup size={88} id="lk-v" />
        </Plate>
        <Plate caption="Símbolo isolado" height={300}>
          <ApertureMark size={170} id="lk-s" />
        </Plate>
      </div>

      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <div style={{ background: bC.surface, padding: '20px 24px' }}>
          <Mono color={bC.muted} size={10}>Quando usar</Mono>
          <P style={{ fontSize: 13, color: bC.white, marginTop: 10 }}>
            Site, materiais comerciais, apresentações, e-mail signature, cabeçalho de propostas.
          </P>
        </div>
        <div style={{ background: bC.surface, padding: '20px 24px' }}>
          <Mono color={bC.muted} size={10}>Quando usar</Mono>
          <P style={{ fontSize: 13, color: bC.white, marginTop: 10 }}>
            Sinalização vertical, banners 1:1, cartão de visita verso, embalagem.
          </P>
        </div>
        <div style={{ background: bC.surface, padding: '20px 24px' }}>
          <Mono color={bC.muted} size={10}>Quando usar</Mono>
          <P style={{ fontSize: 13, color: bC.white, marginTop: 10 }}>
            Avatares, favicons, app icon, watermark — onde "Pulso" já está nomeado em texto adjacente.
          </P>
        </div>
      </div>
    </Section>
  );
}

// ---------- 03 VARIANTES ----------
function Variantes() {
  return (
    <Section id="variantes" num="03" kicker="Aplicação" title="Variantes cromáticas."
      lead="Quatro variantes. Preferência sempre pela marca em preto sobre branco ou branco sobre preto. Vermelho como fundo é exceção — usar apenas em momentos de campanha ou destaque máximo.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        <Plate caption="Sobre preto · padrão" bg={bC.black} height={240}>
          <HLockup size={48} id="v-dk" />
        </Plate>
        <Plate caption="Sobre branco" bg={bC.white} height={240}>
          <HLockup size={48} ink={bC.black} bg={bC.white} id="v-lt" />
        </Plate>
        <Plate caption="Mono · sobre superfície" bg={bC.surface} height={240}>
          <HLockup size={48} ink={bC.white} bg={bC.surface} id="v-mo" />
        </Plate>
        <Plate caption="Sobre vermelho · campanha" bg={bC.red} height={240}>
          <HLockup size={48} ink={bC.white} bg={bC.red} id="v-rd" />
        </Plate>
      </div>

      <div style={{ marginTop: 40 }}>
        <Mono color={bC.muted}>Versão de ênfase · fresta acesa</Mono>
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Plate caption='Fresta vermelha · "sinal aceso" · uso pontual' height={280}>
            <HLockup size={88} slit={bC.red} id="v-acc" />
          </Plate>
          <div style={{ background: bC.surface, padding: '32px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <P style={{ fontSize: 14, color: bC.white, marginBottom: 16 }}>
              Use a fresta vermelha somente em:
            </P>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Hero do site / capa de campanha', 'Embalagem de etiqueta de produto', 'Spot animado (pulso piscando)', 'Headline impresso de destaque'].map((t, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', alignItems: 'baseline', fontFamily: bF.family, fontSize: 14, color: bC.muted }}>
                  <Mono color={bC.red} size={10}>{`0${i+1}`}</Mono>
                  <span style={{ color: bC.white }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---------- 04 ESPAÇO & ESCALA ----------
function EspacoEscala() {
  // X = altura da haste do "p" minúsculo no wordmark. Margem mínima = X.
  return (
    <Section id="espaco" num="04" kicker="Respiro" title="Área de proteção e tamanho mínimo."
      lead='A unidade "x" é a altura do bojo do "p". A marca precisa de pelo menos 1×x de respiro em todos os lados — nada (texto, foto, borda, outro logo) pode entrar nessa zona.'>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
        <Plate caption="Área de proteção · 1×x mínima" height={360}>
          <div style={{ position: 'relative', padding: 60 }}>
            {/* Clearspace box */}
            <div style={{
              position: 'absolute', inset: 0,
              border: `1px dashed ${bC.red}`, opacity: 0.5,
            }}/>
            <HLockup size={84} id="clr" />
            <Mono color={bC.red} size={9} style={{ position: 'absolute', top: 14, left: 14 }}>x</Mono>
            <Mono color={bC.red} size={9} style={{ position: 'absolute', bottom: 14, right: 14 }}>x</Mono>
          </div>
        </Plate>

        <Plate caption="Tamanho mínimo · símbolo & lockup" height={360} style={{ alignSelf: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <ApertureMark size={24} id="min-s" />
                <Mono size={9} color={bC.muted}>24 px · símbolo</Mono>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <HLockup size={20} id="min-h" />
                <Mono size={9} color={bC.muted}>20 px · lockup H</Mono>
              </div>
            </div>
            <div style={{ width: '100%', borderTop: `1px dashed ${bC.muted}`, opacity: 0.3 }}/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: bF.mono, fontSize: 11, color: bC.muted, letterSpacing: '0.04em' }}>
              <div>impresso · símbolo ≥ 8mm</div>
              <div>impresso · lockup ≥ 14mm</div>
            </div>
          </div>
        </Plate>
      </div>

      <div style={{ marginTop: 32 }}>
        <Mono color={bC.muted}>Escala em contexto</Mono>
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'flex-end', gap: 40, background: bC.surface, padding: '40px 48px' }}>
          {[16, 22, 36, 56, 88, 140].map(s => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
              <HLockup size={s} id={`sc-${s}`} />
              <Mono size={9} color={bC.muted}>{s}px</Mono>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ---------- 05 NÃO PODE ----------
function NaoPode() {
  const dont = (label, render) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{
        background: bC.surface, height: 200, padding: 32,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {render}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <line x1="100%" y1="0%" x2="0%" y2="100%" stroke={bC.red} strokeWidth="2"/>
        </svg>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
        <Mono color={bC.red} size={10}>Não</Mono>
        <span style={{ fontFamily: bF.family, fontSize: 13, color: bC.white, letterSpacing: '-0.01em' }}>{label}</span>
      </div>
    </div>
  );

  return (
    <Section id="naopode" num="05" kicker="Limites" title="O que não pode acontecer."
      lead="A marca tem uma forma e uma proporção. Distorcer, decorar ou esticar enfraquece o sinal. Estas são as regras inegociáveis.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {dont('Distorcer ou esticar', <div style={{ transform: 'scaleX(1.4) scaleY(0.7)' }}><HLockup size={56} id="d1"/></div>)}
        {dont('Trocar a fonte do wordmark', <span style={{ fontFamily: 'Georgia, serif', fontSize: 56, color: bC.white, fontStyle: 'italic' }}>pulso</span>)}
        {dont('Usar caixa alta', <span style={{ fontFamily: bF.family, fontWeight: 500, fontSize: 56, color: bC.white, letterSpacing: '-0.045em' }}>PULSO</span>)}
        {dont('Aplicar sombra, brilho ou efeito', <div style={{ filter: 'drop-shadow(0 0 18px rgba(200,40,30,0.7))' }}><HLockup size={56} id="d4"/></div>)}
        {dont('Recolorir fora da paleta', <HLockup size={56} ink="#7ad97a" id="d5"/>)}
        {dont('Rotacionar ou inclinar', <div style={{ transform: 'rotate(-12deg)' }}><HLockup size={56} id="d6"/></div>)}
        {dont('Preencher a fresta com cor (exceto vermelho)', <HLockup size={56} slit="#3b82f6" id="d7"/>)}
        {dont('Vermelho como grande área de fundo', (
          <div style={{ background: bC.red, padding: '32px 56px' }}><HLockup size={36} ink={bC.white} bg={bC.red} id="d8"/></div>
        ))}
        {dont('Colocar elementos dentro da área de proteção', (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <HLockup size={48} id="d9"/>
            <span style={{ fontFamily: bF.family, fontSize: 11, color: bC.muted }}>desde<br/>2024</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

Object.assign(window, { Cover, Identidade, Marca, Lockups, Variantes, EspacoEscala, NaoPode });
