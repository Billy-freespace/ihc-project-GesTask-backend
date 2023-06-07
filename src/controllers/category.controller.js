const createCategory = async (req, res) => {
  try {
    const { categoryModel } = req.context.models;
    const { name } = req.body;
    const userId = req.user._id;
    // Verificar si el usuario ya tiene una categoría con el mismo nombre
    const existingCategory = await categoryModel.findOne({
      name,
      user: userId,
    });
    if (existingCategory) {
      return res
        .status(400)
        .json({ error: `Ya se creó una categoría con el nombre: ${name}` });
    }
    const newCategory = new categoryModel({ name, user: userId });
    const createdCategory = await newCategory.save();
    res.status(201).json(createdCategory);
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
};

const getCategories = async (req, res) => {
  try {
    const { categoryModel } = req.context.models;
    const userId = req.user._id;
    const categories = await categoryModel.find({ user: userId });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
};

export { createCategory, getCategories };
