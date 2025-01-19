"use server";

import { redirect } from "next/navigation";

export async function submitForm(formData: FormData) {
  const code = formData.get("code");

  if (code === "nextjs") {
    redirect("/linking-and-navigation/solutions/redirect/success");
  }

  return { error: "Invalid code" };
}
