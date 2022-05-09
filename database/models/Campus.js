/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://media.istockphoto.com/photos/university-in-autumn-picture-id173598452?k=20&m=173598452&s=170667a&w=0&h=HxRuZzeSaZKP0f0a634LL2KUDbom5hVSBI30Im9Ei1I="
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT,
  }
});

// Export the campus model
module.exports = Campus;