import mongoose from "mongoose";

export default async function connectToDatabase() {
    const uri = process.env.MONGO_DSN ?? "";
    console.log("Trying to connect to ", uri);
    mongoose.connect(uri);

    return mongoose.connection;
}

