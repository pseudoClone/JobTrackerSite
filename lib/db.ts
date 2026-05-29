import mongoose, { mongo } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
        throw new Error("Please define a valid MongoDB URI in the env file");
}

// Refer to the Mongoose Docs, Iontknow TS as much as people at MongoDB Inc.
interface MongooseCache {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
}

declare global {
        var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
        global.mongoose = cached;
}

async function connectDB() {
        if (!MONGODB_URI) {
                throw new Error("Please define a valid MongoDB URI in the env file");
        }

        if (cached.conn) {
                return cached.conn;
        }
        if (!cached.promise) {
                const opts = {
                        bufferCommands: false,
                };
                cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
                        return mongoose;
                });
        }
        try {
                cached.conn = await cached.promise;
        } catch (e) {
                cached.promise = null;
                throw e;
        }
        return cached.conn;
}

export default connectDB;