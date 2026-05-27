import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";

export default function Navbar() {
        return (
                <nav className="border-b border-gray-400 bg-white">
                        <div className="container mx-8 flex h-10 items-center px-4 justify-between">
                                <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
                                        <Briefcase />
                                        Job Tracker
                                </Link>
                                <div className="flex">

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
                                </div>
                        </div>

                </nav >
        );
}