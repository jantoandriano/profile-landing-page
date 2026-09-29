type Props = { className?: string };

export function Starburst({ className = "", fill = "#e4f47a" }: Props & { fill?: string }) {
  const points = Array.from({ length: 24 }, (_, i) => {
    const r = i % 2 === 0 ? 50 : 30;
    const a = (Math.PI * i) / 12;
    return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <polygon points={points} fill={fill} stroke="#111" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function Sparkle({ className = "", fill = "#fff" }: Props & { fill?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <path d="M50 4 C54 38 62 46 96 50 C62 54 54 62 50 96 C46 62 38 54 4 50 C38 46 46 38 50 4Z" fill={fill} stroke="#111" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

export function CodeBubble({ className = "" }: Props) {
  return (
    <div aria-hidden className={className}>
      <div className="flex h-14 w-16 items-center justify-center border-[1.5px] border-ink bg-lime font-mono text-xl font-bold shadow-brutal">
        &lt;/&gt;
      </div>
      <div className="absolute -bottom-[9px] left-4 h-4 w-4 rotate-45 border-b-[1.5px] border-r-[1.5px] border-ink bg-lime" />
    </div>
  );
}

export function XMarks() {
  return (
    <span aria-hidden className="inline-flex gap-1">
      {[0, 1].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6">
          <path d="M5 5L19 19M19 5L5 19" stroke="#e4f47a" strokeWidth="5" strokeLinecap="round" />
          <path d="M5 5L19 19M19 5L5 19" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ))}
    </span>
  );
}

export function ReactBadge({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <circle cx="50" cy="50" r="47" fill="#fff" stroke="#111" strokeWidth="3" />
      <g fill="none" stroke="#111" strokeWidth="3.5">
        <ellipse cx="50" cy="50" rx="32" ry="12" />
        <ellipse cx="50" cy="50" rx="32" ry="12" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="32" ry="12" transform="rotate(120 50 50)" />
      </g>
      <circle cx="50" cy="50" r="6" fill="#111" />
    </svg>
  );
}

const ICONS = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
};

export function ServiceIcon({ icon, className = "" }: Props & { icon: keyof typeof ICONS }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[icon]}
    </svg>
  );
}
