export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted">
          © {year} &nbsp;·&nbsp; Mathias Bruflot &nbsp;·&nbsp; Bergen, NO
        </p>
        <a
          href="https://github.com/mathbruf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted hover:text-accent transition-colors"
        >
          @mathbruf ↗
        </a>
      </div>
    </footer>
  );
}
