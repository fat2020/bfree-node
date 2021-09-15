//Permet de créer la db, le CRUD, nos tables, les relations...
const Sequelize = require("sequelize");

const db = {};

const dbinfo = new Sequelize("breakfree", "root", "root",{
    host: "localhost",
    dialect: "mysql",
    port: "3308",
    pool:{
        max: 5,
        min: 0,
    }
});

dbinfo.authenticate()
.then(() =>{
    console.log("Welcome")
})
.catch((err) => {
console.error("Try again !:", err);
});


db.client = require("../models/Client")(dbinfo, Sequelize);

db.dbinfo = dbinfo;
db.Sequelize = Sequelize;

//dbinfo.sync({force: true});

module.exports = db;
