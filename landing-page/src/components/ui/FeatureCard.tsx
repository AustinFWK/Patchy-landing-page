import { type Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const { title, description, icon: IconComponent, tier } = feature;

  if (tier === "hero") {
    return (
      <div className="h-full flex flex-col gap-4 rounded-xl p-6 bg-brand-accent/[0.06] border border-brand-accent/20">
        <div>
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-brand-accent/10 text-brand-accent border border-brand-accent/25 rounded px-2 py-0.5 mb-4">
            Core Feature
          </span>
          <div className="text-2xl mb-3 text-brand-accent">
            <IconComponent />
          </div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  }

  if (tier === "mid") {
    return (
      <div className="h-full rounded-xl p-5 bg-brand-accent/[0.03] border border-brand-accent/[0.13] flex flex-col gap-2 justify-center">
        <div className="text-xl text-brand-accent/80">
          <IconComponent />
        </div>
        <h3 className="text-base font-bold">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    );
  }

  // chip
  return (
    <div className="rounded-xl p-4 bg-muted/50 border border-border flex items-center gap-3">
      <div className="text-base text-muted-foreground/60">
        <IconComponent />
      </div>
      <div>
        <div className="text-sm font-semibold text-muted-foreground">
          {title}
        </div>
        <div className="text-xs text-muted-foreground/60 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}
