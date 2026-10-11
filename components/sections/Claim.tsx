import { Staircase } from "@/components/Staircase";
import { claim } from "@/lib/copy";

export function Claim() {
  return (
    <section className="claim grain" aria-label="Claim">
      <Staircase lines={claim} expo={[60, -100]} size="l" />
    </section>
  );
}
