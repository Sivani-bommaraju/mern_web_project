import express from "express";
import { ENV } from "./lib/env.js";

const app = express();

console.log(ENV.PORT);
console.log(ENV.DB_URL);

app.get("/", (req, res) => {
  res.json({ msg: "hiiii" });
});

app.listen(4000, () => {
  console.log(`Server is running on 4000`);
});
