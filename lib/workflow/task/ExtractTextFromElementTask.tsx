import { TaskType, TaskParamType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { CodeIcon, LucideProps } from "lucide-react";
import { GlobeIcon } from "lucide-react";

export const ExtractTextFromElementTask = {
  type: TaskType.EXTRACT_TEXT_FROM_ELEMENT,
  label: "Extract text from element",
  icon: (props: LucideProps) => (
    <CodeIcon className="stroke-rose-400" {...props} />
  ),
  isEntryPoint: true,
  credits: 2,
  inputs: [
    {
      name: "Html",
      type: TaskParamType.STRING,
      required: true,
    },
    {
      name: "Selector",
      type: TaskParamType.STRING,
      required: true,
      variant: "textarea",
    },
  ],

  outputs: [{ name: "Extracted text", type: TaskParamType.STRING }],
} satisfies WorkflowTask;
