"use server";

import { auth } from "@clerk/nextjs/server";

export async function GetW() {
  const { userId } = auth();
  if (!userId) {
    return new Error("You are not authorized");
  }
}
