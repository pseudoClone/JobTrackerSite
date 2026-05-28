import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

declare global {
        var _mongoClient: MongoClient | undefined;
}

if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is missing from environment variables");
}

const uri = process.env.MONGODB_URI;

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
        if (!global._mongoClient) {
                global._mongoClient = new MongoClient(uri);
        }
        client = global._mongoClient;
} else {
        client = new MongoClient(uri);
}

const db = client.db();

export const auth = betterAuth({
        database: mongodbAdapter(db, {
                client,
        }),
        emailAndPassword: {
                enabled: true,
        },
});

// Since navbar is not a Client Side component, we use auth's getsession to check if the user is validated. 
// If auth flips out because I used it in sign up and sign in, I'm fucked
export async function getSession() {
        const result = await auth.api.getSession({
                headers: await headers(), //Allows me to read HTTP headers in Server Components, ....
        })
        return result;
}

export async function signOut() {
        const result = await auth.api.signOut({
                headers: await headers(),
        });
        if (result.success) {
                redirect("/sign-in")
        }
}