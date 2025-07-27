const express = require("express");

const app = express();
const {PORT} = require("./config/serverConfig");

const prepareAndStartServer = ()=>{
    app.use(express.json());
    app.listen(PORT,(error)=>{
        if(error) {
            console.log("Something went wrong to start the server");
            process.exit(1);
        }

        console.log("Server started at PORT: ", PORT);
    })
};

prepareAndStartServer();