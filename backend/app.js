// imports
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const moment = require('moment');

// routes
const authRoutes = require('./Routes/authRoutes');
const nodeRoutes = require('./Routes/nodeRoutes');
const apiRoutes = require('./Routes/apiRoutes');

// initialize
const app = express();

// middleware
app.use(cors({
    origin: "http://localhost:3006"
}));
app.use(express.json());

// variables
const port = 5000;

// Routes
app.use("/auth", authRoutes)
app.use("/node", nodeRoutes)
app.use("/api", apiRoutes)

// default route
app.get("/", (req, res) => {
    res.send("Server running ✅");
});

// start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
  