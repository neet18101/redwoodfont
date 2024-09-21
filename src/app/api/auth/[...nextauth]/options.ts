import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import executeQuery from "@/utils/executeQuery";

interface User {
    id: number;
    email: string;
    username: string;
    password: string;
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
            async authorize(credentials): Promise<any> {

                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }
                try {
                    console.log(credentials.email, credentials.password);

                    // Query to find the user by email
                    const result = await executeQuery({
                        query: "SELECT * FROM admin WHERE email = ?",
                        values: [credentials.email],
                    });

                    if (!Array.isArray(result) || result.length === 0) {
                        throw new Error("Invalid credentials");
                    }
                    const user = result[0];
                    const isMatch = await bcrypt.compare(credentials.password, user?.password);
                    console.log(isMatch);
                    if (!isMatch) {
                        throw new Error("Incorrect password");
                    }
                    console.log(user);
                    return user;  // Return the user object if authentication is successful
                } catch (error: any) {
                    throw new Error(error.message || "Error during authorization");
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
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
        signIn: "/admin/sign-in",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
