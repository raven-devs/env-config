import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import nconf from 'nconf';
import path from 'path';

/**
 * copy content from .env_demo to .env
 * npm run demo:nconf
 */

const env = dotenv.config({ path: './.env' });
if (env.error) {
  throw env.error;
}

const envParsed = dotenvExpand.expand(env);
if (envParsed.error) {
  throw envParsed.error;
}

const config = nconf
  // 1. Overrides
  .overrides({
    MONGODB_DB: 'db_override',
  })
  // 2. Command-line arguments
  .argv()
  // 3. Environment variables
  .env()
  // 4. Config file
  .file({ file: path.join(__dirname, '/nconf.config.json') }) // env variables with same name will NOT be overridden
  // 5. Defaults
  .defaults({
    UNDEFINED_CONFIG3: 'default',
  });

console.log('config', config.get());

console.log('config.argv.command1', config.get('command1'));
console.log('config.argv.command2', config.get('command2'));
console.log('config.argv.undefined_command3', config.get('undefined_command3'));

console.log('config.env.NODE_ENV', config.get('NODE_ENV'));
console.log('config.env.MONGODB_URI', config.get('MONGODB_URI'));
console.log('config.env.UNDEFINED', config.get('UNDEFINED'));
console.log('config.env.ESCAPED', config.get('ESCAPED'));
console.log('config.env.UNDEFINED_WITH_DEFAULT', config.get('UNDEFINED_WITH_DEFAULT'));
console.log('config.env.DEFINED_WITH_DEFAULT', config.get('DEFINED_WITH_DEFAULT'));
console.log(
  'config.env.UNDEFINED_WITH_DEFINED_NESTED',
  config.get('UNDEFINED_WITH_DEFINED_NESTED'),
);
console.log(
  'config.env.UNDEFINED_WITH_UNDEFINED_NESTED',
  config.get('UNDEFINED_WITH_UNDEFINED_NESTED'),
);

console.log('config.config.CONFIG1', config.get('CONFIG1'));
console.log('config.config.CONFIG2', config.get('CONFIG2'));
console.log('config.config.UNDEFINED_CONFIG3', config.get('UNDEFINED_CONFIG3'));

console.log('config.config.MONGODB_DB (test override)', config.get('MONGODB_DB'));
console.log('config.config.MONGODB_USER (test override)', config.get('MONGODB_USER'));
