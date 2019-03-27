module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'contactslist',
    user: process.env.DB_USER || 'contactslist',
    password: process.env.DB_PASS || 'contactslist',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './contactslist.sqlite'
    }
  }
}
