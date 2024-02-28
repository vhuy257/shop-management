import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import type { NextRequest } from "next/server";
import i18n from "../i18n";

// export function middleware(request: NextRequest) {
//   const locale = request.nextUrl.locale || i18n.defaultLocale;
//   request.nextUrl.searchParams.set("lang", locale);
//   request.nextUrl.href = request.nextUrl.href.replace(`/${locale}`, "");
  
//   return NextResponse.rewrite(request.nextUrl);
// }

export default withAuth(
  function middleware(request: NextRequest) {
    const locale = request.nextUrl.locale || i18n.defaultLocale;
    request.nextUrl.searchParams.set("lang", locale);
    request.nextUrl.href = request.nextUrl.href.replace(`/${locale}`, "");
    
    return NextResponse.rewrite(request.nextUrl);
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
)

export const config = {matcher: ["/"]}
