const e = require("express");
const app = e.Router();

const {
  createUser,
  getUser,
  removeUser,
  updateUser,
} = require("../controller/app_controller");

app.route("/").get(getUser).post(createUser);
app.route("/:id").patch(updateUser).delete(removeUser);

module.exports = app;
