import { FlowToESxecutionPlan } from "@/lib/workflow/executionPlan";
import { AppNode } from "@/types/appNode";
import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";

const useExecutionPlan = () => {
  const { toObject } = useReactFlow();

  const generateExecutionPlan = useCallback(() => {
    const { nodes, edges } = toObject();
    const { executionPlan } = FlowToESxecutionPlan(nodes as AppNode[], edges);
  }, [toObject]);
  return generateExecutionPlan;
};

export default useExecutionPlan;
