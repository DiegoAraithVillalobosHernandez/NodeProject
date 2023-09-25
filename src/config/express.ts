import bodyParser from "body-parser";
import express, { Application } from "express";
import cors from "cors";
const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ limit: "50mb" }));

// App - routes

export default app;
