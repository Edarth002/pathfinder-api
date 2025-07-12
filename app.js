import express from "express";
import locationRoute from "./routes/locationRoute.js";
import pathRoute from "./routes/pathRoute.js"

const app = express();
const Port = 5000;

app.use('/api', locationRoute)
app.use('/api', pathRoute)

app.listen(Port, () => {
  console.log(`${Port} is running expectedly`);
});
