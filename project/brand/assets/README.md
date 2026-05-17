# Pulso · Logo Assets

Conjunto completo do logo da Pulso em SVG (vetor) e PNG (transparente).

---

## Estrutura

```
brand/assets/
├── svg/   ← vetor, escalável, ideal para web e edição
└── png/   ← raster com fundo transparente, ideal para apresentações, aplicativos
```

---

## SVG (11 arquivos)

### Símbolo (P com fresta)

| Arquivo | Descrição | Uso |
|---|---|---|
| `svg/pulso-mark-white.svg` | Símbolo branco, fresta negativa | Sobre fundos escuros |
| `svg/pulso-mark-black.svg` | Símbolo preto, fresta negativa | Sobre fundos claros |
| `svg/pulso-mark-white-pulse.svg` | Símbolo branco, fresta vermelha | Ênfase / campanha (escuro) |
| `svg/pulso-mark-black-pulse.svg` | Símbolo preto, fresta vermelha | Ênfase / campanha (claro) |
| `svg/pulso-mark-on-red.svg` | Símbolo branco sobre quadrado vermelho | App icon de campanha |

### Wordmark ("pulso")

| Arquivo | Descrição |
|---|---|
| `svg/pulso-wordmark-white.svg` | Wordmark off-white |
| `svg/pulso-wordmark-black.svg` | Wordmark preto |

### Lockups (símbolo + wordmark)

| Arquivo | Descrição |
|---|---|
| `svg/pulso-lockup-h-white.svg` | Horizontal · branco |
| `svg/pulso-lockup-h-black.svg` | Horizontal · preto |
| `svg/pulso-lockup-v-white.svg` | Vertical · branco |
| `svg/pulso-lockup-v-black.svg` | Vertical · preto |

> ℹ️ Os SVGs de wordmark e lockup usam `@import` da Geist via Google Fonts. Em **navegadores e ferramentas web** eles renderizam perfeitamente. Em **Figma, Illustrator ou Sketch**, instale a Geist no sistema ou converta o `<text>` em curvas (paths) ao importar.

---

## PNG (34 arquivos · fundo transparente)

### Símbolo · 5 variantes × 4 tamanhos (256, 512, 1024, 2048 px)

- `pulso-mark-white-{256|512|1024|2048}.png`
- `pulso-mark-black-{256|512|1024|2048}.png`
- `pulso-mark-white-pulse-{256|512|1024|2048}.png` (fresta vermelha)
- `pulso-mark-black-pulse-{256|512|1024|2048}.png` (fresta vermelha)
- `pulso-mark-on-red-{256|512|1024|2048}.png` (símbolo branco sobre quadrado vermelho)

### Wordmark · 2 cores × 2 alturas

- `pulso-wordmark-white-{461|922}h.png`
- `pulso-wordmark-black-{461|922}h.png`

(`h` = altura final em px)

### Lockups · 2 cores × 3 alturas

**Horizontal:**
- `pulso-lockup-h-white-{256|512|1024}h.png`
- `pulso-lockup-h-black-{256|512|1024}h.png`

**Vertical:**
- `pulso-lockup-v-white-{512|1024}m.png`
- `pulso-lockup-v-black-{512|1024}m.png`

(`m` = altura do símbolo em px; altura total ≈ 1.65× isso)

---

## Cores oficiais

| Token | Hex | Onde usar |
|---|---|---|
| Pulso Black | `#0C0C0C` | Fundo principal |
| Surface | `#1A1A1A` | Cards, camadas |
| Muted | `#6B6B6B` | Texto secundário |
| Pulso White | `#F5F5F3` | Texto sobre escuro |
| Pulso Red | `#C8281E` | CTAs, fresta, ênfase |

---

## Boas práticas

✅ **Pode:**
- Escalar SVG livremente.
- Usar PNG em apresentações, apps, social media.
- Combinar variante "pulse" (fresta vermelha) com fundo preto em campanhas.

❌ **Não pode:**
- Distorcer, rotacionar, ou aplicar sombra/brilho/gradiente.
- Trocar a Geist por outra fonte no wordmark.
- Usar caixa alta ("PULSO").
- Recolorir fora da paleta oficial.
- Usar vermelho em grandes áreas como fundo de página.

Veja todas as regras no documento **Pulso Sistema de Marca** (`.html` ou `.pdf`).
