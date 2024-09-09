import mongoose, { connection } from "mongoose";

async function dbConnect() {
  if (connection.isConnected) {
    console.log("Already DB Connected!!");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("Db Connected Successfully !");
  } catch (error) {
    console.log("Error While connecting to DB", error.message);
    process.exit(1);
  }
}

export default dbConnect;
