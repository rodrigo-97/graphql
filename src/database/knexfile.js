// Update with your config settings.
const env = require("../../.env")
module.exports = {
  client: 'postgresql',
  connection: {
    database: env.database.database,
    user: env.database.user,
    password: env.database.password
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
