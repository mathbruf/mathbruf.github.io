export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/15">
      <div className="px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 font-mono text-micro text-ink/60">
        <div>
          <div className="text-ink/40 mb-1.5">© {year}</div>
          <div className="text-ink">MATHIAS BRUFLOT</div>
        </div>
        <div>
          <div className="text-ink/40 mb-1.5">↳ LOCATION</div>
          <div className="text-ink">BERGEN, NO</div>
        </div>
        <div>
          <div className="text-ink/40 mb-1.5">↳ SET IN</div>
          <div className="text-ink">INSTRUMENT SERIF / JBM</div>
        </div>
        <div>
          <div className="text-ink/40 mb-1.5">↳ SOURCE</div>
          <a
            href="https://github.com/mathbruf/mathbruf.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-vermillion transition-colors"
          >
            @MATHBRUF ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
