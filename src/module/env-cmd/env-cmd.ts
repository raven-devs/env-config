/**
 * copy content from .env_demo to .env
 * npm run demo:env-cmd
 * NODE_ENV=development npx env-cmd npx ts-node ./src/module/env-cmd/env-cmd.ts
 */

const { NODE_ENV, MONGODB_USER, MONGODB_PASSWORD } = process.env;

console.log({
  NODE_ENV,
  MONGODB_USER,
  MONGODB_PASSWORD,
});
