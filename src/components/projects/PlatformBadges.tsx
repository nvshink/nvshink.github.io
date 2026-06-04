type PlatformBadgesProps = {
  platforms: string[];
};

export function PlatformBadges({ platforms }: PlatformBadgesProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {platforms.map((platform) => (
        <li
          key={platform}
          className="rounded-full bg-[color:var(--foreground)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--surface)]"
        >
          {platform}
        </li>
      ))}
    </ul>
  );
}
