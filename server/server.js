const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "This is what the fuck bro." });
});

// const postRouter = require('./app/routes/Comments');
// app.use("/comments", postRouter);


// set port, listen for requests
const PORT = process.env.PORT || 8080;

const db = require("./app/models");
db.sequelize.sync().then(
    () => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        })
    }
).catch((err) => {
    console.log(`Failed to run on port ${PORT}.`);
    console.log(err)
});

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

