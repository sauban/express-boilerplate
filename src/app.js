import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import routes from './routes';
import errorHandler from 'errorhandler';

const app = express();
app.disable('x-powered-by');

/** Winston logger config */

global.winston = winston;

/** Winston logger config end */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Primary app routes.  */
routes(app);
app.use(errorHandler());

// Catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).send('Endpoint does not exist');
});

export default app;