"use server";

import prisma from "@/lib/prisma";
import { WorkflowExecutionPlan } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { Workflow } from "lucide-react";

export async function RunWorkflow(form: {
  workflowId: string;
  flowDefinition?: string;
}) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const { workflowId, flowDefinition } = form;
  if (!workflowId) {
    throw new Error("Workflow ID is required");
  }

  const workflow = await prisma.workflow.findUnique({
    where: {
      userId,
      id: workflowId,
    },
  });

  let executuonPlan: WorkflowExecutionPlan;
  if (!flowDefinition) {
    throw new Error("Flow definition is required");
  }
}
