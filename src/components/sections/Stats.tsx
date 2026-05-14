import { useCountUp } from "@/hooks/useCountUp";

const items = [
  { n: 15, suffix: "+", label: "Years of Excellence" },
  { n: 30, suffix: "+", label: "Expert Specialists" },
  { n: 18, suffix: "k+", label: "Radiant Clients" },
  { n: 25, suffix: "+", label: "Awards Won" },
];

function Stat({ n, suffix, label }: (typeof items)[number]) {
  const { ref, value } = useCountUp(n);
  return (
    <div ref={ref} className="text-center px-6 py-4">
      <div className="font-display text-5xl md:text-6xl text-cream tabular-nums">
        {value}
        <span className="text-rose-gold">{suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.3em] text-cream/60">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-deep-plum text-cream relative grain">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-rose-gold/30">
        {items.map((it) => (
          <Stat key={it.label} {...it} />
        ))}
      </div>
    </section>
  );
}
