import { ExecutionPhase } from "@prisma/client";

type Phase = Pick<ExecutionPhase, "creditsConsumed">;

export function GetPhasesTotalCost(phases: Phase[]) {
  return phases.reduce((acc, phase) => {
    return acc + (phase.creditsConsumed || 0), 0;
  }, 0);
}
