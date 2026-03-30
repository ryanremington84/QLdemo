"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Chrome, Mail, Lock } from "lucide-react";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

export const signinSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof signinSchema>;

export default function Signin() {
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState("");

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        setAuthError("");

        const res = await signIn("credentials", {
            email: data.email,
            password: data.password
        });

        setLoading(false);

        if (res?.error) {
            setAuthError("Please try again later");
        } else {
            window.location.href = "/dashboard";
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-white to-slate-100 flex items-center justify-center p-6">

            <Card className="w-full max-w-md backdrop-blur-xl bg-white/60 border border-slate-200 shadow-xl rounded-2xl">
                <CardContent className="p-8 flex flex-col gap-6">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 justify-center">
                        <img src="/images/assets/seo/ql_logo.png" className="w-8" />
                        <img src="/images/assets/seo/ql_text.png" className="w-28" />
                    </Link>

                    {/* Heading */}
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-slate-800">
                            Welcome back
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Sign in to continue
                        </p>
                    </div>

                    {/* Google Login */}
                    <Button
                        onClick={() => signIn("google")}
                        className="w-full flex items-center gap-2 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm"
                    >
                        <Chrome className="w-4 h-4" />
                        Continue with Google
                    </Button>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-slate-200" />
                        <span className="text-xs text-slate-400">OR</span>
                        <div className="flex-1 h-px bg-slate-200" />
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                        {/* Email */}
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <div>
                                    <div className="relative">
                                        <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400 z-10" />
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="Email"
                                            className="pl-9 bg-white/70 backdrop-blur border-slate-200"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="text-xs text-red-500 mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

                        {/* Password */}
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <div>
                                    <div className="relative">
                                        <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400 z-10" />
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Password"
                                            autoComplete="new-password"
                                            className="pl-9 bg-white/70 backdrop-blur border-slate-200"
                                        />
                                    </div>
                                    {errors.password && (
                                        <p className="text-xs text-red-500 mt-1">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

                        {/* Auth Error */}
                        {authError && (
                            <p className="text-sm text-red-500 text-center">
                                {authError}
                            </p>
                        )}

                        {/* Submit */}
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-slate-800 text-white hover:bg-slate-700"
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </Button>

                    </form>

                    {/* Footer */}
                    <p className="text-xs text-center text-slate-500">
                        Don’t have an account?{" "}
                        <Link href="/auth/signup" className="text-slate-700 hover:underline">
                            Sign up
                        </Link>
                    </p>

                </CardContent>
            </Card>
        </div>
    );
}