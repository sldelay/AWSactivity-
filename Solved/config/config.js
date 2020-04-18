require("dotenv").config();
module.exports=
{
  development: {
    username: process.env.HOST_DOMAIN,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: 3306,
    dialect: "mysql"
  },
  production: {
    username: process.env.HOST_DOMAIN,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: 3306,
    dialect: "mysql"
  },
}
