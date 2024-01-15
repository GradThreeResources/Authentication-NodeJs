const { createUser } = require("./models/user");
const { sequelize } = require("./database-config");

const test = async () => {
  try {
    console.log("before");
    const t = await sequelize.transaction();
    await createUser("mohamed", 'gmail.com', "pss", "mobile", t);
    await t.commit();
    console.log("done");
  } catch (error) {
    console.error("Error in test:", error);
  } finally {
    // Close the Sequelize connection
    await sequelize.close();
  }
};

test();
