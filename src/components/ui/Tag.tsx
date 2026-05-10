interface Props {
  children: string;
}

export function Tag({ children }: Props) {
  return (
    <span className="font-mono text-mono-sm lowercase text-ink/60">
      {children}
    </span>
  );
}
