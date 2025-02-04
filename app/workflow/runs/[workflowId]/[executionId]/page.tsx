import { GetWorkflowsExecutionWithPhrase } from "@/actions/workflows/getWorkflowExecutionWithPhases";
import { GetWorkflowsForUser } from "@/actions/workflows/getWorkflowsForUser";
import TopBar from "@/app/workflow/_component/topbar/TopBar";
import { waitFor } from "@/lib/helper/waitFor";
import { auth } from "@clerk/nextjs/server";
import { Loader2Icon } from "lucide-react";
import { Suspense } from "react";

export default function ExecutionViewrPage({
  params,
}: {
  params: { workflowId: string; executionId: string };
}) {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <TopBar
        workflowId={params.workflowId}
        title="workflow run details"
        subtitle={`Run ID: ${params.executionId}`}
        hideButtons
      />
      <section className="flex h-full overflow-auto">
        <Suspense
          fallback={
            <div className="flex w-full justify-center items-center">
              <Loader2Icon className="h-10 w-10 aniamte-spin stroke-primary" />
            </div>
          }
        >
          <ExecutionViewerWrapper executionId={params.executionId} />
        </Suspense>
      </section>
    </div>
  );
}

async function ExecutionViewerWrapper({
  executionId,
}: {
  executionId: string;
}) {
  const { userId } = auth();

  if (!userId) {
    return <div>Not authenticated</div>;
  }

  const workflowExecution = await GetWorkflowsExecutionWithPhrase(executionId);

  if (!workflowExecution) {
    return <div>Execution not found</div>;
  }

  return <div>Execution Viewer</div>;
}
