import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@/utils/db";

// @ts-ignore
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.CLIENT_SECRET || "",
    }),
  ],
  async session({ session }: any) {
    return null;
  },
  async signIn({ profile }: { profile: any }) {
    try {
      await connectToDatabase();
      // check if user exists in db

      // if not, create user

      return true;
    } catch (err) {
      return false;
    }
  },
});

export { handler as GET, handler as POST };
