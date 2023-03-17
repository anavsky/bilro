const express = require('express');
// eslint-disable-next-line import/extensions
const routes = require('./routes');

const app = express();
const port = 3006;

routes(app);

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));

module.exports = app;
