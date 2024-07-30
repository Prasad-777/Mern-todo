const express = require('express');
const router = express.Router();
const { addTodo , getAllTodos, getTodoByID, updateTodo} = require('../controller/todo.controller')

router.post("/add", addTodo);
router.get("/all", getAllTodos);
router.get("/todo/:id", getTodoByID);
router.post("/update/:id", updateTodo);

module.exports = router;