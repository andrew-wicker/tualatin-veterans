import * as dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import apiRouter from "./routes/api";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only this origin
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Allow specific methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  })
);
app.use(express.json());

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, world!');
// });

app.use("/api/", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
