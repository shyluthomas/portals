import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getPrivateEnvConfig } from "./envConfig";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
      },
      async authorize(credentials) {
        // Replace this with your actual user authentication logic
        const user = { id: '1', name: "John Doe", email: credentials?.email };

        if (user) {
          return user;
        }
        return null; // Return null if user authentication fails
      },
    }),
  ],
  secret: getPrivateEnvConfig().nextauthSecret,
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.id = user.id;
        token.acessToken = account?.access_token;
      }
      return token;
    },
    async session({ session, token }) {
       session.accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
};

