import express, { Request, Response } from "express";
import { propertiesRouter } from "./routes/properties.router";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome Back Neo!" });
});

app.use("/api/v1", propertiesRouter);

app.listen(port, () => {
  console.log(`Application started @ http://localhost:${port}/`);
});
