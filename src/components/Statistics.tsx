import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export default function Statistics() {
  const [stats, setStats] = useState<{
    servers: number;
    members: number;
  } | null>(null);

  useEffect(() => {
    async function fetchStats() {
      const response = await fetch(`${import.meta.env.VITE_VM_URL}/stats`);
      const data = await response.json();
      setStats(data);
    }
    fetchStats();
  }, []);

  return (
    <div className="flex flex-col gap-3 mb-6">
      <h3>PROUDLY SERVING</h3>
      <div className="flex items-center gap-2">
        <Badge
          variant="outline"
          className="text-lg px-3 py-1 border-brand-accent/40 text-brand-accent bg-brand-accent/10 px-4 py-3"
        >
          <span className="font-semibold">
            {stats ? stats.servers.toLocaleString() : "..."}
          </span>{" "}
          servers
        </Badge>
        <Badge
          variant="outline"
          className="text-lg px-3 py-1 border-brand-accent/40 text-brand-accent bg-brand-accent/10 px-4 py-3"
        >
          <span className="font-semibold">
            {stats ? stats.members.toLocaleString() : "..."}
          </span>{" "}
          members
        </Badge>
      </div>
    </div>
  );
}
