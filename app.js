require("dotenv").config();
require("express-async-errors");
//async error
const express = require("express");
const app = express();
const notFound = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
const recipesRouter = require("./routes/recipes");

// Middleware
app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.send(
    '<h1>Store API</h1><a href="/api/v1/products" >Products route</a>  '
  );
});

app.use("/api/v1/products", productsRouter);
app.use("/api/v1/recipes", recipesRouter);
// Products route
app.use(notFound);
app.use(errorMiddleWare);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
