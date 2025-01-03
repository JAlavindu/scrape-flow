import { AlertCircle, InboxIcon, User } from "lucide-react";
import { CreateWorkflowDialog } from "@/app/(dashboard)/workflows/_components/CreateWorkflowDialog";
import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { waitFor } from "@/lib/helper/waitFor";
import { GetWorkflowsForUser } from "@/actions/workflows/getWorkflowsForUser";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function page() {
  return (
    <div className="flex-1 flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">workflows</h1>
          <p className="text-muted-foreground">Manage your workflows</p>
        </div>
        <CreateWorkflowDialog />
      </div>

      <div className="h-full py-6">
        <Suspense fallback={<UserWorkFlowsSkeleton />}>
          <UserWorkFlows />
        </Suspense>
      </div>
    </div>
  );
}

function UserWorkFlowsSkeleton() {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-32 w-full" />
      ))}
    </div>
  );
}

async function UserWorkFlows() {
  const workflows = await GetWorkflowsForUser();
  if (!workflows) {
    return (
      <Alert variant={"destructive"}>
        <AlertCircle className="w-4 h-4" />
        <AlertCircle>Error</AlertCircle>
        <AlertDescription>
          Something went wrong. please try again later
        </AlertDescription>
      </Alert>
    );
  }

  if (UserWorkFlows.length === 0) {
    return (
      <div className="flex flex-col gap-4 h-full items-center justify-center">
        <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
          <InboxIcon size={40} className="stroke-primary" />
        </div>
        <div className="flex flex-col gap-1 text-center">
          <p className="flex flex-col gap-1 text-center">
            No workflow created yet
          </p>
          <p className="text-sm text-muted-foreground">
            Click on the button below to create your first workflow
          </p>
          <CreateWorkflowDialog triggerText="Create your first workflow" />
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default page;
