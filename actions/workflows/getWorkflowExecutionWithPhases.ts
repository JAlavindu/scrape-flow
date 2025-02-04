"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GetWorkflowsExecutionWithPhrase(executionId: string) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  return prisma.workflowExecution.findUnique({
    where: {
      id: executionId,
      userId,
    },
    include: {
      phases: {
        orderBy: {
          number: "asc",
        },
      },
    },
  });
}
