const {Sequelize} = require("sequelize");
const config = require("./config");

// Passing parameters separately (other dialects)
const db = new Sequelize(
  config.DB_NAME,
  config.DB_USERNAME,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST, // localhost as host server
    dialect: "postgres", // database dialect name
    logging: console.log, // using the console for logging
  },
);

(async function () {
  try {
    await db.authenticate();
    console.log("Authenticated to the db");
  } catch (err) {
    console.error("Unable to use the db");
    process.exit(1);
  }
})();

module.exports.db = db;
