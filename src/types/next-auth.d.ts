// types/next-auth.d.ts

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession`, and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession{
    accessToken?: string; 
    user: {
      id: string; // Add the id field here
      accessToken: string;
    } & DefaultSession["user"];
  }

  /**
   * Custom user properties
   */
  interface User extends DefaultUser {
    id: string; // You can add other custom properties here
    accessToken: string;
  }
  declare module 'next-auth/jwt' {
    interface JWT extends DefaultJWT {
      acessToken: string;
    }
   }

}
