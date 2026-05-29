// Middleware(Intercept each request response cycle)

import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

/* Thought this was cool so I kept it
        Found this in the dev server logs when I created the proxy file but not populated it with it's default export function:
        This function is what Next.js runs for every request handled by this proxy (previously called middleware).
*/

export default async function proxy(request: NextRequest) {
        const session = await getSession();
        const isDashBoardPage = request.nextUrl.pathname.startsWith("/dashboard");
        if (isDashBoardPage && !session?.user) {
                return NextResponse.redirect(new URL("/sign-in", request.url));
        }
        const isSignInPage = request.nextUrl.pathname.startsWith("/sign-in");
        const isSignUpPage = request.nextUrl.pathname.startsWith("/sign-up");

        if ((isSignInPage || isSignUpPage) && session?.user) {
                return NextResponse.redirect(new URL("/dashboard", request.url)); // Why sign up and sign in where you are already logged in
        }

        return NextResponse.next(); // Always in middleware do this if all the check for the middleware conditions skip/fails
}