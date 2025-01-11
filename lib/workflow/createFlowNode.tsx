import { TaskType } from "@/types/task";
import { Position } from "@xyflow/react";
import { AppNode } from "@/types/appNode";

export function CreateFlowNode(
  nodeType: TaskType,
  Position?: { x: number; y: number }
): AppNode {
  return {
    id: crypto.randomUUID(),
    type: "FlowScrapeNode",
    dragHandle: ".drag-handle",
    position: Position ?? { x: 0, y: 0 },
    data: {
      type: nodeType,
      inputs: {},
    },
  };
}
