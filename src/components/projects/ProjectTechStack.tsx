type ProjectTechStackProps = {
  stack: string[];
};

export function ProjectTechStack({ stack }: ProjectTechStackProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <li
          key={item}
          className="rounded-full border border-[color:var(--border)] bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
