import * as dotenv from 'dotenv';
dotenv.config();

const requiredEnvVars: Array<string> = ['RUNTIME_ENVIRONMENT', 'PROTOCOL', 'HOST', 'PORT'];

const missingVariables: Array<string> = [];

/** Validates if the required environment variables are present **/
export const loadEnvironmentVariables = () => {
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      console.log(envVar, missingVariables);
    }
  });

  if (missingVariables.length) {
    console.log('[ERROR] Missing Environment Variables', missingVariables);
    process.exit(-1);
  }
};
