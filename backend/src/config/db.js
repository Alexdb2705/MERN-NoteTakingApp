import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alejandrodelbarrioagudo:hWFXa0I6HuMKJVGi@cluster0.48eshpu.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MONGODB CONNECTED SUCCESFULLY! ");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    process.exit(1); // 1:= exit with failure 0:= exit with success
  }
};