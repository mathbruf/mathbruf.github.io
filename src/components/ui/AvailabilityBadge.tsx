interface Props {
  text?: string;
}

export function AvailabilityBadge({
  text = 'Available for internships',
}: Props) {
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-muted">
      <span className="relative flex h-1.5 w-1.5" aria-hidden>
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
      </span>
      <span>{text}</span>
    </span>
  );
}
