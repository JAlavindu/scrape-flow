"use server";

import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from "@/schema/workflow";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { Workflow } from "lucide-react";
import { WorkflowStatus } from "@/types/workflow";
import { redirect } from "next/navigation";
import { AppNode } from "@/types/appNode";
import { Edge } from "@xyflow/react";
import { CreateFlowNode } from "@/lib/workflow/createFlowNode";
import { TaskType } from "@/types/task";

export async function CreateWorkflow(form: createWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);
  if (!success) {
    throw new Error("Invalid form data");
  }
  const { userId } = auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const initialFlow: { nodes: AppNode[]; edges: Edge[] } = {
    nodes: [],
    edges: [],
  };

  //let's add the flow entry point
  initialFlow.nodes.push(CreateFlowNode(TaskType.LAUNCH_BROWSER));

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: JSON.stringify(initialFlow),
      ...data,
    },
  });

  if (!result) {
    throw new Error("Failed to create workflow");
  }

  redirect(`/workflow/editor/${result.id}`);
}
