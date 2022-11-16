// Environment Variables
import { loadEnvironmentVariables } from './core/configs';
loadEnvironmentVariables();

import { blue, yellow } from 'chalk';
import Koa from 'koa';
import koaBody from 'koa-body';
import morgan from 'koa-morgan';
import { MongoDB } from './core/database/database';
import { filterUserObject, usersRouter } from './users/routes/user.routes';

async function start() {
  // Create an app instance
  const app = new Koa();

  const mongoDB = new MongoDB();
  await mongoDB.connect();

  app.use(morgan('common'));

  // Koa body parser
  app.use(koaBody());

  // Register server routes
  app.use(usersRouter.routes()).use(usersRouter.allowedMethods()).use(filterUserObject);

  // Start the server
  app.listen(process.env.PORT);

  if (process.env.RUNTIME_ENVIRONMENT === 'local') {
    console.log(
      blue('Server running on ') + yellow(`${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`)
    );
  }
}

try {
  start();
} catch (err) {
  throw new Error('Unknown error');
}
