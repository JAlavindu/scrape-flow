"use client";

import React from "react";
import { Workflow } from "@prisma/client";
import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./FlowEditor";
import TopBar from "./topbar/TopBar";

function Editor({ workflow }: { workflow: Workflow }) {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <TopBar />
        <section className="flex h-full overflow-auto">
          <FlowEditor workflow={workflow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
}

export default Editor;
