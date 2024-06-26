import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(config.database_url as string, {
      w: "majority",
      wtimeoutMS: 5000,
    });
    console.log("Connected to MongoDB");

    app.listen(config.port, () => {
      console.log(`This server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

main();
