// Pulso — Composição principal do brand book.

function BrandBook() {
  return (
    <div style={{ background: window.PULSO.color.black, minHeight: '100vh' }}>
      <SideNav />
      <main style={{ marginLeft: 220, maxWidth: 1280 }}>
        <Cover />
        <Identidade />
        <Marca />
        <Lockups />
        <Variantes />
        <EspacoEscala />
        <NaoPode />
        <Cores />
        <Tipografia />
        <Voz />
        <Principios />
        <Aplicacoes />
        <Tagline />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BrandBook />);
