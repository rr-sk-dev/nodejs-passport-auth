import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
const env = dotenv.config();
dotenvExpand.expand(env);

const requiredEnvVars: Array<string> = ['RUNTIME_ENVIRONMENT', 'PROTOCOL', 'HOST', 'PORT'];

const missingVariables: Array<string> = [];

/** Validates if the required environment variables are present **/
export const loadEnvironmentVariables = () => {
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      missingVariables.push(envVar);
    }
  });

  if (missingVariables.length) {
    console.log('[ERROR] Missing Environment Variables', missingVariables);
    process.exit(-1);
  }
};
