import { Handle, Position } from "@xyflow/react";
import { cn } from "@/lib/utils";
import { TaskParam } from "@/types/task";
import NodeParamField from "./NodeParamField";

export function NodeInputs({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col divide-y gap-2">{children}</div>;
}

export function NodeInput({
  input,
  nodeId,
}: {
  input: TaskParam;
  nodeId: string;
}) {
  return (
    <div className="flex justify-start relative p-3 bg-secondary w-full">
      <NodeParamField param={input} nodeId={nodeId} />
      {!input.hodeHandle && (
        <Handle
          id={input.id}
          type="target"
          position={Position.Left}
          className={cn(
            "!bg-muted-foreground-2: !border-2 !border-background !-left-2 !w-4 !h-4"
          )}
        />
      )}
    </div>
  );
}
