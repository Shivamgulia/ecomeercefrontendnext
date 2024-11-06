import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const url = process.env.NEXT_PUBLIC_API_URL;

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text", placeholder: "customer/ seller" },
      },

      async authorize(credentials, req) {
        if (credentials.role == "buyer") {
          console.log(`${process.env.API_URL}/test/customerlogin/`);
          const response = await fetch(
            `${process.env.API_URL}/test/customerlogin/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw Error("Invalid");
          }
          return { ...data, role: credentials.role };
        } else {
          console.log(`${process.env.API_URL}/test/sellerlogin/`);
          const response = await fetch(
            `${process.env.API_URL}/test/sellerlogin/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw Error("Invalid");
          }
          return { ...data, role: credentials.role };
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      session.user = token;
      session.accessToken = token.token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
    signOut: "/login",
  },
});
