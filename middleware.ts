import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define paths that don't require session checking
const publicPaths = ['/login', '/signup'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the request path is public
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Get the session token (example: from cookies)
  const authToken = req.cookies.get('next-auth.session-token')?.value;
  console.log('authToken', authToken)
  // If no session token is present, redirect to the login page
  if (!authToken) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // If a session is found, allow the request to proceed
  return NextResponse.next();
}

// Specify paths the middleware should apply to (optional)
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'], // example of private pages
};
