import app from './src/account/src/app.js';

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
