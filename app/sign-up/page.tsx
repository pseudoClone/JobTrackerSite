"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignUp() {
        return (
                <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white">
                        <Card className="w-full max-w-md border-gray-200 shadow-lg">
                                <CardHeader className="space-y-2">
                                        <CardTitle className="text-2xl font-bold text-black">
                                                Sign Up
                                        </CardTitle>
                                        <CardDescription className="text-gray-500">Create an account to start tracking your applications.</CardDescription>
                                </CardHeader>
                                <form className="space-y-4">
                                        <CardContent className="space-y-4">
                                                <div className="space-y-2">
                                                        <Label htmlFor="name" className="text-gray-700">Name</Label>
                                                        <Input id="name" type="text" placeholder="John Doe" required />
                                                </div>
                                                <div className="space-y-2">
                                                        <Label htmlFor="email" className="text-gray-700">Email</Label>
                                                        <Input
                                                                id="email"
                                                                type="text"
                                                                placeholder="example@example.com"
                                                                className="border-gray-300 focus:border-blue-400"
                                                                required />
                                                </div>
                                                <div>
                                                        <Label htmlFor="password">Password</Label>
                                                        <Input id="password" type="password" required minLength={8} className="border-gray-300" />
                                                </div>
                                        </CardContent>
                                        <CardFooter className="flex flex-col space-y-4">
                                                <Button type="submit" className="w-full bg-gray-700">Sign Up</Button>
                                                {/* <Button type="submit">Sign In</Button> */}
                                                <p>Already have an account? <Link href="/sign-in"><u>Sign In</u></Link></p>
                                        </CardFooter>
                                </form>
                        </Card>
                </div >
        );
}