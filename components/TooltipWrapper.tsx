"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import React from "react";

interface Props {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}

function TooltipWrapper(props: Props) {
  return <TooltipProvider delayDuration={0}></TooltipProvider>;
}

export default TooltipWrapper;
