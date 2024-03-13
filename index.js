import express from "express";
import render from "ejs";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const result = await axios.get(
    " https://hindi-jokes-api.onrender.com/jokes?api_key=e23640a0f43088c93cdc519b4ae8"
  );
  res.render("index.ejs", {
    jokeContent: result.data.jokeContent,
  });
});

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
