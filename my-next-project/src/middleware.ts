import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let growthbookId = request.cookies.get("profile_id");

  const response = NextResponse.next();

  if (!growthbookId) {
    response.cookies.set({
      name: "profile_id",
      value: Date.now().toString(),
      path: "/",
    });
  }

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/preview/:path*",
};
