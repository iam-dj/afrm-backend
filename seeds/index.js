const sequelize = require("../config/connection");
const {
  User,
} = require("../models");

const userData = require("./user-seeds.json");

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        await User.bulkCreate(userData);
        console.log("Database seeded!");
        process.exit(0);
    } catch (err) { 
        console.error(err);
    }
};

seedDatabase();
