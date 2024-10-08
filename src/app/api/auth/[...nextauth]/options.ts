// /pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { executeQuery } from "@/utils/executeQuery"; // Ensure this path is correct

interface User {
    id: number;
    email: string;
    username: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<User | null> {
                // Ensure credentials are provided
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                try {
                    console.log("Authorize function called with credentials:", credentials);

                    // Fetch the user from the database using the provided email
                    const result = await executeQuery({
                        query: "SELECT * FROM admin WHERE email = ?",
                        values: [credentials.email],
                    });

                    // Check if user exists in the database
                    if (!Array.isArray(result) || result.length === 0) {
                        throw new Error("Invalid email or user not found");
                    }
                    const user = result[0];

                    // Compare the provided password with the hashed password from the database
                    const isMatch = await bcrypt.compare(credentials.password, user.password);
                    if (!isMatch) {
                        throw new Error("Incorrect password");
                    }

                    // Return the sanitized user object
                    return { id: user.id, email: user.email, username: user.username };
                } catch (error: any) {
                    console.error("Authorization error:", error.message);
                    throw new Error("Error during authorization. Please check your credentials.");
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id as number;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    ...session.user,
                    id: token.id as number,
                    username: token.username,
                };
            }
            return session;
        },
    },
    pages: {
        signIn: "/admin", // Path to your custom sign-in page
    },
    session: {
        strategy: "jwt", // Using JWT strategy for session handling
    },
    secret: process.env.NEXTAUTH_SECRET, // Ensure this environment variable is set
};

export default NextAuth(authOptions);
