// Environment Variables
import { loadEnvironmentVariables } from './core/utils';
loadEnvironmentVariables();

import Koa from 'koa';
import { connectToDatabase } from './core/database';
import { UsersRoutes } from './users/user.routes';

async function run() {
  // Connect to the database
  await connectToDatabase();

  // Create an app instance
  const app = new Koa();

  // Register server routes
  const userRoutes = new UsersRoutes();
  userRoutes.configureRoutes(app);

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
