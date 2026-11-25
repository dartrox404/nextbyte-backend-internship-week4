const e = require("express");
const app = e();
const route = require("../routes/app_route");

app.use(e.json({ limit: "10Kb" }));
app.use("/api/v2/test", route);

app.use("/", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Api working fine",
  });
});

app.use(async (req, res) => {
  res.status(404).json({
    success: false,
    message: `${req.originalUrl} not found`,
  });
});

module.exports = app;
