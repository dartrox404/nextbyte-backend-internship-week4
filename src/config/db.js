const Joi = require("./joi");
const mongoose = require("mongoose");

exports.connectDatabse = async () => {
  try {
    const a = await mongoose.connect(Joi.config.db_url);
    console.log(
      `Database has been connected successfully : ${a.connection.host}`,
    );
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};
