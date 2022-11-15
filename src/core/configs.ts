import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import Router from 'koa-router';

// Load environment variables from ".env" file.
const env = dotenv.config();
dotenvExpand.expand(env);

// List of all environment variables that are strictly required.
const requiredEnvVars: Array<string> = [
  'RUNTIME_ENVIRONMENT',
  'PROTOCOL',
  'HOST',
  'PORT',
  'DB_USERNAME',
  'DB_PASSWORD',
  'MONGO_URI',
];

// Validates if the required environment variables are present.
function loadEnvironmentVariables() {
  let missingVariables: Array<string> = [];

  requiredEnvVars.forEach((envVar) => {
    if (process.env[envVar] === undefined) {
      missingVariables.push(envVar);
    }
  });

  if (missingVariables.length > 0) {
    throw new Error(`The following environment variables are missing: ${missingVariables}`);
  }
}

// Creates an instance of a Router with the default prefix "/api".
function createRouter(module: string) {
  return new Router({ prefix: `/api/${module}` });
}

export { createRouter, loadEnvironmentVariables };
