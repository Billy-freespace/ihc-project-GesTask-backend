const getAllUsers = async (req, res) => {};

const getUserbyUsername = async (req, res) => {
  const { userModel } = req.context.models;
  const user = await userModel.findOne({ username: req.body.username });
  return user;
};

const createUser = async (req, res) => {
  const { userModel } = req.context.models;
  const user = await userModel.create(req.body);
  res.status(201).json(user);
};

export { getAllUsers, getUserbyUsername, createUser };
