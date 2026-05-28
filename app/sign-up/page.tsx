"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { signUp } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function SignUp() {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const [error, setError] = useState("");
        const [loading, setLoading] = useState(false);

        const router = useRouter(); // This hook will route the user after sign up (for this case) in a client side page

        async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
                e.preventDefault(); // Prevents page refresh on every form submit
                setError("");
                setLoading(true);

                try {
                        const result = await signUp.email({
                                name,
                                email,
                                password,
                        }); // These come from the state
                        if (result.error) {
                                setError(result.error.message ?? "Failed to sign up");
                        } // Better-auth returns either an error or a results
                        else {
                                router.push("/dashboard");
                        }
                } catch (err) {
                        setError("Unexpected error occurred");
                } finally {
                        setLoading(false);
                }
        }

        return (
                <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white">
                        <Card className="w-full max-w-md border-gray-200 shadow-lg">
                                <CardHeader className="space-y-2">
                                        <CardTitle className="text-2xl font-bold text-black">
                                                Sign Up
                                        </CardTitle>
                                        <CardDescription className="text-gray-500">Create an account to start tracking your applications.</CardDescription>
                                </CardHeader>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                        <CardContent className="space-y-4">
                                                {error && (
                                                        <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">{error}</div>
                                                )}
                                                <div className="space-y-2">
                                                        <Label htmlFor="name" className="text-gray-700">Name</Label>
                                                        <Input id="name" type="text" placeholder="John Doe" required value={name} onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div className="space-y-2">
                                                        <Label htmlFor="email" className="text-gray-700">Email</Label>
                                                        <Input
                                                                id="email"
                                                                type="text"
                                                                placeholder="example@example.com"
                                                                className="border-gray-300 focus:border-blue-400"
                                                                value={email} onChange={(e) => setEmail(e.target.value)}
                                                                required />
                                                </div>
                                                <div>
                                                        <Label htmlFor="password">Password</Label>
                                                        <Input id="password" type="password" required minLength={8} className="border-gray-300"
                                                                value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                        </CardContent>
                                        <CardFooter className="flex flex-col space-y-4">
                                                <Button type="submit" className="w-full bg-gray-700" disabled={loading}>
                                                        {loading ? "Creating account..." : "Sign Up"}
                                                </Button>
                                                {/* <Button type="submit">Sign In</Button> */}
                                                <p>Already have an account? <Link href="/sign-in"><u>Sign In</u></Link></p>
                                        </CardFooter>
                                </form>
                        </Card>
                </div >
        );
}