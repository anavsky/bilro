import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import passport from 'passport';
import db from '../src/config/dbConnect.js';
import routes from '../src/routes/routes.js';
import '../src/middlewares/authentication.js';

const swaggerDocument = YAML.load('./src/swagger/rendeiras.yaml');

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso');
});

const app = express();

// app.use(session({...}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
routes(app);

export default app;
