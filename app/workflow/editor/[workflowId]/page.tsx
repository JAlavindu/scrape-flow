import { auth } from "@clerk/nextjs/server";
import React from "react";
import prisma from "@/lib/prisma";
import { waitFor } from "@/lib/helper/waitFor";
import Editor from "../../_component/Editor";

async function page({ params }: { params: { workflowId: string } }) {
  const { workflowId } = params;
  const { userId } = auth();

  if (!userId) {
    return <div>Not authenticated</div>;
  }

  try {
    const workflow = await prisma.workflow.findUnique({
      where: {
        id: workflowId,
        userId,
      },
    });
    if (!workflow) {
      return <div>Workflow not found</div>;
    }
    return <Editor workflow={workflow} />;
  } catch (error) {
    console.error(error);
    return <div>Something went wrong</div>;
  }
}

export default page;
