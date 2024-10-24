import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define paths that don't require session checking
const publicPaths = ['/login', '/signup'];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the request path is public
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Get the session token (example: from cookies)
  const authToken = await getToken({req, secret: process.env.NEXT_AUTH_SECRET});
  // If no session token is present, redirect to the login page
  if (!authToken || pathname === '/') {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // If a session is found, allow the request to proceed
  if(authToken) {
    return NextResponse.next();
  }
  

  const loginUrl = new URL('/login', req.url);
  loginUrl.searchParams.set('callbackUrl', req.url)
  return NextResponse.redirect(loginUrl);
}

// Specify paths the middleware should apply to (optional)
export const config = {
  matcher: ['/', '/dashboard/:path*', '/profile/:path*'], // example of private pages
};
