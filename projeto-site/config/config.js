module.exports = {
  production: {
    username: 'Jose_Eduardo',
    password: 'Bernadete1',
    database: 'usuario',
    host: 'sitepessoal.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: {
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};

