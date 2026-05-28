import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
        baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL
}); //Similar to auth object in auth.ts but this will utilize CSR rather than auth that only uses SSR

export const { signIn, signUp, signOut, useSession } = authClient;
/* useSession is to verify information of user as the application is running and also to get information otherwise */