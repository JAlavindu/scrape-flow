"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const NodeCard = ({
  children,
  nodeId,
  isSelected,
}: {
  nodeId: string;
  isSelected: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-md cursor-pointer bg-background border-2 border-separate w-[420px] text-xs gap-1 flex flex-col",
        isSelected && "border-primary"
      )}
    >
      {children}
    </div>
  );
};

export default NodeCard;
