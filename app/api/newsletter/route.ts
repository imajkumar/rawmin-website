import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let email = "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as { email?: string };
    email = body.email ?? "";
  } else {
    const form = await request.formData();
    email = String(form.get("email") ?? "");
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, message: "Invalid email" }, { status: 400 });
  }

  // UI phase: persist later via Resend + database.
  console.info("Newsletter signup (UI-only):", email);

  return NextResponse.json({ ok: true });
}
