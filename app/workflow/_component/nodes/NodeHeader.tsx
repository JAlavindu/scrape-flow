"use client";

import { Taskegistry } from "@/lib/workflow/task/registy";
import { TaskType } from "@/types/task";
import React from "react";

function NodeHeader({ taskType }: { taskType: TaskType }) {
  const task = Taskegistry[taskType];
  return (
    <div className="flex items-center gap-2 p-2">
      <task.icon size={16} />
      <div className="flex justify-between items-center w-full">
        <p className="text-xs font-bold uppercase text-muted-foreground">
          {task.label}
        </p>
      </div>
    </div>
  );
}

export default NodeHeader;
