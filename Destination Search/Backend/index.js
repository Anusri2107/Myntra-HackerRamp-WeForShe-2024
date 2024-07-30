import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import productRoute from "./routes/product.route.js"

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

//connecting to mongodb
try {
  mongoose.connect(URI);
  console.log("Connected to Mongo DB");
} catch (error) {
  console.log(error);
}

//defining routes
app.use("/product",productRoute)

app.get("/", (req, res) => {
  res.send("Destination Search");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
