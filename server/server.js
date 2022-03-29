const express = require("express");
const cors = require("cors");
const db = require("./app/models/database")
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//     res.json({ message: "This is what the fuck bro." });
// });

const reviewRoute = require('./app/routes/review.route');
app.use("/reviews", reviewRoute);


const loginRoute = require('./app/routes/login.route');
app.use("/login", loginRoute);

const registerRoute = require('./app/routes/register.route');
app.use("/register", registerRoute);

const productRoute = require('./app/routes/product.route')
app.use("/products", productRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})


db.connect((err, res) => {
    if (err) {
        console.log("|| Database failed to connect...")
        console.log(error);
    } else {
        console.log("|| Database successfully connected!!!")
    }
})

