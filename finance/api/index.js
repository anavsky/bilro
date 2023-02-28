const express = require('express')
const routes = require('./routes')

const app = express();
const port = 3001;

routes(app);

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));

module.exports = app