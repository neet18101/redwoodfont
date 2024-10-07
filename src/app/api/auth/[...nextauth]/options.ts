// pages/api/auth/[...nextauth].ts
import { NextAuthOptions } from "next-auth";
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
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<User | null> {
                // Check if credentials are provided
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                try {
                    console.log("authorize function called with credentials:", credentials);

                    // Use executeQuery to fetch the user
                    const result = await executeQuery({
                        query: "SELECT * FROM admin WHERE email = ?",
                        values: [credentials.email],
                    });

                    // Check if user exists
                    if (!Array.isArray(result) || result.length === 0) {
                        throw new Error("Invalid credentials");
                    }
                    const user = result[0];

                    // Compare passwords
                    const isMatch = await bcrypt.compare(credentials.password, user.password);
                    if (!isMatch) {
                        throw new Error("Incorrect password");
                    }

                    // Return the user object
                    return { id: user.id, email: user.email, username: user.username }; // Return sanitized user object
                } catch (error: any) {
                    console.error("Authorization error:", error);
                    throw new Error(error.message || "Error during authorization");
                }
            }
        })
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
                session.user.id = token.id;
                session.user.username = token.username;
            }
            return session;
        },
    },
    pages: {
        signIn: "/admin", // Customize your sign-in page path
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
