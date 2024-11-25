import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const loginData = JSON.parse(request.cookies.get("loginData")?.value || "{}")

  if (!loginData?.token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard"],
}

//otro codigo que mostro en el codereview
/*export function middleware2(request: NextRequest) {
  const {pathname} = request.nextUrl;

  if (
    (pathname === "/dashboard" || pathname === "/cart") &&
    !request.cookies.get("loginData")?.value
  ) {
    const loginURL = new URL("/login",request.nextUrl.origin);
    return NextResponse.redirect(loginURL)
  }
  return NextResponse.next()
}*/