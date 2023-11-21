import mongoose from "mongoose";


// mongoose.connect(`mongodb://127.0.0.1:27017/habits_db`);
mongoose.connect(`mongodb+srv://ravibarla1:ITN4XohS6s4A8E13@cluster0.znxw3pz.mongodb.net/?retryWrites=true&w=majority`)

export const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting to mongodb"));

db.once("open", () => {
  console.log("connect to database :: mongodb");
});
