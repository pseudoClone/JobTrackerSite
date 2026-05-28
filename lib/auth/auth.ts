import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter"; // Updated import
import { MongoClient } from "mongodb";

declare global {
        var _mongoClient: MongoClient | undefined;
}

if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is missing from environment variables");
}

const uri = process.env.MONGODB_URI;

// Prevent multiple MongoClient instances in development hot-reloads
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