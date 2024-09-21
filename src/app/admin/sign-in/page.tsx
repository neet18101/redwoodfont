'use client'
import React, { useState } from 'react';
import { Link } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import * as z from 'zod';
import toast from 'react-hot-toast';

interface FormErrors {
    email?: string;
    password?: string;
    general?: string;
}

function Page() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<FormErrors>({});
    const router = useRouter();

    // Define the validation schema using Zod
    const schema = z.object({
        email: z
            .string()
            .min(1, { message: "Email is required" })
            .email({ message: "Email is invalid" }),
        password: z
            .string()
            .min(1, { message: "Password is required" })
            .min(8, { message: "Password must be more than 8 characters" }),
    });

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Validate input data
        const result = schema.safeParse({ email, password });
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors({
                email: fieldErrors.email?.[0],
                password: fieldErrors.password?.[0],
            });
            return;
        }
        console.log(email, password);
        // Attempt to sign in
        const signInesult = await signIn("credentials", {
            redirect: false,
            email,
            password,
            // callbackUrl: "/admin/dashboard"  // Redirect to this URL on successful login
        });
        console.log(signInesult);
        if (signInesult?.ok) {
            router.push("/admin/dashboard");
        } else {
            setErrors({ general: signInesult?.error })
            toast.error(signInesult?.error);
        }
    };

    return (
        <div className="authincation fix-wrapper">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-6">
                        <div className="authincation-content">
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <div className="auth-form">
                                        <div className="text-center mb-3">
                                            <Link href="">
                                                <img src="images/logo/logo-full.png" alt="Logo" />
                                            </Link>
                                        </div>
                                        <h4 className="text-center mb-4">Admin Login</h4>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="mb-1 form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter your email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                {errors.email && <p>{errors.email}</p>}
                                            </div>
                                            <div className="mb-3 position-relative">
                                                <label className="form-label" htmlFor="dz-password">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="dz-password"
                                                    className="form-control"
                                                    placeholder="Enter Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                {errors.password && <p>{errors.password}</p>}
                                                <span className="show-pass eye">
                                                    <i className="fa fa-eye-slash" />
                                                    <i className="fa fa-eye" />
                                                </span>
                                            </div>
                                            {errors.general && <p>{errors.general}</p>}
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary btn-block">
                                                    Sign In
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
