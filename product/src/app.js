import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

const swaggerDocument = YAML.load('./swagger/product.yaml');

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso');
});

const app = express();

app.use('/product/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
routes(app);

export default app;
