"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import React from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function DeleteWorkflowDialog({ open, setOpen }: Props) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>Are you absolutley sure?</AlertDialogHeader>
        <AlertDialogDescription>
          If you delete this workflow, you will not be able to recover it.
          <div className="flex flex-col py-4 gap-2 ">
            <p>If you are, neer</p>
          </div>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteWorkflowDialog;
