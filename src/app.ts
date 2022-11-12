// Environment Variables
import { loadEnvironmentVariables } from './core/utils';
loadEnvironmentVariables();

import Koa from 'koa';
import koaBody from 'koa-body';
import { connectToDatabase } from './core/database';
import { usersRouter } from './users/users.controller';

async function run() {
  // Connect to the database
  await connectToDatabase();

  // Create an app instance
  const app = new Koa();

  // Koa body parser
  app.use(koaBody());

  // Register server routes
  app.use(usersRouter.routes()).use(usersRouter.allowedMethods());

  // Start the server
  app.listen(process.env.PORT);

  if (process.env.RUNTIME_ENVIRONMENT === 'local') {
    console.log(`Server running on ${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT} `);
  }
}

try {
  run();
} catch (err) {
  console.log(err);
  process.exit(-1);
}
