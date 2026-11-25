const userModel = require("../model/app_model");

exports.createUser = async (req, res) => {
  try {
    const { name, age } = req.body;
    if (!name || !age) {
      return res.status(400).json({
        success: false,
        message: "Bad Input Something is missing",
      });
    }
    const user_ex = await userModel.findOne({ name });
    if (user_ex) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }
    const result = await userModel.create({ name, age });
    res.status(201).json({
      success: true,
      message: "User has been created successfully",
      context: result,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `Something has gone wrong : ${e.message}`,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await userModel.find().sort({ createdAt: -1 });
    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No data found in database add some",
      });
    }

    res.status(200).json({
      success: true,
      message: "User has been fetched successfully",
      context: users,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `Something has gone wrong : ${e.message}`,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, age } = req.body;
    if (!name || !age) {
      return res.status(400).json({
        success: false,
        message: "Bad Input Something is missing",
      });
    }
    const user_id = req.params.id;
    if (!user_id) {
      return res.status(404).json({
        success: false,
        message: "id not found",
      });
    }
    const result = await userModel.findByIdAndUpdate(
      user_id,
      {
        name,
        age,
      },
      {
        new: true,
        runValidators: true,
      },
    );
    res.status(200).json({
      success: true,
      message: "User has been updated successfully",
      context: result,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `Something has gone wrong : ${e.message}`,
    });
  }
};

exports.removeUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    if (!user_id) {
      return res.status(404).json({
        success: false,
        message: "Id not found",
      });
    }
    const result = await userModel.findByIdAndDelete(user_id);
    res.status(200).json({
      success: true,
      message: "User has been removed successfully",
      context: result,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `Something has gone wrong : ${e.message}`,
    });
  }
};
