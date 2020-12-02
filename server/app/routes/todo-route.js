'use strict';

const todoController = require('./../controllers/todo-controller');


module.exports = (app) =>{
    app.route('/todo')
        .get(todoController.list)
        .post(todoController.save);

    app.route('/todo/:id') //the id should be the same with the one in controller要和前面调用对一致
        .get(todoController.get)
        .put(todoController.update)
        .delete(todoController.delete);
}