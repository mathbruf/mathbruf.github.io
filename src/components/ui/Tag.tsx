interface Props {
  children: string;
}

export function Tag({ children }: Props) {
  return (
    <span className="font-mono text-[11px] tracking-tight lowercase text-muted">
      {children}
    </span>
  );
}
