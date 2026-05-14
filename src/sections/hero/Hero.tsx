import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Statistics from "@/components/Statistics";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text + CTA */}
        <div>
          <h1>Never miss a Valorant Patch again with Patchy!</h1>
          <p className="text-lg text-muted-foreground mt-4 mb-4 max-w-[55ch]">
            This Discord Bot gives you instant, clean, easy-to-read patch notes
            delivered straight to your Discord server.
          </p>
          <Statistics />
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

        {/* Right: patch notes screenshot */}
        <div className="hidden md:block rounded-xl overflow-hidden border border-border">
          <div className="bg-[#1e1f22] px-4 py-2.5 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[11px] text-white/40 font-medium mx-auto">
              Patchy
            </span>
          </div>
          <div className="relative bg-[#313338]">
            <img
              src="/patch_notes.webp"
              alt="Patch notes preview"
              className="w-full"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#313338] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
