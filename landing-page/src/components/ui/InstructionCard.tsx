import { Card, CardContent } from "./card";
import { type Instruction } from "@/data/instructions";

interface InstructionStepsProps {
  instruction: Instruction;
}

export function InstructionSteps({ instruction }: InstructionStepsProps) {
  const { step, title, description, command } = instruction;
  return (
    <div
      className={`grid gap-12 items-center md:grid-cols-2 
      }`}
    >
      <Card className="border-border bg-muted/50">
        <CardContent className="p-8 space-y-4">
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-brand-accent/10 text-brand-accent border border-brand-accent/25 rounded px-2 py-0.5">
            Step {step}
          </span>

          <h3>{title}</h3>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {command
              ? description.split("{command}").map((part, i) => (
                  <span key={i}>
                    {part}
                    {i === 0 && (
                      <code className="text-sm font-mono bg-muted border border-border rounded px-1.5 py-0.5 text-brand-accent">
                        {command}
                      </code>
                    )}
                  </span>
                ))
              : description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
