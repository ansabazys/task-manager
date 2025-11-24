import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Should provide the MONGO_URI");
}

export async function DBConnect() {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export default DBConnect