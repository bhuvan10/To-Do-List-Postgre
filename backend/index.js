const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const todoRoute = require("./routes/todos");
const db = require("./routes/db");
db.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});
const app = express()

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.use("/todo", todoRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});
