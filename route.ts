import { signUpSchema } from "@/library/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const result = signUpSchema.safeParse(body);
  if (!result.success) {
  }

  return NextResponse.json({});
}
