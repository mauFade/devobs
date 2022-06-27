import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";

const app = express();
const port = 8080;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.info(`HTTP server listening on port ${port}`);
});
