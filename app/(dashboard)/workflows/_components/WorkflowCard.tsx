"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { WorkflowStatus } from "@/types/workflow";
import { Workflow } from "@prisma/client";
import { FileTextIcon, PlayIcon } from "lucide-react";
import React from "react";

const statusColors = {
  [WorkflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
  [WorkflowStatus.PUBLISHED]: "bg-primary",
};

function WorkflowCard({ workflow }: { workflow: Workflow }) {
  const isDraft = workflow.status === WorkflowStatus.DRAFT;
  return (
    <Card className="border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30">
      <CardContent className="p-4 items-center justify-between h-[100px]">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center  justify-center",
            statusColors[workflow.status as WorkflowStatus]
          )}
        >
          {isDraft ? (
            <FileTextIcon className="h-5 w-5" />
          ) : (
            <PlayIcon className="h-5 w-5 text-white " />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default WorkflowCard;
