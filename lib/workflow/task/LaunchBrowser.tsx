import { TaskType, TaskParamType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { LucideProps } from "lucide-react";
import { GlobeIcon } from "lucide-react";

export const LaunchBrowserTask = {
  type: TaskType.LAUNCH_BROWSER,
  label: "Launch Browser",
  icon: (props: LucideProps) => (
    <GlobeIcon className="stroke-pink-400" {...props} />
  ),
  isEntryPoint: true,
  credits: 5,
  inputs: [
    {
      name: "Website Url",
      type: TaskParamType.STRING,
      helperText: "eg: https://google.com",
      required: true,
      hideHandle: true,
    },
  ],
  outputs: [{ name: "web page", type: TaskParamType.BROWSER_INSTANCE }],
} satisfies WorkflowTask;
