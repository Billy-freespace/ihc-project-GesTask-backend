const createTask = async (req, res) => {
  try {
    const { taskModel } = req.context.models;
    const {
      name,
      description,
      comments,
      categories,
      priority,
      deadline,
      status,
    } = req.body;
    const userId = req.user._id;
    console.log("task properties obteined");
    // const categoryIds = categories.map((category) => category._id);
    // // Verificar si los IDs de categoría son válidos
    // const validCategoryIds = await Category.find({
    //   _id: { $in: categoryIds },
    //   user: userId,
    // }).distinct("_id");
    // // Verificar si se encontraron todos los IDs válidos
    // if (validCategoryIds.length !== categoryIds.length) {
    //   throw new Error("IDs de categoría inválidos");
    // }
    // Crear una nueva instancia de Task con los datos recibidos
    const newTask = new taskModel({
      name,
      description,
      comments,
      categories,
      priority,
      deadline,
      status,
      user: userId,
    });
    console.log("Task model created");

    // Guardar la nueva tarea en la base de datos
    const createdTask = await newTask.save();
    console.log("Task saved");

    res.status(201).json(createdTask);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ error: "IDs de categoría inválidos" });
    }
    res.status(400).json({ error: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const { taskModel } = req.context.models;
    const userId = req.user._id; // Obtén el _id del usuario desde req.user

    // Obtén todas las tareas asociadas al usuario
    const tasks = await taskModel.find({ user: userId });

    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar una tarea del usuario
// Actualizar una tarea del usuario
const updateTask = async (req, res) => {
  try {
    const { taskModel } = req.context.models;
    const task = await taskModel.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    const {
      name,
      description,
      comments,
      categories,
      priority,
      deadline,
      status,
    } = req.body;
    if (name) {
      task.name = name;
    }
    if (description) {
      task.description = description;
    }
    if (comments) {
      task.comments = comments;
    }
    if (categories) {
      task.categories = categories;
    }
    if (priority) {
      task.priority = priority;
    }
    if (deadline) {
      task.deadline = deadline;
    }
    if (status) {
      task.status = status;
    }
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una tarea del usuario
const deleteTask = async (req, res) => {
  try {
    const { taskModel } = req.context.models;
    const task = await taskModel.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await taskModel.deleteOne({ _id: req.params.id, user: req.user._id });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { createTask, getTasks, updateTask, deleteTask };
