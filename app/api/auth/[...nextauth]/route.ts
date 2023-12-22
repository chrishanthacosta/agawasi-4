import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
  const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "NIC", type: "text", placeholder: "NIC" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "guesta", email: "guest@google.com", d:22}
          
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
    ],
  //   callbacks: {
  //     async signIn({ user, account, profile, email, credentials }) {
  //       return true
  //     },
  //     async redirect({ url, baseUrl }) {
  //       return baseUrl
  //     },
  //     async session({ session, user, token }) {
  //       return session
  //     },
  //     async jwt({ token, user, account, profile, isNewUser }) {
  //       return token
  //     }
  //   },
  //    session: {
  //   strategy: "jwt",
  // },
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: "/",
  // },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
 