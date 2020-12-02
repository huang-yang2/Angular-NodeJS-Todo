'use strict';

const todoService = require('./../services/todo-service');

/**
 * set response for todo search
 *
 * @param request
 * @param response
 */
exports.list = function (request, response) {
    const params ={};
    const promise = todoService.search(params);
    const result = (todo)=>{
        response.status(200);
        response.json(todo);
    };

    promise
        .then(result)
        .catch(renderErrorResponse(response));};
/**
 * Create a new todo and sets the response.
 * @param request
 * @param response
 */
exports.save = (request, response)=>{
    const todo = Object.assign({},request.body);
    const result = (savedTodo)=>{
        response.status(201);
        response.json(savedTodo);
    };
    const promise = todoService.save(todo);
    promise
        .then(result)
        .catch(renderErrorResponse(response));};

/**
 * get todos by their id
 *
 * @param request
 * @param response
 */
exports.get = (request, response) => {
    const todoId = request.params.id;
    const result = (todo) =>{
        response.status(200);
        response.json(todo);
    };
    const promise = todoService.get(todoId);
    promise
        .then(result)
        .catch(renderErrorResponse(response));};

/**
 * update a current todo
 *
 * @param request
 * @param response
 */
exports.update = (request, response) => {
    const todoId = request.params.id;
    const updatedTodo = Object.assign({},request.body);
    updatedTodo.id = todoId;
    const result = (todo) =>{
        response.status(200);
        response.json({
            "message":"Successfully updated."
        });
    };
    const promise = todoService.update(updatedTodo);
    promise
        .then(result)
        .catch(renderErrorResponse(response));};

/**
 * delete an order
 * @param request
 * @param response
 */
exports.delete = (request, response) => {
    const todoId = request.params.id;
    const result = (todo) =>{
        response.status(200);
        response.json({
            "message":"Successfully deleted."
        });
    };
    const promise = todoService.delete(todoId);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Throw error if error object is present
 *
 * @param response
 * @returns {errorCallback}
 */
let renderErrorResponse = (response) =>{
    const errorCallback = (error)=>{
        if(error){
            response.status(500);
            response.json({
                message:error.message
            });
        }
    };
    return errorCallback;
};