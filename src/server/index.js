const app = require("../app/app");
const Joi = require("../config/joi");
const { connectDatabse } = require("../config/db");
const PORT = Joi.config.port || 4040;
const base_url = Joi.config.base_url;

const start = async (req, res) => {
  try {
    await connectDatabse();
    app.listen(PORT, () => console.log(`Server is running on : ${base_url}`));
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

start();
