const mongoose = require('mongoose');

const {
    DB_URL
} = process.env;

mongoose.connect(DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connected to MongoDB.");
}).catch((e) => {
    console.log("Connection to MongoDB failed.")
})