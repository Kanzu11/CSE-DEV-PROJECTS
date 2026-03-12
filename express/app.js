// import express from "express"

// const port = 3000;

// const app = express();

// const logger = (req,res, next) =>{
//     console.log("page opened"`${req.url}`);                                                      
//     next();
// };

// app.use(logger)


// app.get("/", (req, res) => {
//     res.send("Hello, World!")
// });

// app.get("/about/", (req, res) => {
//     res.status(201).json({ message: "About Us" });
// });

// app.get("/help", (req,res) =>{
//     res.json({message: "help page"});
//     console.log("this is help page");
// })
// app.listen(port, () => {
//     console.log(`app running on port ${port}`)
// })
import express from "express";
import gameRoutes from "./routes/gameRoutes.js";
import logger from "./middleware/logger.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(logger);   // global middleware

app.use("/games", gameRoutes);


app.listen(PORT, () => {
  console.log(`Game Store API running on port ${PORT}`);
});



