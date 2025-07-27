const express = require("express");

const app = express();
const {PORT} = require("./config/serverConfig");

const seedRoutes = require("./routes/seedRoutes");
const tableRoutes = require("./routes/tableRoutes");

const prepareAndStartServer = ()=>{
    app.use(express.json());

    // Routes
    app.use('/api',seedRoutes);
    app.use('/api',tableRoutes);
    app.listen(PORT,(error)=>{
        if(error) {
            console.log("Something went wrong to start the server");
            process.exit(1);
        }

        console.log("Server started at PORT: ", PORT);
    })
};

prepareAndStartServer();