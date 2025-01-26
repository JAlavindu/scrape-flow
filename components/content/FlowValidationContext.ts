import { AppNodeMissingInputs } from "@/types/appNode";
import { Dispatch, SetStateAction } from "react";

type FlowValidationContext = {
  invalidInputs: AppNodeMissingInputs[];
  setInvalidInputs: Dispatch<SetStateAction<AppNodeMissingInputs[]>>;
};
