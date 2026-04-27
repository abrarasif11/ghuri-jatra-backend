import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://poth-jatra:I8SNzbMD0YXlpe5G@cluster0.vhdpi0m.mongodb.net/poth-jatra?appName=Cluster0"
    );
    console.log("DB Connected");

    server = app.listen(5000, () => {
      console.log("Server is running on 5000");
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
