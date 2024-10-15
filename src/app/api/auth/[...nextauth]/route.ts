// app/api/auth/[...nextauth]/route.ts

import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth/next";



// Create the `GET` and `POST` handlers required for Next.js App Router API routes
const handler = NextAuth(authOptions);

// Export GET and POST methods for the route
export const GET = handler;
export const POST = handler;
