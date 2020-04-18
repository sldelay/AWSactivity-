require("dotenv").config();
module.exports=
{
  "development": {
    "username": "process.env.HOST_DOMAIN",
    "password": "process.env.PASSWORD",
    "database": "my_database",
    "host": "database-2.cwiqxal7uvys.us-east-1.rds.amazonaws.com",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "process.env.HOST_DOMAIN",
    "password": "process.env.PASSWORD",
    "database": "my_database",
    "host": "database-2.cwiqxal7uvys.us-east-1.rds.amazonaws.com",
    "port": 3306,
    "dialect": "mysql"
  }
}
