import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="section">
      <div className="container text-center max-w-2xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-2">
          Get started
        </p>
        <h2 className="mb-4">Patch day, covered.</h2>
        <p className="text-muted-foreground mt-4 mb-8 max-w-[50ch] mx-auto">
          Formatted patch notes, posted automatically. No setup beyond a single
          channel.
        </p>
        <a
          href="https://discord.com/oauth2/authorize?client_id=1204815740918693898"
          target="_blank"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-brand-accent text-black hover:bg-brand-accent/90",
          )}
        >
          Invite to server
        </a>
      </div>
    </section>
  );
}
