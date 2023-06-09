require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const routes = require('./routes/routes')
const port = process.env.PORT;

app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port} `);
})
