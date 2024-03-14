
// Todo {
//     title: string,
//     description: string,
//     completed: boolean
// }

/* 
Connecting string

mongodb+srv://anishjaiswal1220:QbMwsOUFkGEzx08a@learning.yj9nhdh.mongodb.net/
*/

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anishjaiswal1220:QbMwsOUFkGEzx08a@learning.yj9nhdh.mongodb.net/todos")
const todoSchema = {
    title: String,
    description: String,
    completed: Boolean
}

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
