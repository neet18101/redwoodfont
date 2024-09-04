import Credentials from "next-auth/providers/credentials";
import executeQuery from "@/utils/connectDB";

export const authOptions = {
    session: {
        strategy: "jwt",
        maxAge: 2 * 24 * 60 * 60,  // Corrected typo
    },
    providers: [
        Credentials({
            type: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter your Email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your Password"
                },
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

                const result = await executeQuery(query, []);

                if (result.length > 0) {
                    return result[0];
                } else {
                    return null;
                }
            }

        })
    ],

    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.email = user.email;
                token.username = user.user;
                token.accessToken = user.accessToken;
            }
            return token;
        },
        session: ({ session, token, user }) => {
            if (token) {
                session.user.email = token.email;
                session.user.username = token.username;
                session.user.accessToken = token.accessToken;
            }
            return session;
        },
    },

    pages: {
        signIn: "/sign-in",
        signOut: "/sign-in",
        error: "/sign-in",

    }

};
