"use client";

import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { getSession, signOut } from "@/lib/auth/auth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./client/signoutbtn";
import { useSession } from "@/lib/auth/auth-client";

export default function Navbar() { // Server functions in NextJS can somehow be asynchronus. 
        // const session = await getSession();
        const { data: session } = useSession();
        return (
                <nav className="border-b border-gray-400 bg-white">
                        <div className="container mx-8 flex h-10 items-center px-4 justify-between">
                                <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
                                        <Briefcase />
                                        Job Tracker
                                </Link>
                                <div className="flex items-center gap-4">
                                        {session?.user ? (
                                                <>
                                                        <Link href="/dashboard">
                                                                <Button
                                                                        variant="ghost"
                                                                        className="text-black hover:text-blue-600"
                                                                >
                                                                        Dashboard
                                                                </Button>
                                                        </Link>
                                                        <DropdownMenu>
                                                                <DropdownMenuTrigger asChild>
                                                                        <Button variant="ghost" className="text-black" >
                                                                                <Avatar>
                                                                                        <AvatarFallback className="bg-teal-400">
                                                                                                {session.user.name[0].toUpperCase()}
                                                                                        </AvatarFallback>
                                                                                </Avatar>
                                                                        </Button>
                                                                </DropdownMenuTrigger>
                                                                <DropdownMenuContent className="w-fit" align="end">
                                                                        <DropdownMenuLabel className="font-normal">
                                                                                <div className="flex flex-col space-y-1">
                                                                                        <p className="text-sm font-medium leading-none">
                                                                                                {session.user.name}
                                                                                        </p>
                                                                                        <p className="text-xs leading-none text-gray-700">
                                                                                                {session.user.email}
                                                                                        </p>
                                                                                </div>
                                                                        </DropdownMenuLabel>
                                                                        <SignOutButton />
                                                                </DropdownMenuContent>
                                                        </DropdownMenu>
                                                </>
                                        ) :
                                                (
                                                        <>
                                                                <Link href="/sign-up">
                                                                        <Button className="mx-2 px-2 py-1 hover:bg-black/80" >
                                                                                Start for free
                                                                        </Button>
                                                                </Link>

                                                                <Link href="/sign-in">
                                                                        <Button className="mx-2 px-2 py-1 hover:bg-black/80" >
                                                                                Sign in
                                                                        </Button>
                                                                </Link>
                                                        </>
                                                )
                                        }
                                </div>
                        </div>

                </nav >
        );
}