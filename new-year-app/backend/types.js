const zod = require("zod");

// first end point
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

// last end point
const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}