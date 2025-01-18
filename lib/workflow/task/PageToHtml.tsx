import { TaskType, TaskParamType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { CodeIcon, LucideProps } from "lucide-react";
import { GlobeIcon } from "lucide-react";

export const PageToHtmlTask = {
  type: TaskType.PAGE_TO_HTML,
  label: "Launch Browser",
  icon: (props: LucideProps) => (
    <CodeIcon className="stroke-rose-400" {...props} />
  ),
  isEntryPoint: true,
  credits: 2,
  inputs: [
    {
      name: "Website page",
      type: TaskParamType.BROWSER_INSTANCE,
      helperText: "eg: https://google.com",
      required: true,
      hideHandle: true,
    },
  ],

  outputs: [
    { name: "Html", type: TaskParamType.STRING },
    { name: "web page", type: TaskParamType.BROWSER_INSTANCE },
  ],
} satisfies WorkflowTask;
