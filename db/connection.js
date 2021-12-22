const mongoose = require("mongoose");
const URL = process.env.DATABASE;

mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log("Connection Successful");
}).catch((err) => console.log(err));