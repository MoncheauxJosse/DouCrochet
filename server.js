const express = require('express')
const serverConfig = require('./app/config/server.config')
const cors = require('cors')
const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost:27017/DouCrochet";
const User = require('./app/services/newUser')
const produstRoute = require('./app/services/newProduct')
const roleRoute = require('./app/routes/role.router')
const userRoute = require('./app/routes/user.router')


const rolecontroller = require('./app/controllers/role.controller')

mongoose.connect(mongoDB).then(r => {
    console.log('Connected to MongoDB')
});
// Get the default connection

const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)

db.on("error", console.error.bind(console, "MongoDB connection error:"));
const PORT = serverConfig.PORT || 5000
const app = express()

const corsOptions = {
    origin:'*',
    credentials: true,
    optionsSuccessStatus:200,
    methods: "*"
}

app.use(cors(corsOptions));

app.use(express.json())

app.use("/role", roleRoute)
app.use("/users", userRoute)

//appel la route ProductRoute
app.use('/creerProduit',produstRoute)

app.listen(PORT,  () => console.log(`Server is running on port ${PORT}`));


