import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

/**
 * copy content from .env_demo to .env
 * npm run demo:dotenv
 */

const env = dotenv.config({ path: './.env' });
if (env.error) {
  throw env.error;
}

const envParsed = dotenvExpand.expand(env);
if (envParsed.error) {
  throw envParsed.error;
}

const {
  NODE_ENV,
  MONGODB_URI,
  UNDEFINED,
  ESCAPED,
  UNDEFINED_WITH_DEFAULT,
  DEFINED_WITH_DEFAULT,
  UNDEFINED_WITH_DEFINED_NESTED,
  UNDEFINED_WITH_UNDEFINED_NESTED,
} = process.env;

console.log({
  NODE_ENV,
  MONGODB_URI,
  UNDEFINED,
  ESCAPED,
  UNDEFINED_WITH_DEFAULT,
  DEFINED_WITH_DEFAULT,
  UNDEFINED_WITH_DEFINED_NESTED,
  UNDEFINED_WITH_UNDEFINED_NESTED,
});
