import { TaskType, TaskParamType } from "@/types/task";
import { CodeIcon, LucideProps } from "lucide-react";
import { GlobeIcon } from "lucide-react";

export const PageToHtmlTask = {
  type: TaskType.PAGE_TO_HTML,
  label: "Launch Browser",
  icon: (props: LucideProps) => (
    <CodeIcon className="stroke-rose-400" {...props} />
  ),
  isEntryPoint: true,
  inputs: [
    {
      name: "Website page",
      type: TaskParamType.BROWSER_INSTANCE,
      helperText: "eg: https://google.com",
      required: true,
      hideHandle: true,
    },
  ],
};
