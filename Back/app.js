const express = require('express');
const app = express();
// const BdController = require('./controllers/bdControllers');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const bdRouter = require('./Routes/bdRoutes');

// app.get('/', (_req, res) => {
//     res.send('Hello World');
// })

app.use('/', bdRouter)
// app.get('/', BdController.getAll);

module.exports = app;