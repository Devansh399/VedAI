import express from "express";
import dotenv from "dotenv";    
import connectDb from "./config/db.js";  
import router from "./routes/auth.routes.js";

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/', router); // Use the router for handling routes

app.get("/", (req, res) => {
  res.json({ message: "Auth service is running" });
});


app.listen(port, () => {
  console.log(`Auth service is running on port ${port}`);
  connectDb(); // Call the connectDb function to establish a connection to MongoDB
});