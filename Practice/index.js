const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const { json } = require("stream/consumers");
const exp = require("constants");
const cookieParser = require("cookie-parser");
// MongoDB Connections
const mongoConnect = require("./connection");
// All routers
const urlRouter = require("./routes/url");
const staticRouter = require("./routes/static");
const userRouter = require("./routes/users");
const {restrictToLoggedinUserOnly} = require("./middlewares/auth");

mongoConnect("mongodb://127.0.0.1:27017/practice")
    .then(() => { console.log("MongoDB connected")})
    .catch((err) => { console.log(`some error occured ${err}`)});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

app.use("/", staticRouter);
app.use("/url", restrictToLoggedinUserOnly, urlRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`server started listening on ${PORT}`);
})