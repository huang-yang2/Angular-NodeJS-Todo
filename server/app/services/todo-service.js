'use strict';
const mongoose = require('mongoose'),
    Todo = mongoose.model('todo');

// exports is making this function public in your js class
/**
 * returns a promise for search results
 * @param params
 * @returns {Promise}
 */
exports.search =function (params) {

    //params = {name = "}
    const promise = Todo.find(params).exec();
    return promise;
};


/**
 * save the new todo object
 * @param todo
 * @returns {*}
 */
exports.save = (todo)=>{
    const newTodo = new Todo(todo);
    return newTodo.save();// this will return a promise for me

};

/**
 * return the object by ID.
 *
 * @param todoId
 * @returns {Promise}
 */
exports.get =(todoId)=>{
    const todoPromise = Todo.findById(todoId).exec();
    return todoPromise;
};

/**
 * update an existing todo
 *
 * @param updatedTodo
 * @returns {Promise}
 */
exports.update = (updatedTodo) => {
    const promise = Todo.findByIdAndUpdate(
        {_id: updatedTodo.id},
        {$set: {
            title:updatedTodo.title,
                status:updatedTodo.status,
            description:updatedTodo.description,
                dueDate:updatedTodo.dueDate,
                time:updatedTodo.time,
            modifiedDate:new Date().setHours(new Date().getHours()-4)}}
        // updatedTodo
    ).exec();

    return promise;
};

/**
 * remove an todo
 *
 * @param todoId
 */
exports.delete = (todoId) =>{
    const promise = Todo.findByIdAndRemove(
        {_id: todoId}
    ).exec();
    return promise;
};
