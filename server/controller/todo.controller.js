const Todo = require('../model/todo.model');

// to create todo
exports.addTodo = async (req, res) => {
    try {
        const todo = await new Todo(req.body).save();
        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding todo', error: error.message });
    }
}

//get all todos
exports.getAllTodos = (req, res) => {
    Todo.find().exec((err, todos) => {
        res.status(200).json(todos);
        if (err) return res.status(400).json({ error: "No todo" });
    });
}

// get todo by id
exports.getTodoByID = (req, res) => {
    const id = req.params.id;
    Todo.findById(id).exec((err, todo) => {
        res.json(todo);
    });
}

// update todo
exports.updateTodo = (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (!todo) {
            return res.status(404).json({ message: 'Data not found' });
        } else {
            todo.title = req.body.title;
            todo.description = req.body.description;
            todo.save().then((todo) => {
                res.status(200).json({ message: 'Data updated', data: todo });
            }).catch((err) => {
                res.status(500).json({ message: 'Error updating data', error: err.message });
            })
        }
    })
}