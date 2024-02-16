// imports
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const moment = require('moment');
const { Vonage } = require('@vonage/server-sdk')

// routes
const authRoutes = require('./Routes/authRoutes');
const nodeRoutes = require('./Routes/nodeRoutes');
const apiRoutes = require('./Routes/apiRoutes');

// initialize
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// variables
const port = 5000;
const vonage = new Vonage({
    apiKey: "dc32a1c8",
    apiSecret: "xXGM7eZLqFDNqB07"
  });

const date = moment().format('YYYY-MM-DD');
const time = moment().format('HH:mm:ss');

// Routes
app.use("/auth/", authRoutes)
app.use("/node/", nodeRoutes)
app.use("/api/", apiRoutes)

// default route
app.get("/", (req, res) => {
    res.send("Server running ✅");
});

// start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
  