import { auth } from "@clerk/nextjs/server";
import React from "react";
import prisma from "@/lib/prisma";

async function page({ params }: { params: { workflowId: string } }) {
  const { workflowId } = params;
  const { userId } = auth();

  if (!userId) {
    return <div>Not authenticated</div>;
  }

  const workflow = await prisma.workflow.findUnique({
    where: {
      id: workflowId,
      userId,
    },
  });

  if (!workflow) {
    return <div>Workflow not found</div>;
  }

  return <pre className="h-screen">{JSON.stringify(workflow, null, 4)}</pre>;
}

export default page;
