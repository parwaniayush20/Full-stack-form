const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

dotenv.config({ path: "./config.env" })
require("./db/connection");
app.use(express.json());
app.use(require("./router/auth"));

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})