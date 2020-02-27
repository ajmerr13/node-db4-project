// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe5.db3'
    },
    useNullAsDefault: true,
    seeds: {
      directory: './data/seeds'
    }
  }, 
  migrations: {
    directory: './migrations/20200224130032_create_tables'
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    }
  }

} 