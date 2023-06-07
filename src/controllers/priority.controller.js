const getPriorities = async (req, res) => {
  try {
    const { taskModel } = req.context.models;
    const userId = req.user._id;
    const priority = req.params.priority;
    const priorities = await taskModel
      .find({ priority, user: userId })
      .sort({ deadline: 1 });
    res.json(priorities);
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
};

export { getPriorities };
